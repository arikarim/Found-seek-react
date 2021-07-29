export const alert = (data) => {
  const alert = document.querySelector(".alert");
  alert.classList.remove("d-none");
  alert.classList.add("d-block");
  alert.innerHTML = data.data.message;
  setTimeout(() => {
    alert.classList.add("d-none");
    alert.classList.remove("d-block");
  }, 3000);
};
