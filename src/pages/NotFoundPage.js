import React from "react";
import { Container, Box, Typography, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SEO from "../components/ui/SEO";

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist or has been moved."
      />

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh",
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", md: "6rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            404
          </Typography>

          <Typography variant="h4" sx={{ mb: 3 }}>
            Page Not Found
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, maxWidth: "600px" }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Please check the URL or
            navigate back to the homepage.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
            }}
          >
            Back to Homepage
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NotFoundPage;
