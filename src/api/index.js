import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://45.130.42.157:4001/api/",
});

const api = {
  AllYachts(town) {
    return instance.get(`yachts/town?town=${town}`);
  },
  getAbout(town) {
    return instance.get(`about?town=${town}`);
  },
  getYachtInfo(id) {
    return instance.get(`yachts/id?id=${id}`);
  },
  getFAQ(town) {
    return instance.get(`faq?town=${town}`);
  },
  sendMailWithOutYacht(name, phone) {
    return instance.get(`mail?name=${name}&phone=${phone}`);
  },
  sendMailWithYacht(name, phone, yachtmodel) {
    return instance.get(`mail?name=${name}&phone=${phone}&yacht=${yachtmodel}`);
  },
  getService(town, service) {
    return instance.get(`services?town=${town}&name=${service}`);
  },
};

export default api;
