// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");
  
    if (name === "" || email === "") {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    } else {
      message.textContent = `Thanks for submitting, ${name}!`;
      message.style.color = "green";
    }
  });
  
  // Interactive Color Button
  document.getElementById("colorButton").addEventListener("click", function () {
    const box = document.getElementById("colorBox");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
  });
  