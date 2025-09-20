function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// নতুন ফিচার লোড করুন
loadScript('domainblocked.js', function() {
    console.log("New feature loaded!");
});