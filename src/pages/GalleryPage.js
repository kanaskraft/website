import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  useTheme,
  Chip,
} from "@mui/material";
import SEO from "../components/ui/SEO";

// Placeholder data - in a real app, you'd fetch this from an API or CMS
const galleryItems = [
  {
    id: 1,
    title: "Rustic Bowl Set",
    category: "tableware",
    image: "/images/gallery/bowl-set.jpg",
    description: "Hand-thrown ceramic bowls with natural glaze finish.",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Vase",
    category: "vases",
    image: "/images/gallery/modern-vase.jpg",
    description: "Minimalist vase with unique shape and texture.",
    featured: true,
  },
  {
    id: 3,
    title: "Decorative Plate",
    category: "tableware",
    image: "/images/gallery/decorative-plate.jpg",
    description: "Hand-painted ceramic plate with intricate patterns.",
    featured: false,
  },
  {
    id: 4,
    title: "Abstract Sculpture",
    category: "decorative",
    image: "/images/gallery/abstract-sculpture.jpg",
    description: "Contemporary ceramic sculpture for home décor.",
    featured: true,
  },
  {
    id: 5,
    title: "Tea Set",
    category: "tableware",
    image: "/images/gallery/tea-set.jpg",
    description: "Complete tea set with matching cups and teapot.",
    featured: false,
  },
  {
    id: 6,
    title: "Wall Planter",
    category: "planters",
    image: "/images/gallery/wall-planter.jpg",
    description: "Hanging ceramic planter with geometric patterns.",
    featured: false,
  },
  {
    id: 7,
    title: "Coffee Mugs",
    category: "tableware",
    image: "/images/gallery/coffee-mugs.jpg",
    description: "Set of handmade coffee mugs with comfortable handles.",
    featured: true,
  },
  {
    id: 8,
    title: "Ceramic Lamp Base",
    category: "decorative",
    image: "/images/gallery/lamp-base.jpg",
    description: "Artisan lamp base with textured finish.",
    featured: false,
  },
  {
    id: 9,
    title: "Bud Vases Collection",
    category: "vases",
    image: "/images/gallery/bud-vases.jpg",
    description: "Collection of small vases perfect for single stems.",
    featured: true,
  },
  {
    id: 10,
    title: "Serving Platter",
    category: "tableware",
    image: "/images/gallery/serving-platter.jpg",
    description: "Large serving platter with raised edges and custom glaze.",
    featured: false,
  },
  {
    id: 11,
    title: "Herb Planters",
    category: "planters",
    image: "/images/gallery/herb-planters.jpg",
    description: "Set of small planters perfect for kitchen herbs.",
    featured: false,
  },
  {
    id: 12,
    title: "Decorative Tiles",
    category: "decorative",
    image: "/images/gallery/decorative-tiles.jpg",
    description: "Hand-painted ceramic tiles with traditional patterns.",
    featured: true,
  },
];

const GalleryPage = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState("all");

  // Categories for filtering
  const categories = [
    { value: "all", label: "All Items" },
    { value: "tableware", label: "Tableware" },
    { value: "vases", label: "Vases" },
    { value: "decorative", label: "Decorative" },
    { value: "planters", label: "Planters" },
  ];

  // Filter items based on selected category
  const filteredItems =
    currentTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === currentTab);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <SEO
        title="Pottery Gallery"
        description="Explore our collection of handcrafted pottery including tableware, vases, decorative items, and planters. Each piece showcases unique craftsmanship."
        keywords="pottery gallery, ceramic art, pottery collection, handmade ceramics, pottery showcase"
        canonical="/gallery"
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
            OUR WORK
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Pottery Gallery
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
            Explore our collection of handcrafted pottery pieces, each telling a
            unique story through clay.
          </Typography>
        </Container>
      </Box>

      {/* Gallery Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Filter Tabs */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            aria-label="gallery categories"
          >
            {categories.map((category) => (
              <Tab
                key={category.value}
                value={category.value}
                label={category.label}
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  px: 3,
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={4}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                  },
                  position: "relative",
                }}
              >
                {item.featured && (
                  <Chip
                    label="Featured"
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 1,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="280"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
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

        {/* If no items match the filter */}
        {filteredItems.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No items found in this category.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => setCurrentTab("all")}
            >
              View All Items
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default GalleryPage;
