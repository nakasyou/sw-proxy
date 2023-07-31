alert("ok")
const registration = navigator.serviceWorker.register('/sw-proxy/sw.js', {
  scope: '/sw-proxy',
}).catch(alert).then(()=>{
  alert("a")
})

