export default {
  async fetch(request, env, ctx) {
    // 统一配置跨域与允许 iframe 嵌入的头部
    const injectHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Security-Policy": "frame-ancestors *",
    };

    // 处理 OPTIONS 预检请求
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: injectHeaders });
    }

    try {
      // 1. 尝试从全局绑定的静态资源中获取文件
      let response = await env.ASSETS.fetch(request);

      // 2. 包装原始响应，注入我们自定义的 Headers
      const newResponse = new Response(response.body, response);
      Object.keys(injectHeaders).forEach(key => {
        newResponse.headers.set(key, injectHeaders[key]);
      });

      return newResponse;
    } catch (e) {
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
