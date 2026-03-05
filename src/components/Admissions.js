import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box, Typography, TextField, Button, Snackbar, Alert, Grid, MenuItem,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CelebrationIcon from "@mui/icons-material/Celebration";

// Shared styles for text inputs and dropdowns
const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fafafa",
    "& fieldset": { borderColor: "rgba(21,37,61,0.2)" },
    "&:hover fieldset": { borderColor: "#fbb123" },
    "&.Mui-focused fieldset": { borderColor: "#15253d", borderWidth: 2 },
  },
  "& .MuiInputLabel-root": { fontSize: "0.95rem", color: "#666", fontFamily: "'Nunito', sans-serif" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#15253d", fontWeight: 700 },
  "& .MuiInputBase-input": {
    padding: "14px 16px",
    fontSize: "1rem",
    color: "#15253d",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },
  "& .MuiFormHelperText-root": { fontSize: "0.8rem", marginLeft: "4px", fontFamily: "'Nunito', sans-serif" },
};

// Label shown above a field
function FieldLabel({ children, required }) {
  return (
    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#15253d", mb: 0.8, letterSpacing: "0.01em" }}>
      {children}{required && <Box component="span" sx={{ color: "#f68e1e", ml: 0.3 }}>*</Box>}
    </Typography>
  );
}

// Reusable dropdown with static label above
function DropdownField({ label, value, onChange, options, error, helperText, required }) {
  return (
    <Box>
      <FieldLabel required={required}>{label}</FieldLabel>
      <TextField
        fullWidth
        select
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={helperText}
        sx={{
          ...textFieldSx,
          "& .MuiInputBase-input": {
            ...textFieldSx["& .MuiInputBase-input"],
            color: value ? "#15253d" : "#999",
          },
        }}
        SelectProps={{
          displayEmpty: true,
          renderValue: (selected) => {
            if (!selected) return <em style={{ fontStyle: "normal", color: "#999", fontFamily: "'Nunito', sans-serif", fontSize: "1rem" }}>Select {label}</em>;
            return <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#15253d" }}>{selected}</span>;
          },
          MenuProps: {
            PaperProps: {
              sx: {
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(21,37,61,0.15)",
                "& .MuiMenuItem-root": {
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#15253d",
                  py: 1.4,
                  px: 2.5,
                  "&:hover": { backgroundColor: "rgba(251,177,35,0.1)" },
                  "&.Mui-selected": { backgroundColor: "rgba(251,177,35,0.18)", fontWeight: 700 },
                },
              },
            },
          },
        }}
      >
        {options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
      </TextField>
    </Box>
  );
}

// Text input with static label above
function InputField({ label, required, error, helperText, ...props }) {
  return (
    <Box>
      <FieldLabel required={required}>{label}</FieldLabel>
      <TextField fullWidth error={!!error} helperText={helperText} sx={textFieldSx} {...props} />
    </Box>
  );
}

// Section divider header
function SectionHeader({ emoji, title }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5, mt: 1 }}>
      <Box sx={{ width: 36, height: 36, borderRadius: "10px", backgroundColor: "rgba(251,177,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
        {emoji}
      </Box>
      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#15253d", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {title}
      </Typography>
      <Box sx={{ flex: 1, height: "1px", backgroundColor: "rgba(21,37,61,0.1)" }} />
    </Box>
  );
}

