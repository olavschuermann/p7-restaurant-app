// Name + version number for cache
const cacheName = 'restaurant-app-udacity_v1.0';
// Files to cache:
const cacheFiles = [
	'./',
	'./css/styles.css',
    './data/restaurants.json',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
    './img/10.jpg',
	'./index.html',
    './js/main.js',
	'./js/dbhelper.js',
	'./js/restaurant_info.js',
    './restaurant.html'
];

// Wait for install + cache files
self.addEventListener('install', function (evt) {
	evt.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('Service Worker: Files cached!');
			return cache.addAll(cacheFiles);
		})
	);
});

//Respond to requests
self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.match(evt.request)
		.then((response) => {
			return response || fetch(evt.request);
		})
	);
})