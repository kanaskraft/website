import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SEO from "../components/ui/SEO";

const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally submit the form to your backend
    // For now, we'll just show a success message
    console.log("Form submitted:", formData);

    setSnackbar({
      open: true,
      message: "Thank you for your message! We will get back to you soon.",
      severity: "success",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with KanasKraft Pottery. Contact us for inquiries about custom orders, workshops, or visit our studio."
        keywords="pottery contact, ceramic studio contact, custom pottery orders, pottery workshops"
        canonical="/contact"
      />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          py: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.2rem",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              mb: 2,
            }}
          >
            Have questions about our pottery or interested in custom pieces?
            We'd love to hear from you!
          </Typography>
        </Container>
      </Box>

      {/* Contact Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                height: "100%",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: "30px",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                height: "100%",
                borderRadius: 2,
                bgcolor: theme.palette.primary.main,
                color: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, color: "white" }}>
                Contact Information
              </Typography>

              <List sx={{ mb: 4 }}>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <EmailIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ color: "white" }}>
                        info@kanaskraft.com
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <PhoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ color: "white" }}>
                        (555) 123-4567
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <LocationOnIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ color: "white" }}>
                        123 Pottery Lane
                        <br />
                        Artisan District
                        <br />
                        Craftsville, CA 90210
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <InstagramIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ color: "white" }}>
                        @kanaskraft_pottery
                      </Typography>
                    }
                  />
                </ListItem>
              </List>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} />

              <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                Studio Hours
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Monday - Friday:
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    10:00 AM - 6:00 PM
                  </Typography>
                </Grid>

                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Saturday:
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    11:00 AM - 5:00 PM
                  </Typography>
                </Grid>

                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Sunday:
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Closed
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box
          sx={{
            mt: 8,
            borderRadius: 2,
            overflow: "hidden",
            height: "450px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Visit Our Studio
          </Typography>
          {/* In a real application, you would use a Google Maps or other map component here */}
          <Box
            sx={{
              width: "100%",
              height: "400px",
              bgcolor: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>
              Map placeholder - Google Maps would be integrated here
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Success message snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
