// Hanta PWA service worker — 설치(홈 화면 추가) 요건 충족용.
// 캐시를 쓰지 않고 모든 요청을 네트워크로 그대로 전달 → 기존 사이트 동작/배포 갱신에 영향 없음.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
