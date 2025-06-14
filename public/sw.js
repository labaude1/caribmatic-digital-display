
// Service Worker for Caribmatic - Performance & Caching
const CACHE_NAME = 'caribmatic-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Define what to cache
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/placeholder.svg'
];

const CACHE_STRATEGIES = {
  images: 'cache-first',
  css: 'stale-while-revalidate',
  js: 'stale-while-revalidate',
  html: 'network-first',
  api: 'network-first'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    handleRequest(event.request)
  );
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const extension = url.pathname.split('.').pop();
  
  try {
    // Cache strategy based on file type
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'].includes(extension)) {
      return await cacheFirst(request, DYNAMIC_CACHE);
    }
    
    if (['css', 'js'].includes(extension)) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    }
    
    if (url.pathname === '/' || extension === 'html') {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Default to network first
    return await networkFirst(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('SW: Error handling request', error);
    return fetch(request);
  }
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('SW: Cache first failed', error);
    throw error;
  }
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Implementation for offline analytics sync
  console.log('Syncing offline analytics data');
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle actualité Caribmatic',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    data: {
      url: '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Caribmatic', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
