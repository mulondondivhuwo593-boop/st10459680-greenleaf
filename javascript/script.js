/* SIMPLE JAVASCRIPT FOR POE */

/* --------- ACCORDION --------- */
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("open");
  });
});

/* --------- TABS --------- */
document.querySelectorAll("[data-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

/* --------- MODAL --------- */
function openModal() {
  document.getElementById("modal").classList.add("open");
}
function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

/* --------- LIVE CLOCK --------- */
const clock = document.getElementById("clock");
if (clock) {
  setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString();
  }, 1000);
}

/* --------- SEARCH FILTER --------- */
/ GreenLeaf Enquiry Form Validation

document.getElementById("enquiryForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const message = this.enquiry.value.trim();
    const feedback = document.getElementById("enquiryFeedback");

    // Validate empty fields
    if (!name || !email || !phone || !message) {
        feedback.textContent = "Please fill in all the fields.";
        feedback.style.color = "red";
        return;
    }

    // Validate email format
    const emailRule = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRule.test(email)) {
        feedback.textContent = "Enter a valid email address.";
        feedback.style.color = "red";
        return;
    }

    // Validate phone number (numbers only)
    const phoneRule = /^[0-9]{7,15}$/;
    if (!phoneRule.test(phone)) {
        feedback.textContent = "Phone number must be digits only (7–15 numbers).";
        feedback.style.color = "red";
        return;
    }

    // SUCCESS
    feedback.textContent = "Thank you! Your enquiry has been submitted.";
    feedback.style.color = "green";

    this.reset();
});
 

