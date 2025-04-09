<script>
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (value.length > 0 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && e.target.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  // Automatically focus the first input on load
  window.addEventListener("DOMContentLoaded", () => {
    inputs[0].focus();
  });
</script>
