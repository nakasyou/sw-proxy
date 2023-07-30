self.addEventListener('fetch', async (event) => {
  if (event.request.url.includes('hello')) {
    event.respondWith(new Response('Hello world'))
  } else {
    event.respondWith(await fetch(event.request))
  }
})
