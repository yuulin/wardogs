// Assets-first 入口：html_handling=none 模式下目录路径不再自动映射 index.html，
// 在此为所有以 / 结尾的路径（含根路径与 de/es/ja 等语言目录）显式补 index.html，
// 其余请求原样交给静态资产（未命中由资产层返回404）。
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    if (path.endsWith("/")) {
      path += "index.html";
    }
    return env.ASSETS.fetch(new URL(path, url));
  }
};
