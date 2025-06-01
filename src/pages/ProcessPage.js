import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
  Paper,
} from "@mui/material";
import SEO from "../components/ui/SEO";

const ProcessPage = () => {
  const theme = useTheme();

  // Process steps
  const steps = [
    {
      label: "Clay Preparation",
      description:
        "We start with selecting the right clay for each piece. The clay is carefully wedged to remove air bubbles and create consistency in the material, ensuring optimal workability and preventing cracks during firing.",
      image: "/images/process/clay-preparation.jpg",
    },
    {
      label: "Forming & Shaping",
      description:
        "Using traditional wheel-throwing techniques or hand-building methods, we form each piece with precision and care. This stage is where the character and uniqueness of each item begins to emerge.",
      image: "/images/process/wheel-throwing.jpg",
    },
    {
      label: "Initial Drying",
      description:
        "Pieces are left to dry slowly and evenly to avoid warping or cracking. This stage, known as leather-hard, is when we add handles, trim bases, and refine details.",
      image: "/images/process/drying.jpg",
    },
    {
      label: "Bisque Firing",
      description:
        "The first firing at around 1800°F transforms clay into ceramic material. This makes the piece porous and ready to absorb glazes while being durable enough to handle.",
      image: "/images/process/bisque-firing.jpg",
    },
    {
      label: "Glazing",
      description:
        "Each piece is carefully glazed using our signature formulations or custom blends. We use dipping, pouring, and brushing techniques to achieve the desired aesthetic.",
      image: "/images/process/glazing.jpg",
    },
    {
      label: "Glaze Firing",
      description:
        "The final firing at temperatures up to 2350°F melts the glaze and binds it permanently to the clay body, creating the finished surface and making the piece fully vitrified and functional.",
      image: "/images/process/glaze-firing.jpg",
    },
    {
      label: "Quality Control",
      description:
        "Every piece undergoes thorough inspection to ensure it meets our quality standards. We check for functionality, aesthetics, and durability before it joins our collection.",
      image: "/images/process/quality-control.jpg",
    },
  ];

  return (
    <>
      <SEO
        title="Our Pottery Making Process"
        description="Learn about the traditional pottery making process at KanasKraft, from clay preparation to final firing. Discover the craftsmanship behind each handmade piece."
        keywords="pottery making process, ceramic techniques, wheel throwing, pottery firing, glazing ceramics"
        canonical="/process"
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
            FROM CLAY TO ART
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Our Process
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
            Discover the journey from raw clay to finished pottery through our
            time-honored techniques and careful craftsmanship.
          </Typography>
        </Container>
      </Box>

      {/* Process Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Traditional Methods, Modern Touches
            </Typography>
            <Typography variant="body1" paragraph>
              At KanasKraft, we honor traditional pottery techniques that have
              been refined over centuries while embracing modern innovations
              that enhance our craft. Each piece passes through many hands and
              stages before it's ready to become part of your home.
            </Typography>
            <Typography variant="body1" paragraph>
              Our process emphasizes quality, sustainability, and artistic
              expression. We take no shortcuts because we believe that
              thoughtful craftsmanship results in pieces that bring joy for
              generations.
            </Typography>
            <Typography variant="body1">
              From selecting the finest clays to our signature glazing
              techniques, every step is performed with attention to detail and a
              commitment to excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/process/pottery-wheel.jpg"
              alt="Potter working at wheel"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>
        </Grid>

        {/* Process Steps - Horizontal Stepper for larger screens */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
            The Making of Our Pottery
          </Typography>

          <Box sx={{ mb: 8 }}>
            {steps.map((step, index) => (
              <Grid
                container
                spacing={6}
                alignItems="center"
                sx={{
                  mb: 10,
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
                key={step.label}
              >
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.label}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left:
                          index % 2 === 0
                            ? { xs: 0, md: "-40px" }
                            : { xs: 0, md: "auto" },
                        right:
                          index % 2 === 0
                            ? { xs: "auto", md: "auto" }
                            : { xs: "auto", md: "-40px" },
                        bgcolor: theme.palette.primary.main,
                        color: "white",
                        width: 60,
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Box
                      sx={{
                        pt: 2,
                        pl: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                        pr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                      }}
                    >
                      <Typography variant="h4" sx={{ mb: 2 }}>
                        {step.label}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>

        {/* Process Steps - Vertical Stepper for mobile */}
        <Box sx={{ display: { xs: "block", md: "none" }, mt: 6 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
            The Making of Our Pottery
          </Typography>

          <Stepper orientation="vertical" sx={{ mb: 4 }}>
            {steps.map((step, index) => (
              <Step key={step.label} active={true}>
                <StepLabel>
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ mb: 3 }}>
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.label}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 2,
                        mb: 2,
                      }}
                    />
                    <Typography variant="body1">{step.description}</Typography>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Final Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            bgcolor: theme.palette.background.default,
            mt: 6,
            textAlign: "center",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Experience the Process Yourself
          </Typography>
          <Typography variant="body1" paragraph>
            Interested in seeing our pottery making process in person? We offer
            studio tours and workshops where you can try your hand at the
            potter's wheel or learn hand-building techniques.
          </Typography>
          <Typography variant="body1">
            Contact us to schedule a visit or sign up for one of our upcoming
            workshops.
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default ProcessPage;
