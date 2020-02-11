import config from "../../config";
const CatHelper = {
  getCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cat`,)

  },

  deleteCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cat/remove`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    });
  }
};
export default CatHelper;
