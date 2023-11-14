import { clientsClaim } from "workbox-core";
import {
	cleanupOutdatedCaches,
	createHandlerBoundToURL,
	precacheAndRoute,
} from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";

self.skipWaiting();
clientsClaim();

// Clean old assets
async function cleanCaches() {
	try {
		cleanupOutdatedCaches();
		console.log("Outdated caches have been cleaned up successfully.");
	} catch (error) {
		console.error("Failed to clean outdated caches:", error);
	}
}

// Call the cleanCaches function to remove outdated caches
cleanCaches();

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")));

// Implement the 'install' event handler.
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('my-cache').then(function(cache) {
//       // Cache the resources that you want to be available offline.
//       return cache.addAll([
//         '/',
//         '/index.html',
//       ]);
//     })
//   );
// });

// Activate the service worker.
// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     self.clients.claim()
//   );
// });

async function handlePushEvent(event) {
	try {
		let payload = "Default Push Message";
		if (event.data) {
			payload = event.data.text();
		}

		let newPushMessage = JSON.parse(payload);

		const payloadOptions = {
			body: newPushMessage.body,
			icon: newPushMessage.icon,
			data: {
				url: newPushMessage.data.url,
				icon: newPushMessage.data.icon,
			},
		};

		await self.registration.showNotification(newPushMessage.title, payloadOptions);
	} catch (error) {
		console.error("Failed to handle push event:", error);

		// Optionally, you can schedule a background sync for retrying.
		if ('sync' in self.registration) {
			await self.registration.sync.register('pushRetry');
		}
	}
}

// Subscribe to push notifications
self.addEventListener("push", async function (event) {
	event.waitUntil(
		handlePushEvent(event)
	);
});

self.addEventListener('sync', function (event) {
	if (event.tag === 'pushRetry') {
		event.waitUntil(handlePushEvent(event));
	}
});

self.addEventListener("notificationclick", function (event) {
	event.notification.close();
	const url = event.notification.data.url;
	console.log("🚀 ~ file: sw.js:75 ~ event.notification:", event.notification);
	// Handle notification click event as desired (e.g., open a specific URL)
	event.waitUntil(
		// eslint-disable-next-line no-undef
		clients.openWindow(url),
		// clients.openWindow(url),
	);
});

self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
