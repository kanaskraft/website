import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SEO from "../components/ui/SEO";

// Placeholder images (replace with actual images in production)
const heroImage = "/images/hero-pottery.jpg";
const gallery = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Handcrafted Bowl",
    description: "Ceramic bowl with natural glaze",
  },
  {
    id: 2,
    image: "/images/product-2.jpg",
    title: "Pottery Set",
    description: "Complete tableware set",
  },
  {
    id: 3,
    image: "/images/product-3.jpg",
    title: "Decorative Vase",
    description: "Unique hand-painted vase",
  },
];

const HomePage = () => {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Handcrafted Pottery & Ceramic Art"
        description="Discover unique handcrafted pottery with beautiful designs. Ceramic bowls, vases, and custom tableware made with traditional craftsmanship."
        keywords="handmade pottery, ceramic bowls, unique pottery, handcrafted ceramics, pottery gifts"
        canonical="/"
      />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "85vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
              maxWidth: { xs: "100%", md: "60%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 800,
                mb: 2,
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Handcrafted Pottery with Soul
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 400,
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                lineHeight: 1.5,
              }}
            >
              Each piece tells a story of tradition, craftsmanship, and artistic
              passion
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/gallery"
                size="large"
                color="primary"
                sx={{
                  fontSize: "1.1rem",
                  py: 1.5,
                  px: 4,
                  borderRadius: "30px",
                }}
              >
                Explore Gallery
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/about"
                size="large"
                sx={{
                  fontSize: "1.1rem",
                  py: 1.5,
                  px: 4,
                  borderRadius: "30px",
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Our Story
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            HANDCRAFTED WITH LOVE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Featured Creations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: theme.palette.text.secondary,
            }}
          >
            Each piece is handmade with attention to detail, making it unique
            and one-of-a-kind. Explore our featured pottery creations.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {gallery.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/gallery"
            size="large"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "30px",
            }}
          >
            View All Creations
          </Button>
        </Box>
      </Container>

      {/* About/Story Section */}
      <Box sx={{ bgcolor: theme.palette.background.default, py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about-pottery.jpg"
                alt="Potter working with clay"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                OUR CRAFT
              </Typography>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Pottery with Purpose
              </Typography>
              <Typography variant="body1" paragraph>
                At KanasKraft, we believe in creating pottery with purpose. Each
                piece is carefully crafted using traditional techniques passed
                down through generations, combined with modern aesthetic
                sensibilities.
              </Typography>
              <Typography variant="body1" paragraph>
                Our artisans work with locally-sourced clay to create functional
                and decorative pieces that bring beauty to everyday life. From
                wheel throwing to hand-building, each technique adds character
                to our creations.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/process"
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.2,
                  borderRadius: "30px",
                }}
              >
                Our Process
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            EXPLORE OUR COLLECTIONS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Pottery Categories
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: theme.palette.text.secondary,
            }}
          >
            Discover our diverse range of pottery creations, each designed with
            functional beauty and lasting quality.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {["Tableware", "Decorative", "Vases", "Custom Pieces"].map(
            (category) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ "&:hover": { color: "white" } }}
                  >
                    Explore our {category.toLowerCase()} collection
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* Testimonial Section */}
      <Box sx={{ bgcolor: theme.palette.background.default, py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              TESTIMONIALS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              What Our Clients Say
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                "The craftsmanship of KanasKraft pottery is exceptional. Each
                piece I've purchased has become a treasured part of my home. The
                attention to detail and quality is unlike anything I've seen
                before."
              </Typography>
              <Divider sx={{ width: "60px", mb: 3 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Emily Johnson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collector & Interior Designer
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/cta-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Let's Create Something Beautiful Together
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 5, maxWidth: "700px", mx: "auto" }}
            >
              Interested in custom pottery pieces or have questions about our
              collections? We'd love to hear from you!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                borderRadius: "30px",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
