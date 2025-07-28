self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("todo-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/second.css",
        "/alarm_clock.mp3",
        "/image/icon.jpeg",
        "/image/alarm.jpeg",
        "/image/todo1.jpeg",
        "/image/checked.jpeg",
        "/image/uncheked.jpg",
        "/image/delete-icon.jpeg" 
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
