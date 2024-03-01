import { store } from "../store";
import axios from "axios";
import { change_token, change_user_data, change_loading } from "./UserSlice";
const logInHandler = async (formData) => {
  let config = {
    method: "post",
    url: "https://academy-training.appssquare.com/api/login",
    data: formData,
  };
  store.dispatch(change_loading());
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
    })
    .finally(() => store.dispatch(change_loading()));
};
const signUpHandler = async (formData) => {
  let config = {
    method: "post",
    url: "https://academy-training.appssquare.com/api/sign_up",
    data: formData,
  };
  store.dispatch(change_loading());
  await axios
    .request(config)
    .then((res) => {
      return Promise.resolve("account created");
    })
    .catch((err) => {
      return Promise.reject("failed");
    })
    .finally(() => store.dispatch(change_loading()));
};
export { logInHandler, signUpHandler };
