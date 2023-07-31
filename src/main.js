alert('OK')
try {
  const registration = await navigator.serviceWorker.register('/sw-proxy/src/sw.js', {
    scope: '/',
  })
} catch(e) {
  alert(e)
}
