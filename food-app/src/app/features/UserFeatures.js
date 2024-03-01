import { store } from "../store";
import axios from "axios";
import { change_token, change_user_data } from "./UserSlice";
const logInHandler = async (formData) => {
  let config = {
    method: "post",
    url: "https://academy-training.appssquare.com/api/login",
    data: formData,
  };
  await axios
    .request(config)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        store.dispatch(change_token(res.data.token));
        store.dispatch(change_user_data(res.data.data));
      }
    })
    .catch((err) => {
      return Promise.reject("failed");
    });
};
const signUpHandler = async (formData) => {
  let config = {
    method: "post",
    url: "https://academy-training.appssquare.com/api/sign_up",
    data: formData,
  };
  await axios
    .request(config)
    .then((res) => {
      return Promise.resolve("success");
    })
    .catch((err) => {
      return Promise.reject("failed");
    });
};
export { logInHandler, signUpHandler };
