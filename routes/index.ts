export default eventHandler(() => {
  return new Response(`<!doctype HTML><html><head><meta charset="utf-8"></head><body><h1>sw-proxy</h1></body></html>`, {
    headers: {
      "content-type": "text/html",
    }
  })
})
