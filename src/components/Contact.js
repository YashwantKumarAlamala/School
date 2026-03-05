import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography, TextField, Button, Snackbar, Alert, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px", backgroundColor: "#fff",
    "& fieldset": { borderColor: "rgba(21,37,61,0.15)" },
    "&:hover fieldset": { borderColor: "#fbb123" },
    "&.Mui-focused fieldset": { borderColor: "#15253d", borderWidth: 2 },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#15253d" },
};

const contactItems = [
  { icon: <LocationOnIcon sx={{ fontSize: 22 }} />, label: "Our Address", value: "Madhura Nagar Road No.3, Near Adarsha College of Nursing, Kalyandurgam Road, Anantapur – 515002" },
  { icon: <PhoneIcon sx={{ fontSize: 22 }} />, label: "Call Us", value: "7075098989  |  7075198989", href: "tel:7075098989" },
  { icon: <EmailIcon sx={{ fontSize: 22 }} />, label: "Email Us", value: "horizonvalleyatp@gmail.com", href: "mailto:horizonvalleyatp@gmail.com" },
  { icon: <AccessTimeIcon sx={{ fontSize: 22 }} />, label: "Office Hours", value: "Mon – Fri: 9am – 7pm  |  Sat: 9am – 3pm  |  Sun: Closed" },
];

