let cacheName = "my-horario-pwa";
let filesToCache = ["/", "/index.html", "/horario", "/horarioPe", "/manifest.json",
                    "/CSS/styles.css", "/CSS/stylesH.css", "/CSS/stylesPE.css","/js/main.js"];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
  
  /* disponibilizando o conteudo quando estiver offline */
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  
  