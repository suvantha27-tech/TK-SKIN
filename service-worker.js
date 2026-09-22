self.addEventListener("install", e=>{
caches.open("tk").then(cache=>cache.addAll(["/"]));
});
