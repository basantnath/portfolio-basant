async function getCountry() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    document.querySelector("#country").textContent = ` ${data.country_name}`;
  } catch (error) {
    console.error("Error fetching location data:", error);
    document.getElementById("country").textContent = "Unable to fetch country.";
  }
}

getCountry();
