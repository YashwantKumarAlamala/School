import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog, DialogContent, Box, Typography,
  TextField, Button, Grid, IconButton,
  Snackbar, Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";

const INITIAL = { childName: "", parentName: "", email: "", classApplying: "", phone: "", message: "" };
const ERRORS_INIT = { childName: "", parentName: "", email: "", phone: "" };

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fafafa",
    "& fieldset": { borderColor: "rgba(21,37,61,0.15)" },
    "&:hover fieldset": { borderColor: "#fbb123" },
    "&.Mui-focused fieldset": { borderColor: "#15253d", borderWidth: 2 },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#15253d" },
};

export default function AdmissionFormModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(ERRORS_INIT);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = () => {
    const e = { ...ERRORS_INIT };
    if (!form.childName.trim()) e.childName = "Required";
    if (!form.parentName.trim()) e.parentName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter 10 digits";
    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);
    setSendError(false);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_ADMISSIONS_TEMPLATE_ID,
      {
        child_name:     form.childName,
        parent_name:    form.parentName,
        email:          form.email,
        class_applying: form.classApplying || "—",
        phone:          form.phone,
        message:        form.message || "—",
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => { setSubmitted(true); setForm(INITIAL); })
      .catch((err) => { console.error("EmailJS error:", err); setSendError(true); })
      .finally(() => setSending(false));
  };

  const handleClose = () => {
    setSubmitted(false);
    setSendError(false);
    setErrors(ERRORS_INIT);
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(21,37,61,0.25)",
          },
        }}
      >
        {/* Header */}
        <Box sx={{
          background: "linear-gradient(135deg, #15253d, #1e3a5f)",
          px: { xs: 3, md: 4 }, py: 3,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{
              width: 38, height: 38, borderRadius: "10px",
              backgroundColor: "#fbb123", color: "#15253d",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <SchoolIcon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 900,
                color: "#fff", fontSize: "1.1rem", lineHeight: 1.2,
              }}>
                Admission Enquiry
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>
                Horizon Valley School · 2026–27
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleClose} sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "#fbb123" } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ px: { xs: 3, md: 4 }, py: 3, backgroundColor: "#fff" }}>
          {submitted ? (
            /* ── SUCCESS STATE ── */
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Box sx={{
                width: 72, height: 72, borderRadius: "50%",
                backgroundColor: "rgba(251,177,35,0.12)", mx: "auto", mb: 2,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.2rem",
              }}>
                🎉
              </Box>
              <Typography sx={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 900,
                fontSize: "1.4rem", color: "#15253d", mb: 1,
              }}>
                Enquiry Submitted!
              </Typography>
              <Typography sx={{ color: "#867661", lineHeight: 1.7, mb: 3 }}>
                Thank you for reaching out. Our admissions team will contact you within <strong>24 hours</strong>.
              </Typography>
              <Button onClick={handleClose} variant="contained" sx={{
                backgroundColor: "#fbb123", color: "#15253d",
                fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                borderRadius: "10px", textTransform: "none", px: 4,
                "&:hover": { backgroundColor: "#f68e1e" },
              }}>
                Close
              </Button>
            </Box>
          ) : (
            /* ── FORM ── */
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography sx={{
                fontFamily: "'Playfair Display', serif", fontStyle: "italic",
                color: "#867661", fontSize: "0.88rem", mb: 1.5,
              }}>
                Fill in the details below and we'll get back to you shortly.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth size="small" label="Child's Full Name *"
                    value={form.childName} onChange={handleChange("childName")}
                    error={!!errors.childName} helperText={errors.childName} sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth size="small" label="Class Applying For"
                    value={form.classApplying} onChange={handleChange("classApplying")} sx={fieldSx} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth size="small" label="Parent / Guardian Name *"
                    value={form.parentName} onChange={handleChange("parentName")}
                    error={!!errors.parentName} helperText={errors.parentName} sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth size="small" label="Phone Number *"
                    value={form.phone} onChange={handleChange("phone")}
                    error={!!errors.phone} helperText={errors.phone} sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth size="small" label="Email Address *" type="email"
                    value={form.email} onChange={handleChange("email")}
                    error={!!errors.email} helperText={errors.email} sx={fieldSx} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth size="small" label="Message (optional)" multiline rows={2}
                    value={form.message} onChange={handleChange("message")} sx={fieldSx} />
                </Grid>
              </Grid>

              {sendError && (
                <Typography sx={{ color: "#d32f2f", fontSize: "0.82rem", mt: 1 }}>
                  Something went wrong. Please try again or call us directly.
                </Typography>
              )}

              <Button fullWidth variant="contained" onClick={handleSubmit} disabled={sending}
                sx={{
                  mt: 2, py: 1.6, borderRadius: "10px", textTransform: "none",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem",
                  background: sending ? "#ccc" : "linear-gradient(135deg, #15253d, #1e3a5f)",
                  boxShadow: "0 6px 20px rgba(21,37,61,0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #fbb123, #f68e1e)",
                    color: "#15253d",
                    boxShadow: "0 8px 25px rgba(251,177,35,0.35)",
                    transform: "translateY(-1px)",
                  },
                }}>
                {sending ? "Sending…" : "Submit Enquiry"}
              </Button>

              <Typography sx={{
                textAlign: "center", fontSize: "0.72rem",
                color: "#867661", fontStyle: "italic", mt: 1,
              }}>
                🔒 Your details are safe and never shared.
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Snackbar open={sendError} autoHideDuration={5000} onClose={() => setSendError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="error" onClose={() => setSendError(false)} sx={{ width: "100%" }}>
          Failed to send. Please try again or call us directly.
        </Alert>
      </Snackbar>
    </>
  );
}
