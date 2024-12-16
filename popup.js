console.log('This is a popup!');

// popup.js
// chrome.webRequest API를 활용해 네트워크 요청 완료 시 오류 상태(4xx, 5xx)를 감지하고 해당 정보를 저장한다.
// 이 예제는 요청/응답 헤더, 상태코드 등을 chrome.storage.local에 간단히 누적 저장하는 방식이다.
// 추후 UI나 IndexedDB, 백엔드 전송 기능을 추가할 수 있다.
// service_worker.js (Manifest V3)
// chrome.webRequest API를 활용해 네트워크 요청 완료 시 오류 상태(4xx, 5xx)를 감지하고 해당 정보를 저장
// Manifest V3 에서는 background service worker 형태로 동작

console.log("onInstalled")
chrome.runtime.onInstalled.addEventListener(() => {
    chrome.storage.local.set({ errorLogs: [] });
});
//
// chrome.webRequest.onCompleted.addEventListener(
//     (details) => {
//         console.log("onCompleted")
//         const isErrorStatus = details.statusCode >= 400;
//         if (isErrorStatus) {
//             const logEntry = {
//                 url: details.url,
//                 method: details.method,
//                 statusCode: details.statusCode,
//                 requestId: details.requestId,
//                 timeStamp: details.timeStamp
//                 // 필요하다면 details.responseHeaders 등을 활용해 응답 헤더 로그 추가 가능
//             };
//
//             chrome.storage.local.get(["errorLogs"], (result) => {
//                 const logs = Array.isArray(result.errorLogs) ? result.errorLogs : [];
//                 logs.push(logEntry);
//                 chrome.storage.local.set({ errorLogs: logs });
//             });
//         }
//     },
//     { urls: ["<all_urls>"] },
//     ["responseHeaders"]
// );
