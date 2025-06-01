import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        pt: 6,
        pb: 3,
        mt: 8,
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: theme.palette.text.primary,
                textDecoration: "none",
                display: "inline-block",
                mb: 2,
              }}
            >
              KanasKraft
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Handcrafted pottery created with traditional techniques and modern
              aesthetics. Each piece is unique and made with attention to detail
              and quality.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" color="primary" size="large">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="instagram" color="primary" size="large">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="pinterest" color="primary" size="large">
                <PinterestIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="primary" size="large">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links Column */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                About
              </Link>
              <Link
                component={RouterLink}
                to="/gallery"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Gallery
              </Link>
              <Link
                component={RouterLink}
                to="/products"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Products
              </Link>
              <Link
                component={RouterLink}
                to="/blog"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Blog
              </Link>
            </Box>
          </Grid>

          {/* More Links Column */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                component={RouterLink}
                to="/process"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Process
              </Link>
              <Link
                component={RouterLink}
                to="/faq"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                FAQ
              </Link>
              <Link
                component={RouterLink}
                to="/shipping"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Shipping
              </Link>
              <Link
                component={RouterLink}
                to="/privacy"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Privacy
              </Link>
              <Link
                component={RouterLink}
                to="/terms"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Terms
              </Link>
            </Box>
          </Grid>

          {/* Contact/Newsletter Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Subscribe to our newsletter for updates on new collections, blog
              posts, and events.
            </Typography>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<EmailIcon />}
                fullWidth
                component={RouterLink}
                to="/contact"
              >
                Subscribe to Newsletter
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Contact us:{" "}
              <Link href="mailto:info@kanaskraft.com" color="primary">
                info@kanaskraft.com
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} KanasKraft. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
