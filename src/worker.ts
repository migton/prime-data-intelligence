export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/products")) {
      return env.ASSETS.fetch(new Request(new URL("/data/products.json", request.url)));
    }

    if (url.pathname.startsWith("/api/insights")) {
      return env.ASSETS.fetch(new Request(new URL("/data/insights.json", request.url)));
    }

    return env.ASSETS.fetch(request);
  }
};
