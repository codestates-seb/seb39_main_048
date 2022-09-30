import toast from "react-hot-toast";

const useToaster = (msg, icon) => {
  const toaster = toast(msg, {
    icon: icon,
    duration: 1500,
    position: "top-center",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      boxShadow: "none",
      marginTop: "90px",
      fontSize: "14px",
    },
  });

  return toaster;
};

export default useToaster;
