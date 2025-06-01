import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SEO from "../components/ui/SEO";

const AboutPage = () => {
  const theme = useTheme();

  // Team members data
  const team = [
    {
      name: "Alex Parker",
      role: "Master Potter & Founder",
      avatar: "/images/team-1.jpg",
    },
    { name: "Maya Chen", role: "Ceramic Artist", avatar: "/images/team-2.jpg" },
    {
      name: "Jordan Lee",
      role: "Designer & Marketer",
      avatar: "/images/team-3.jpg",
    },
  ];

  // Values data
  const values = [
    {
      title: "Quality Craftsmanship",
      description:
        "Every piece is crafted with attention to detail and durability in mind.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We source local materials and use eco-friendly production methods.",
    },
    {
      title: "Artistic Expression",
      description:
        "Each creation combines traditional techniques with modern aesthetic sensibilities.",
    },
    {
      title: "Community Impact",
      description:
        "We support local artists and give back to pottery education programs.",
    },
  ];

  return (
    <>
      <SEO
        title="About Our Pottery Studio"
        description="Learn about KanasKraft pottery studio, our skilled artisans, traditional techniques, and commitment to quality handcrafted ceramics."
        keywords="pottery studio, ceramic artists, pottery making, about pottery, handmade ceramics"
        canonical="/about"
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
            OUR STORY
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            About KanasKraft
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
            Crafting beautiful pottery with traditional techniques and a modern
            touch since 2010.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-studio.jpg"
              alt="Our pottery studio"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Our Humble Beginning
            </Typography>
            <Typography variant="body1" paragraph>
              KanasKraft began in 2010 as a small studio dedicated to preserving
              traditional pottery techniques while embracing modern design. What
              started as a passion project quickly grew into a thriving ceramic
              art studio known for quality craftsmanship and unique designs.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded by Alex Parker, a master potter with over 20 years of
              experience, our studio began with a simple wheel, a kiln, and a
              vision to create pottery that combines function, beauty, and
              meaning.
            </Typography>
            <Typography variant="body1">
              Today, we continue to handcraft each piece with the same attention
              to detail and commitment to quality that has defined our work from
              the beginning.
            </Typography>
          </Grid>
        </Grid>

        {/* Our Values */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" sx={{ mb: 5, textAlign: "center" }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} key={value.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* What Sets Us Apart */}
        <Box sx={{ py: 6 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                What Sets Us Apart
              </Typography>
              <Typography variant="body1" paragraph>
                At KanasKraft, we believe in the beauty of handmade pottery and
                its ability to bring warmth and character to everyday life. Our
                approach combines time-honored techniques with innovative
                designs.
              </Typography>
              <List>
                {[
                  "Handmade with locally sourced clay",
                  "Unique glazes developed in our studio",
                  "Each piece individually crafted, not mass-produced",
                  "Functional art that enhances daily living",
                  "Sustainable production practices",
                ].map((item) => (
                  <ListItem key={item} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: "36px" }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/pottery-process.jpg"
                alt="Our pottery process"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              textAlign: "center",
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 180,
                      height: 180,
                      mb: 3,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      border: `3px solid ${theme.palette.background.paper}`,
                    }}
                  />
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {member.role}
                  </Typography>
                  <Divider sx={{ width: "60px", mb: 2 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
