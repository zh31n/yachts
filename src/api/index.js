import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://45.130.42.157:4000/api/",
});

const api = {
  AllYachts(town) {
    return instance.get(`yachts/town?town=${town}`);
  },
  getAbout(town) {
    return instance.get(`about?town=${town}`);
  },
};

export default api;
