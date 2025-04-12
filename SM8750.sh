#!/bin/bash
## parameters
policy_num=(0 6)
counters=(0 1) # counters的数量和policy_num一样
cpu_groups=(background system-background foreground top-app)

#每行格式freq=(powersave balance performance fast)
#行数和policy_num一样
cpu_govers=(
    "freq=(conservative walt scx walt)"
    "freq=(conservative walt scx walt)"
)

#test_func "${min_freqs[0]}" "${min_freqs[1]}" "${min_freqs[2]}" "${min_freqs[3]}"
min_freqs=(
    "freq=(384000 556800 960000 1785600)"
    "freq=(1017600 1017600 1017600 1958400)"
)

#test_func "${max_freqs[0]}" "${max_freqs[1]}" "${max_freqs[2]}" "${max_freqs[3]}"
max_freqs=(
    "freq=(748800 1785600 2400000 3532800)"
    "freq=(1017600 1958400 3072000 4320000)"
)

hispeed_freqs=(
    "freq=(748800 1152000 1785600 2400000)"
    "freq=(1017600 1401600 1958400 3072000)"
)

#test_func "${hispeeds[0]}" "${hispeeds[1]}" "${hispeeds[2]}" "${hispeeds[3]}"
hispeed_loads=(
    "freq=(95 85 85 75)"
    "freq=(95 85 85 75)"
)

#test_func "${target_loads[0]}" "${target_loads[1]}" "${target_loads[2]}" "${target_loads[3]}"
target_loads=(
    "freq=(90 80 '80 1996800:90' 70)"
    "freq=(90 80 '80 2649600:90' 70)"
)

# 从上到下background，system-background, foreground，top
cpu_sets=(
    "group=('0-5' '0-5' '0-5' '0-7')"
    "group=('0-5' '0-5' '0-5' '0-7')"
    "group=('0-5' '0-5' '0-7' '0-7')"
    "group=('0-5' '0-7' '0-7' '0-7')"
)

# 为下面的每一个函数添加你需要执行额外的个性化操作
balance_func() {
    echo "80" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "80" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "0" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "0" > /dev/cpuctl/top-app/cpu.uclamp.min
}

powersave_func() {
    echo "75" > /sys/devices/system/cpu/cpufreq/policy0/conservative/down_threshold
    echo "1" > /sys/devices/system/cpu/cpufreq/policy0/conservative/freq_step
    echo "90" > /sys/devices/system/cpu/cpufreq/policy0/conservative/up_threshold
    echo "60" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "60" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "0" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "0" > /dev/cpuctl/top-app/cpu.uclamp.min
}

performance_func() {
    echo "max" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "max" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "20" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "20" > /dev/cpuctl/top-app/cpu.uclamp.min
}

fast_func() {
    echo "max" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "max" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "60" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "60" > /dev/cpuctl/top-app/cpu.uclamp.min
}


## 想法 ##

#①省电给低负载应用(阅读、计算器)、息屏用；②均衡仅在官方基础上限制频率；③性能scx给游戏和高负载应用；④极速拉满性能，记得加散热

#偏向为ace5pro优化，欢迎交流一起完善(◍•ᴗ•◍)