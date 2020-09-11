import axios from "axios";
import history from "../../utils/history";
import { setModalStatus } from "./modal";

export const newUser = (user) => (dispatch) => {
  axios.post("/api/users", user)
  .then(() => {
    dispatch(setModalStatus(false, "register"))
    history.push("/")
  })
  .catch((err)=>console.log(err))
};
