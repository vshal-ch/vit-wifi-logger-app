import { showToast } from "../Toast/ToastHelper";

const LOGOUTURL = "http://phc.prontonetworks.com/cgi-bin/authlogout";

export const logout = async (setToast) => {
  try {
    const res = await fetch(LOGOUTURL);
    let text = await res.text();
    if (text.includes("Logout successful")) {
      showToast("Logout successful", setToast);
    } else if (text.includes("Logout Failure")) {
      showToast("No active wifi session found", setToast);
    }
  } catch (e) {
    showToast("No connection", setToast);
  }
};