const classes = ["Nursery", "LKG", "UKG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];

const steps = [
  { icon: <AssignmentIcon />, step: "01", title: "Submit Enquiry", desc: "Fill out the admission enquiry form below with your child's details." },
  { icon: <CalendarMonthIcon />, step: "02", title: "Campus Visit", desc: "Our team will schedule a guided campus tour at your convenience." },
  { icon: <HowToRegIcon />, step: "03", title: "Interaction & Assessment", desc: "A friendly interaction session to understand your child's strengths." },
  { icon: <CelebrationIcon />, step: "04", title: "Confirmation", desc: "Receive your admission confirmation and welcome to the HV family!" },
];

const highlights = [
  { icon: <SchoolIcon />, title: "CBSE Affiliated", desc: "Nationally recognised board with concept-driven, future-ready curriculum." },
  { icon: <EmojiEventsIcon />, title: "Holistic Development", desc: "Sports, arts, music, leadership — every child's talent is nurtured." },
  { icon: <GroupsIcon />, title: "Expert Faculty", desc: "Passionate, experienced educators dedicated to every child's success." },
  { icon: <CheckCircleOutlineIcon />, title: "Safe & Inclusive", desc: "A secure, welcoming campus where every child feels at home." },
];

const INITIAL = {
  childName: "", dob: "", gender: "", classApplying: "", previousSchool: "",
  parentName: "", relation: "", phone: "", parentOccupation: "", email: "",
  address: "", howDidYouHear: "", message: "",
};
const ERRORS_INIT = { childName: "", dob: "", gender: "", classApplying: "", parentName: "", phone: "", email: "" };

export default function Admissions() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(ERRORS_INIT);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = () => {
    const e = { ...ERRORS_INIT };
    if (!form.childName.trim()) e.childName = "Required";
    if (!form.dob) e.dob = "Required";
    if (!form.gender) e.gender = "Required";
    if (!form.classApplying) e.classApplying = "Required";
    if (!form.parentName.trim()) e.parentName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter 10 digits";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
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
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_ADMISSIONS_TEMPLATE_ID,
      {
        child_name: form.childName, dob: form.dob, gender: form.gender,
        class_applying: form.classApplying, previous_school: form.previousSchool || "—",
        parent_name: form.parentName, relation: form.relation || "—",
        phone: form.phone, parent_occupation: form.parentOccupation || "—",
        email: form.email, address: form.address || "—",
        how_did_you_hear: form.howDidYouHear || "—",
        message: form.message || "—",
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => { setSubmitted(true); setForm(INITIAL); })
      .catch((err) => { console.error("EmailJS error:", err); setSendError(true); })
      .finally(() => setSending(false));
  };

  return (
    <>
      <Snackbar open={submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="success" onClose={() => setSubmitted(false)} sx={{ width: "100%", fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
          Enquiry submitted! Our admissions team will contact you within 24 hours.
        </Alert>
      </Snackbar>
      <Snackbar open={sendError} autoHideDuration={5000} onClose={() => setSendError(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="error" onClose={() => setSendError(false)} sx={{ width: "100%", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
          Something went wrong. Please try again or call us directly.
        </Alert>
      </Snackbar>

      {/* ── HERO ── */}
      <Box sx={{ background: "linear-gradient(160deg, #15253d 0%, #1e3a5f 55%, #15253d 100%)", pt: { xs: 18, md: 22 }, pb: { xs: 12, md: 16 }, px: { xs: 3, md: 6 }, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Typography sx={{ display: "inline-block", backgroundColor: "rgba(251,177,35,0.15)", color: "#fbb123", px: 2.5, py: 0.6, borderRadius: "30px", fontSize: "0.78rem", fontFamily: "'Nunito', sans-serif", fontWeight: 700, letterSpacing: "0.14em", mb: 3, border: "1px solid rgba(251,177,35,0.3)" }}>
          ADMISSIONS OPEN · 2026–27
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: { xs: "28px", md: "52px" }, lineHeight: 1.15, mb: 3, maxWidth: "820px", mx: "auto" }}>
          Secure Your Child's Seat at{" "}
          <Box component="span" sx={{ color: "#fbb123" }}>Horizon Valley School</Box>
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: { xs: "15px", md: "18px" }, maxWidth: "580px", mx: "auto", lineHeight: 1.8, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          "The best investment you can make is in your child's education. Begin that journey with us."
        </Typography>
      </Box>

      {/* ── WHY HV STRIP ── */}
      <Box sx={{ backgroundColor: "#fbb123", py: { xs: 5, md: 4 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 2 } }}>
          {highlights.map((h, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#15253d", color: "#fbb123", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {h.icon}
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#15253d", lineHeight: 1.2 }}>{h.title}</Typography>
                <Typography sx={{ fontSize: "0.72rem", color: "rgba(21,37,61,0.7)", lineHeight: 1.4, display: { xs: "none", md: "block" } }}>{h.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── ADMISSION PROCESS ── */}
      <Box sx={{ backgroundColor: "#fff", py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 } }}>
        <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1 }}>HOW IT WORKS</Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "24px", md: "36px" } }}>
              Simple 4-Step Admission Process
            </Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 3 }}>
            {steps.map((s, i) => (
              <Box key={i} sx={{ textAlign: "center", p: { xs: 3, md: 4 }, borderRadius: "20px", backgroundColor: "#f8f6f2", border: "1px solid rgba(21,37,61,0.05)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 16px 40px rgba(21,37,61,0.1)", borderColor: "#fbb123" } }}>
                <Box sx={{ width: 52, height: 52, borderRadius: "50%", backgroundColor: "#fbb123", color: "#15253d", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
                  {s.icon}
                </Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "0.7rem", color: "#f68e1e", letterSpacing: "0.1em", mb: 0.5 }}>STEP {s.step}</Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#15253d", fontSize: "0.95rem", mb: 1 }}>{s.title}</Typography>
                <Typography sx={{ color: "#867661", fontSize: "0.8rem", lineHeight: 1.6 }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── ENQUIRY FORM ── */}
      <Box sx={{ background: "linear-gradient(180deg, #f8f6f2 0%, #eef0f4 100%)", py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>

          {/* Section heading */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography sx={{ color: "#f68e1e", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", mb: 1 }}>TAKE THE FIRST STEP</Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#15253d", fontSize: { xs: "26px", md: "40px" }, lineHeight: 1.2 }}>
              Admission Enquiry Form
            </Typography>
            <Box sx={{ width: 60, height: 4, borderRadius: 2, backgroundColor: "#fbb123", mx: "auto", mt: 2 }} />
          </Box>

          {/* Two-column layout */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "380px 1fr" }, gap: { xs: 4, lg: 5 }, alignItems: "start" }}>

            {/* ── LEFT SIDEBAR ── */}
            <Box sx={{ position: { lg: "sticky" }, top: { lg: "100px" } }}>
              {/* Why choose us card */}
              <Box sx={{ background: "linear-gradient(145deg, #15253d 0%, #1e3a5f 100%)", borderRadius: "24px", p: { xs: 4, md: 5 }, color: "#fff", mb: 3, position: "relative", overflow: "hidden" }}>
                <Box sx={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,177,35,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
                <Box sx={{ position: "absolute", bottom: -30, left: -30, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,142,30,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

                <Box sx={{ width: 48, height: 48, borderRadius: "14px", backgroundColor: "#fbb123", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                  <SchoolIcon sx={{ color: "#15253d", fontSize: 26 }} />
                </Box>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.3rem", mb: 1, lineHeight: 1.3 }}>
                  Why Horizon Valley?
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic", mb: 3, lineHeight: 1.7 }}>
                  "Where every child's potential is discovered and nurtured."
                </Typography>

                {[
                  { emoji: "🏫", text: "CBSE affiliated, future-ready curriculum" },
                  { emoji: "🎨", text: "Arts, sports, music & leadership programs" },
                  { emoji: "👩‍🏫", text: "Experienced, passionate educators" },
                  { emoji: "🌿", text: "Safe, green & inclusive campus" },
                  { emoji: "📊", text: "Holistic progress tracking & parent connect" },
                ].map((item, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.8 }}>
                    <Box sx={{ width: 34, height: 34, borderRadius: "10px", backgroundColor: "rgba(251,177,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                      {item.emoji}
                    </Box>
                    <Typography sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", lineHeight: 1.4 }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Contact quick-info */}
              <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", p: 3.5, boxShadow: "0 8px 30px rgba(21,37,61,0.07)", border: "1px solid rgba(21,37,61,0.06)" }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#15253d", mb: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Need help? Reach us
                </Typography>
                {[
                  { emoji: "📞", label: "Call us", value: "7075098989  |  7075198989" },
                  { emoji: "✉️", label: "Email", value: "admissions@horizonvalley.edu" },
                  { emoji: "🕐", label: "Office hours", value: "Mon–Sat, 9am – 4pm" },
                ].map((c, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1.5, mb: i < 2 ? 2 : 0 }}>
                    <Box sx={{ fontSize: "1.1rem", mt: 0.2 }}>{c.emoji}</Box>
                    <Box>
                      <Typography sx={{ fontSize: "0.72rem", color: "#867661", fontFamily: "'Nunito', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</Typography>
                      <Typography sx={{ fontSize: "0.9rem", color: "#15253d", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>{c.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ── RIGHT: FORM CARD ── */}
            <Box sx={{ backgroundColor: "#fff", borderRadius: "28px", boxShadow: "0 20px 60px rgba(21,37,61,0.1)", border: "1px solid rgba(21,37,61,0.06)", overflow: "hidden" }}>

              {/* Form top accent bar */}
              <Box sx={{ height: 6, background: "linear-gradient(90deg, #fbb123, #f68e1e, #fbb123)" }} />

              <Box sx={{ p: { xs: 3, md: 5 } }}>
                {submitted ? (
                  <Box sx={{ textAlign: "center", py: 8 }}>
                    <Box sx={{ fontSize: "4rem", mb: 2 }}>🎉</Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "#15253d", mb: 1.5 }}>Enquiry Received!</Typography>
                    <Typography sx={{ color: "#867661", lineHeight: 1.9, maxWidth: "400px", mx: "auto", fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                      Thank you for choosing Horizon Valley School. Our admissions team will reach out within <strong style={{ color: "#15253d" }}>24 hours</strong> to schedule your campus visit.
                    </Typography>
                    <Button onClick={() => setSubmitted(false)} variant="contained"
                      sx={{ mt: 4, backgroundColor: "#fbb123", color: "#15253d", fontFamily: "'Nunito', sans-serif", fontWeight: 800, borderRadius: "12px", textTransform: "none", px: 5, py: 1.6, fontSize: "1rem", "&:hover": { backgroundColor: "#f68e1e" } }}>
                      Submit Another Enquiry
                    </Button>
                  </Box>
                ) : (
                  <>
                    {/* Form header */}
                    <Box sx={{ mb: 4 }}>
                      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: { xs: "20px", md: "26px" }, color: "#15253d", lineHeight: 1.3, mb: 0.5 }}>
                        Start Your Child's Journey
                      </Typography>
                      <Typography sx={{ color: "#867661", fontFamily: "'Playfair Display', serif", fontSize: "0.92rem", fontStyle: "italic" }}>
                        Fields marked * are required. We'll respond within 24 hours.
                      </Typography>
                    </Box>

                    {/* ── SECTION: Child ── */}
                    <SectionHeader emoji="🧒" title="Child's Details" />
                    <Grid container spacing={2.5} sx={{ mb: 4 }}>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Child's Full Name" required value={form.childName} onChange={handleChange("childName")} error={!!errors.childName} helperText={errors.childName} placeholder="Enter child's full name" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Date of Birth" required type="date" value={form.dob} onChange={handleChange("dob")} error={!!errors.dob} helperText={errors.dob} slotProps={{ inputLabel: { shrink: true } }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DropdownField label="Class Applying For" required value={form.classApplying} onChange={handleChange("classApplying")} options={classes} error={errors.classApplying} helperText={errors.classApplying} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DropdownField label="Gender" required value={form.gender} onChange={handleChange("gender")} options={["Male", "Female", "Prefer not to say"]} error={errors.gender} helperText={errors.gender} />
                      </Grid>
                      <Grid item xs={12}>
                        <InputField label="Previous School (if any)" value={form.previousSchool} onChange={handleChange("previousSchool")} placeholder="Name of previous school" />
                      </Grid>
                    </Grid>

                    {/* ── SECTION: Parent ── */}
                    <SectionHeader emoji="👨‍👩‍👧" title="Parent / Guardian Details" />
                    <Grid container spacing={2.5} sx={{ mb: 4 }}>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Parent / Guardian Name" required value={form.parentName} onChange={handleChange("parentName")} error={!!errors.parentName} helperText={errors.parentName} placeholder="Enter full name" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DropdownField label="Relation to Child" value={form.relation} onChange={handleChange("relation")} options={["Father", "Mother", "Guardian"]} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Primary Phone" required value={form.phone} onChange={handleChange("phone")} error={!!errors.phone} helperText={errors.phone} placeholder="10-digit mobile number" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Parent Occupation" value={form.parentOccupation} onChange={handleChange("parentOccupation")} placeholder="e.g. Engineer, Teacher, Business" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField label="Email Address" required type="email" value={form.email} onChange={handleChange("email")} error={!!errors.email} helperText={errors.email} placeholder="your@email.com" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <DropdownField label="How did you hear about us?" value={form.howDidYouHear} onChange={handleChange("howDidYouHear")} options={["Word of Mouth", "Social Media", "Google Search", "Newspaper / Banner", "Friend / Family", "Other"]} />
                      </Grid>
                      <Grid item xs={12}>
                        <InputField label="Residential Address" value={form.address} onChange={handleChange("address")} placeholder="Optional" multiline rows={2} />
                      </Grid>
                    </Grid>

                    {/* ── SECTION: Message ── */}
                    <SectionHeader emoji="📋" title="Anything else?" />
                    <Grid container spacing={2.5} sx={{ mb: 4 }}>
                      <Grid item xs={12}>
                        <InputField label="Questions or special requirements" value={form.message} onChange={handleChange("message")} placeholder="Tell us anything you'd like us to know" multiline rows={3} />
                      </Grid>
                    </Grid>

                    {sendError && (
                      <Typography sx={{ color: "#d32f2f", fontSize: "0.85rem", mb: 2, fontFamily: "'Nunito', sans-serif" }}>
                        Something went wrong. Please try again or call us directly.
                      </Typography>
                    )}

                    <Button fullWidth variant="contained" onClick={handleSubmit} disabled={sending}
                      sx={{ py: 2, borderRadius: "14px", textTransform: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.02em", background: sending ? "#ccc" : "linear-gradient(135deg, #15253d 0%, #1e3a5f 100%)", boxShadow: "0 8px 28px rgba(21,37,61,0.28)", transition: "all 0.3s ease", "&:hover": { background: "linear-gradient(135deg, #fbb123 0%, #f68e1e 100%)", color: "#15253d", boxShadow: "0 10px 32px rgba(251,177,35,0.4)", transform: "translateY(-2px)" } }}>
                      {sending ? "Submitting…" : "🎓  Submit Admission Enquiry"}
                    </Button>
                    <Typography sx={{ textAlign: "center", fontSize: "0.75rem", color: "#aaa", fontStyle: "italic", mt: 1.5, fontFamily: "'Nunito', sans-serif" }}>
                      🔒 Your information is safe with us and never shared.
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
