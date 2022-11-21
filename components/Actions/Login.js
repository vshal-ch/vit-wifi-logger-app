import { showToast } from "../Toast/ToastHelper";

const LOGINURL =
  "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://captive.apple.com/hotspot-detect.html";

const chooseToast = (text, setToast) => {
  if (text.includes("Successful Pronto Authentication")) {
    showToast("Login Successful", setToast);
  } else if (
    text.includes(
      "Sorry, please check your username and password and try again"
    )
  ) {
    showToast("Incorrect credentials!", setToast);
  } else if (
    text.trim() ===
    '<html><head><meta http-equiv="refresh" content="0;url=http://captive.apple.com/hotspot-detect.html"></head></html>'
  ) {
    showToast("Already connected", setToast);
  } else if (
    text.trim().includes("https://www.prontonetworks.com/xmlrpc.php")
  ) {
    showToast("Please connect to VIT Wifi", setToast);
  }
};

export const login = async (item, setToast) => {
  if (item.length < 1) {
    showToast("No credentials found!", setToast);
    return;
  }
  try {
    const resp = await fetch(LOGINURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body:
        "userId=" +
        encodeURIComponent(item[0]["username"]) +
        "&password=" +
        encodeURIComponent(item[0]["password"]) +
        "&serviceName=ProntoAuthentication&Submit22=Login",
    });

    let text = await resp.text();
    chooseToast(text, setToast);
  } catch (e) {
    showToast("No connection", setToast);
  }
};
