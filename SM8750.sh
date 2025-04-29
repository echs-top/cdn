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
    "freq=(384000 556800 960000 1152000)"
    "freq=(1017600 1017600 1017600 1958400)"
)

#test_func "${max_freqs[0]}" "${max_freqs[1]}" "${max_freqs[2]}" "${max_freqs[3]}"
max_freqs=(
    "freq=(748800 1785600 2400000 3532800)"
    "freq=(1017600 1958400 3072000 4320000)"
)

hispeed_freqs=(
    "freq=(556800 1152000 1785600 2400000)"
    "freq=(1017600 1401600 1958400 3072000)"
)

#test_func "${hispeeds[0]}" "${hispeeds[1]}" "${hispeeds[2]}" "${hispeeds[3]}"
hispeed_loads=(
    "freq=(95 90 90 80)"
    "freq=(95 90 90 80)"
)

#test_func "${target_loads[0]}" "${target_loads[1]}" "${target_loads[2]}" "${target_loads[3]}"
target_loads=(
    "freq=(90 85 '80 1996800:90' 75)"
    "freq=(90 85 '80 2649600:90' 75)"
)

# 从上到下background，system-background, foreground，top
cpu_sets=(
    "group=('1-5' '1-5' '0-5' '0-7')"
    "group=('0-5' '0-5' '0-5' '0-7')"
    "group=('1-5' '1-7' '0-7' '0-7')"
    "group=('1-5' '1-7' '0-7' '0-7')"
)

# 为下面的每一个函数添加你需要执行额外的个性化操作
balance_func() {
    echo "90" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "90" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "0" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "0" > /dev/cpuctl/top-app/cpu.uclamp.min
     echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_level_1
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_level_1
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_low_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_low_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_high_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_high_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/boost
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/boost
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/hispeed_cond_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/hispeed_cond_freq
    echo "556800" > /sys/devices/system/cpu/cpufreq/policy0/walt/rtg_boost_freq
    echo "1017600" > /sys/devices/system/cpu/cpufreq/policy6/walt/rtg_boost_freq
    echo "6" > /sys/devices/system/cpu/cpufreq/policy0/walt/target_load_shift
    echo "6" > /sys/devices/system/cpu/cpufreq/policy6/walt/target_load_shift
    echo "1200" > /sys/devices/system/cpu/cpufreq/policy0/walt/target_load_thresh
    echo "1200" > /sys/devices/system/cpu/cpufreq/policy6/walt/target_load_thresh
    echo "50000" > /sys/devices/system/cpu/cpufreq/policy0/walt/down_rate_limit_us
    echo "50000" > /sys/devices/system/cpu/cpufreq/policy6/walt/down_rate_limit_us
    echo "100000" > /sys/devices/system/cpu/cpufreq/policy0/walt/up_rate_limit_us
    echo "100000" > /sys/devices/system/cpu/cpufreq/policy6/walt/up_rate_limit_us
}

powersave_func() {
    echo "60" > /sys/devices/system/cpu/cpufreq/policy0/conservative/down_threshold
    echo "1" > /sys/devices/system/cpu/cpufreq/policy0/conservative/freq_step
    echo "100000" > /sys/devices/system/cpu/cpufreq/policy0/conservative/sampling_rate
    echo "90" > /sys/devices/system/cpu/cpufreq/policy0/conservative/up_threshold
    echo "80" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "80" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "0" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "0" > /dev/cpuctl/top-app/cpu.uclamp.min
}

performance_func() {
    echo "max" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "max" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "5" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "5" > /dev/cpuctl/top-app/cpu.uclamp.min
}

fast_func() {
    echo "max" > /dev/cpuctl/foreground/cpu.uclamp.max
    echo "max" > /dev/cpuctl/top-app/cpu.uclamp.max
    echo "20" > /dev/cpuctl/foreground/cpu.uclamp.min
    echo "20" > /dev/cpuctl/top-app/cpu.uclamp.min
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_level_1
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_level_1
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_low_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_low_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/adaptive_high_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/adaptive_high_freq
    echo "1" > /sys/devices/system/cpu/cpufreq/policy0/walt/boost
    echo "1" > /sys/devices/system/cpu/cpufreq/policy6/walt/boost
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/hispeed_cond_freq
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/hispeed_cond_freq
    echo "1152000" > /sys/devices/system/cpu/cpufreq/policy0/walt/rtg_boost_freq
    echo "1958400" > /sys/devices/system/cpu/cpufreq/policy6/walt/rtg_boost_freq
    echo "4" > /sys/devices/system/cpu/cpufreq/policy0/walt/target_load_shift
    echo "4" > /sys/devices/system/cpu/cpufreq/policy6/walt/target_load_shift
    echo "800" > /sys/devices/system/cpu/cpufreq/policy0/walt/target_load_thresh
    echo "800" > /sys/devices/system/cpu/cpufreq/policy6/walt/target_load_thresh
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/down_rate_limit_us
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/down_rate_limit_us
    echo "0" > /sys/devices/system/cpu/cpufreq/policy0/walt/up_rate_limit_us
    echo "0" > /sys/devices/system/cpu/cpufreq/policy6/walt/up_rate_limit_us
}

#为ace5pro，阅读息屏用省电，日用均衡，游戏性能，极速模式拉满
#2025.04.29更新