const INITIAL = { name: "", email: "", phone: "", message: "" };
const ERRORS_INIT = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(ERRORS_INIT);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = () => {
    const e = { ...ERRORS_INIT };
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
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
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    emailjs.send(
      serviceId,
      templateId,
      { from_name: form.name, email: form.email, phone: form.phone || "—", message: form.message },
      publicKey
    )
      .then(() => { setSubmitted(true); setForm(INITIAL); })
      .catch((err) => { console.error("EmailJS error:", err); setSendError(true); })
      .finally(() => setSending(false));
  };

  return (
    <>
      <Snackbar open={submitted} autoHideDuration={5000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="success" onClose={() => setSubmitted(false)} sx={{ width: "100%", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
          Message sent! We'll get back to you soon.
        </Alert>
      </Snackbar>
      <Snackbar open={sendError} autoHideDuration={5000} onClose={() => setSendError(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="error" onClose={() => setSendError(false)} sx={{ width: "100%", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
          Something went wrong. Please try again or call us directly.
        </Alert>
      </Snackbar>

      {/* ── HERO ── */}
      <Box sx={{
        background: "linear-gradient(135deg, #15253d 0%, #1e3a5f 60%, #15253d 100%)",
        pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, px: { xs: 3, md: 6 },
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <Box sx={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Typography sx={{ display: "inline-block", backgroundColor: "rgba(251,177,35,0.15)", color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px", fontSize: "0.78rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700, letterSpacing: "0.14em", mb: 3, border: "1px solid rgba(251,177,35,0.3)" }}>
          GET IN TOUCH
        </Typography>
        <Typography variant="h2" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "28px", md: "46px" }, lineHeight: 1.2, mb: 2, maxWidth: "700px", mx: "auto" }}>
          We're Here to{" "}
          <Box component="span" sx={{ color: "#fbb123" }}>Help</Box>
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "15px", md: "17px" }, maxWidth: "520px", mx: "auto", lineHeight: 1.8, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          Have a question, feedback, or just want to say hello? Drop us a message and we'll respond promptly.
        </Typography>
      </Box>

      {/* ── MAIN ── */}
      <Box sx={{ backgroundColor: "#f0f0f0", py: { xs: 8, md: 12 }, px: { xs: 3, md: 6 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">

            {/* LEFT: contact info */}
            <Grid item xs={12} md={5}>
              <Typography className="scroll-reveal-left" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "24px", md: "30px" }, color: "#15253d", lineHeight: 1.2, mb: 2 }}>
                Contact <Box component="span" sx={{ color: "#f68e1e" }}>Information</Box>
              </Typography>
              <Typography sx={{ color: "#867661", lineHeight: 1.8, mb: 4, fontFamily: "'Playfair Display', serif" }}>
                Reach out to us through any of the channels below. Our team is always happy to assist.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {contactItems.map((item, i) => (
                  <Box key={i} className={`scroll-reveal delay-${i + 1}`} sx={{ display: "flex", alignItems: "flex-start", gap: 2, backgroundColor: "#fff", borderRadius: "16px", p: 2.5, boxShadow: "0 4px 20px rgba(21,37,61,0.06)", border: "1px solid rgba(21,37,61,0.05)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 28px rgba(21,37,61,0.1)" } }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: "12px", backgroundColor: "#fbb123", color: "#15253d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#867661", letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.3 }}>
                        {item.label}
                      </Typography>
                      <Typography component={item.href ? "a" : "p"} href={item.href} sx={{ fontSize: "0.9rem", color: "#15253d", lineHeight: 1.6, fontWeight: 500, textDecoration: "none", "&:hover": item.href ? { color: "#f68e1e" } : {} }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 4, p: 3, borderRadius: "16px", background: "linear-gradient(135deg, #15253d, #1e3a5f)" }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#fff", mb: 0.5 }}>
                  📍 Come Visit Our Campus
                </Typography>
                <Typography sx={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                  We welcome parents and students for a guided campus tour. Experience the Horizon Valley difference firsthand.
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT: simple message form */}
            <Grid item xs={12} md={7}>
              <Box className="scroll-reveal-right" sx={{ backgroundColor: "#fff", borderRadius: "28px", p: { xs: 4, md: 6 }, boxShadow: "0 30px 80px rgba(21,37,61,0.1)", border: "1px solid rgba(21,37,61,0.06)" }}>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, backgroundColor: "rgba(251,177,35,0.1)", px: 2, py: 0.6, borderRadius: "30px", mb: 2, border: "1px solid rgba(251,177,35,0.3)" }}>
                    <Box sx={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#fbb123" }} />
                    <Typography sx={{ fontSize: "0.72rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: "#f68e1e", letterSpacing: "0.1em" }}>
                      SEND A MESSAGE
                    </Typography>
                  </Box>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "20px", md: "26px" }, color: "#15253d", lineHeight: 1.3 }}>
                    How Can We Help You?
                  </Typography>
                  <Typography sx={{ color: "#867661", mt: 1, fontSize: "0.88rem", fontFamily: "'Playfair Display', serif" }}>
                    For admission enquiries, please visit the <strong>Admissions</strong> page.
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Your Name *" value={form.name} onChange={handleChange("name")} error={!!errors.name} helperText={errors.name} sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone (optional)" value={form.phone} onChange={handleChange("phone")} sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email Address *" type="email" value={form.email} onChange={handleChange("email")} error={!!errors.email} helperText={errors.email} sx={fieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Your Message *" multiline rows={5} value={form.message} onChange={handleChange("message")} error={!!errors.message} helperText={errors.message} sx={fieldSx} />
                  </Grid>
                </Grid>

                <Button fullWidth variant="contained" onClick={handleSubmit} disabled={sending}
                  sx={{ mt: 3, py: 1.8, borderRadius: "12px", textTransform: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1rem", background: sending ? "#ccc" : "linear-gradient(135deg, #15253d, #1e3a5f)", boxShadow: "0 8px 25px rgba(21,37,61,0.25)", transition: "all 0.3s ease", "&:hover": { background: "linear-gradient(135deg, #fbb123, #f68e1e)", color: "#15253d", boxShadow: "0 10px 28px rgba(251,177,35,0.35)", transform: "translateY(-2px)" } }}>
                  {sending ? "Sending…" : "Send Message"}
                </Button>
                <Typography sx={{ textAlign: "center", fontSize: "0.72rem", color: "#867661", fontStyle: "italic", mt: 1.5 }}>
                  🔒 Your details are safe and never shared.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ── MAP ── */}
      <Box sx={{ backgroundColor: "#15253d", py: { xs: 6, md: 8 }, px: { xs: 3, md: 6 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: { xs: "20px", md: "26px" }, color: "#fff", mb: 1, textAlign: "center" }}>
            Find Us on the Map
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", textAlign: "center", mb: 4, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Conveniently located in the heart of Anantapur
          </Typography>
          <Box sx={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.4)", border: "3px solid rgba(251,177,35,0.3)", height: { xs: 300, md: 420 } }}>
            <iframe title="Horizon Valley School Location" src="https://www.google.com/maps?q=14.672444,77.551778&z=18&t=m&output=embed" width="100%" height="100%" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen />
          </Box>
        </Box>
      </Box>
    </>
  );
}
