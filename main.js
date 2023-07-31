const registration = await navigator.serviceWorker.register('/sw-proxy/sw.js', {
  scope: '/sw-proxy',
}).catch(alert)

