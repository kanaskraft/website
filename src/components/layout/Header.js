import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Menu items for navigation
const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Gallery", path: "/gallery" },
  { title: "Products", path: "/products" },
  { title: "Process", path: "/process" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

// Header component with responsive design
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Detect scroll for changing header appearance
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          transition: "all 0.3s ease-in-out",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: theme.palette.text.primary,
                textDecoration: "none",
                letterSpacing: 1,
              }}
            >
              KanasKraft
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.title}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: 300,
            backgroundColor: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.title}
              component={RouterLink}
              to={item.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Header;
