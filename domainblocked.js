(function () {
    // Allowed domains (আপনি চাইলে যত খুশি domain দিতে পারবেন)
    const allowedDomains = [
      "toolhub-ova.pages.dev",   // আপনার মূল ডোমেইন
      "www.toolhub-ova.pages.dev",
      "localhost"         // Localhost এ টেস্ট করার জন্য
    ];

    // বর্তমান domain চেক করুন
    const currentDomain = window.location.hostname;

    if (!allowedDomains.includes(currentDomain)) {
      // যদি allow না হয়, তাহলে Redirect করে অন্য পেজে পাঠান
      window.location.href = "https://freewebshops.blogspot.com";
    }
  })();