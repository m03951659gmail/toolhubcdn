// main.js
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// লোকাল ফাইল load
loadScript("localfile1.js")
  .then(() => loadScript("localfile2.js"))
  .then(() => console.log("সব ফাইল লোড হয়ে গেছে ✅"))
  .catch(err => console.error("লোডিং এ সমস্যা:", err));

// CDN থেকে ফাইল load
loadScript("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")
  .then(() => {
    console.log("Axios loaded from CDN ✅");
  });
