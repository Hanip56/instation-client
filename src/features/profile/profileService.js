import axios from "axios";
import { BASE_URL } from "../../constants";

const API_URL = BASE_URL + "/api/user/";

const getProfileInfo = async (username, token) => {
  const config = {
    Authorization: `Bearer ${token}`,
  };

  const res = await axios.get(API_URL + username, config);

  return res.data;
};

const profileService = {
  getProfileInfo,
};

export default profileService;
