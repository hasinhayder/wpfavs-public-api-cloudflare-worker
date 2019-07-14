let url = require("url");
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Fetch user's favorite themes and plugins from WordPress.org
 * @param {Request} request
 */
async function handleRequest(request) {
  let xdata = { body: { themes: [], plugins: [] } },
    detailed = false,
    parts = url.parse(request.url, true).query;

  if (parts.detailed == "true") {
    detailed = true;
  }

  if (parts.user != undefined) {
    let data = await fetch(
      "https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[per_page]=250&request[user]=" +
        parts.user
    ).then(res => res.json());
    for (let i in data.plugins) {
      if (!detailed) {
        xdata.body.plugins.push(data.plugins[i].slug);
      } else {
        xdata.body.plugins.push(data.plugins[i]);
      }
    }

    data = await fetch(
      "https://api.wordpress.org/themes/info/1.2/?action=query_themes&request[per_page]=250&request[browse]=favorites&request[user]=" +
        parts.user
    ).then(res => res.json());
    for (let i in data.themes) {
      if (!detailed) {
        xdata.body.themes.push(data.themes[i].slug);
      } else {
        xdata.body.themes.push(data.themes[i]);
      }
    }
    return new Response(JSON.stringify(xdata), {
      status: 200,
      statusText: "OK",
      headers: {
        "cache-control": "max-age=100",
        "content-type": "application/json; charset=utf-8",
        "content-encoding": "gzip"
      }
    });
  } else {
    return new Response(
      "Deeveloped By <a href='https://github.com/hasinhayder' target='_blank'>Hasin Hayder</a>",
      {
        status: 200,
        statusText: "OK",
        headers: {
          "cache-control": "max-age=100",
          "content-type": "text/html; charset=utf-8",
          "content-encoding": "gzip"
        }
      }
    );
  }
}
