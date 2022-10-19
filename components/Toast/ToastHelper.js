export const showToast = (s, setToast) => {
  setToast((toast) => {
    toast = { ...toast };
    toast.visible = true;
    toast.message = s;
    toast.count += 1;
    return toast;
  });
  setTimeout(() => {
    setToast((toast) => {
      toast = { ...toast };
      toast.count -= 1;
      if (toast.count < 1) {
        toast.visible = false;
        toast.message = "";
      }
      return toast;
    });
  }, 1000);
};
