import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST || []); // Handle case where __WB_MANIFEST might be undefined

const indexURL = "/index.html";

registerRoute(({ request, url }) => {
  if (request.mode !== "navigate") {
    return false;
  }
  if (url.pathname.startsWith("/_")) {
    return false;
  }
  if (url.pathname.match(/\/[^/?]+\.[^/]+$/)) {
    return false;
  }
  return true;
}, createHandlerBoundToURL(indexURL));

registerRoute(
  ({ url }) => {
    /* eslint-disable-next-line no-restricted-globals */
    const workerOrigin = self.location.origin;
    return (
      (url.origin === workerOrigin && url.pathname.endsWith(".png")) ||
      (url.origin === workerOrigin && url.pathname.endsWith(".svg")) ||
      (url.origin === workerOrigin && url.pathname.endsWith(".jpg"))
    );
  },
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    /* eslint-disable-next-line no-restricted-globals */
    self.skipWaiting();
  }
});
