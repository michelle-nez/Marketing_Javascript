window.dataLayer = window.dataLayer || [];

const form = document.querySelector("#leadForm");
const formStatus = document.querySelector("#formStatus");
const eventLog = document.querySelector("#eventLog");

form.addEventListener("submit", event => {
  event.preventDefault();

  // TODO 1: Read and trim name and email.
  var name = form.querySelector("#name").value.trim();
  var email = form.querySelector("#email").value.trim();
   // TODO 2: Read the selected interest.
  var interest = form.querySelector("#interest").value.trim();  
 
  // TODO 3: If any value is missing, show an error and return.
  if (!name || !email || !interest) {
    formStatus.textContent = "Please fill out all fields.";
    return;
  }

  // TODO 4: Create a lead_form_submit event that includes only formName and interest.
  // IMPORTANT: Do not put name or email in the analytics event.
  const eventData = {
    event: "lead_form_submit",
    formName: form.dataset.formName,
    interest: interest
  };
  // TODO 5: Push the event, show success, and reset the form.
  window.dataLayer.push(eventData);
  formStatus.textContent = "Form submitted successfully!";
  form.reset(); 
});
