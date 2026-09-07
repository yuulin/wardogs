export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    if (path.endsWith("/")) {
      path += "index.html";
    }
    let response = await env.ASSETS.fetch(new URL(path, url));
    if (response.status === 404) {
      const lastSegment = path.split("/").pop();
      if (lastSegment && !lastSegment.includes(".")) {
        const htmlUrl = new URL(path + ".html", url);
        const htmlResponse = await env.ASSETS.fetch(htmlUrl);
        if (htmlResponse.status === 200) {
          return htmlResponse;
        }
      }
    }
    return response;
  }
};
