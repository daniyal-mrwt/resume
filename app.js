    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              light: '#3b82f6',
              dark: '#60a5fa'
            },
            secondary: {
              light: '#10b981',
              dark: '#34d399'
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out',
            'slide-up': 'slideUp 0.5s ease-out'
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            },
            slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' }
            }
          }
        }
      }
    }



//form submit
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent form from reloading the page

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple email validation regex
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      // Validation
      if (!name || !email || !subject || !message) {
        showAlert("Please fill out all fields.", "error");
        return;
      }

      if (!emailPattern.test(email)) {
        showAlert("Please enter a valid email address.", "error");
        return;
      }

      // Simulate successful message send
      showAlert("Thank you! Your message has been sent.", "success");

      // Optional: Reset form
      form.reset();
    });

    function showAlert(msg, type) {
      const existing = document.getElementById("form-alert");
      if (existing) existing.remove();

      const alertBox = document.createElement("div");
      alertBox.id = "form-alert";
      alertBox.className = `mt-6 text-center px-6 py-3 rounded-lg font-medium ${
        type === "success"
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-700 border border-red-300"
      }`;
      alertBox.textContent = msg;

      form.appendChild(alertBox);
    }
  });







  