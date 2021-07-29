import axios from "axios";

export const checking = (user, history) => {
  user === "Not_Logged" ? history.push("/login") : history.push("/");
};

export const logout = async (setUser, history) => {
  try {
    const toke = JSON.parse(localStorage.getItem("token"));
    await axios.delete("http://localhost:3001/users/sign_out", {
      headers: {
        "Content-Type": "application/json",
        Authorization: toke,
      },
    });
    localStorage.setItem("token", JSON.stringify(""));
    setUser("Not Logged");
    history.push("/login");
    const alert = document.querySelector(".alert");
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
    alert.innerHTML = "Signed out successfuly";
    setTimeout(() => {
      alert.classList.add("d-none");
      alert.classList.remove("d-block");
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};
