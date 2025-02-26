if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://raw.githubusercontent.com/APMOBILESTORE/mypwa/refs/heads/main/service-worker.js')
    .then((reg)=> console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
} 
