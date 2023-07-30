try {
  const registration = await navigator.serviceWorker.register('/sw-proxy/sw/sw.js', {
    scope: '/sw-proxy',
  })
} catch(e) {
  alert(e)
}
