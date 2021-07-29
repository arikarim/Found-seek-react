import axios from "axios";

export const DeleteDevice = async (id) => {
  try {
    const toke = JSON.parse(localStorage.getItem("token"));
    await axios.delete(`http://localhost:3001/devices/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: toke,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
