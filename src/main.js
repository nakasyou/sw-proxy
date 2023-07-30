alert('OK')
try {
  const registration = await navigator.serviceWorker.register('/sw-proxy/src/sw.js', {
    scope: '/sw-proxy',
  })
} catch(e) {
  alert(e)
}
