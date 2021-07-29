import axios from "axios";
import { useEffect, useState } from "react";
import Routes from "../Routes/Routes";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("Not_Logged");
  const [user_id, setUser_id] = useState("");

  const fetchData = async () => {
    const toke = JSON.parse(localStorage.getItem("token"));
    setToken(toke);

    if (token !== "") {
      try {
        const dataa = await axios.get("http://localhost:3001/member", {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        dataa.data.message === "Yeppa You did it"
          ? setUser("Logged")
          : setUser("Not_Logged");
        localStorage.setItem(
          "token",
          JSON.stringify(dataa.headers.authorization)
        );
      } catch (e) {
        localStorage.setItem("token", JSON.stringify(""));
        const toke = JSON.parse(localStorage.getItem("token"));
        console.log(toke);
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [token, user]);
  return (
    <div className="height">
      <Routes
        user_id={user_id}
        setUser_id={setUser_id}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default App;
