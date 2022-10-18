import { showToast } from "./ToastHelper";

const LOGOUTURL = "http://phc.prontonetworks.com/cgi-bin/authlogout";
export const logout = async () => {
  try {
    const res = await fetch(LOGOUTURL);
    let text = await res.text();
    if (text.includes("Logout successful")) {
      showToast("Logout successful");
    } else if (text.includes("Logout Failure")) {
      showToast("No active wifi session found");
    }
  } catch (e) {
    showToast("No connection");
  }
};
