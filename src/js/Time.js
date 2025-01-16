function updateTime() {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kathmandu",
  };
  const timeString = now.toLocaleString("en-US", options);
  document.getElementById("localTime").textContent = timeString;
  document.getElementById("mobileLocalTime").textContent = timeString;
}

// Update time immediately and then every minute
updateTime();
setInterval(updateTime, 60000);
