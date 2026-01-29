import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

/**
 * Component Notifikasi (Success / Error)
 */
export default function Notification({ open, onClose, message, type }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
