import { db, collection, addDoc } from "./firebase.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await testConnection();
  } catch (error) {
    console.error("Connection test failed:", error);
  }
});

const form = document.getElementById("contact-form");
const alert = document.getElementById("alert");

// Show alert message function
function showAlert(message, isError = false) {
  alert.textContent = message;
  alert.classList.remove("hidden");
  alert.classList.remove("bg-green-500", "bg-red-500");
  alert.classList.add(isError ? "bg-red-500" : "bg-green-500");

  // Hide alert after 5 seconds
  setTimeout(() => {
    alert.classList.add("hidden");
  }, 5000);
}

// Form submission handler
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form elements
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate required fields
    if (!name || !email || !message) {
      showAlert("Please fill in all required fields.", true);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Please enter a valid email address.", true);
      return;
    }

    try {
      // Disable submit button
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      // Save to Firebase
      await addDoc(collection(db, "portfolio-forms"), {
        name,
        email,
        subject: subject || "No Subject",
        message,
        timestamp: new Date(),
      });

      // Show success message
      showAlert("Your message has been sent successfully!");

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      showAlert(
        "There was an error sending your message. Please try again.",
        true
      );
    } finally {
      // Re-enable submit button
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  });
} else {
  console.error("Form element not found! Check the form ID.");
}
