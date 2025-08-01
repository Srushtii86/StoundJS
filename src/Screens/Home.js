import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const services = {
    Stocks: {
      text: "Track and analyze your stock portfolio with real-time market insights and trends.",
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938"
    },
    Bonds: {
      text: "Manage your bond investments, view maturity schedules, and interest earnings easily.",
      img: "https://images.unsplash.com/photo-1521790361599-0d553872125f"
    },
    Cash: {
      text: "Monitor your liquid funds and optimize your cash flow for better financial planning.",
      img: "https://images.unsplash.com/photo-1600195077909-46e4a05f3a54"
    }
  };

  const reviews = [
    { name: "Aparna", text: "Amazing platform! Simplified all my investments." },
    { name: "Rahul", text: "The UI is so clean and easy to navigate!" },
    { name: "Sneha", text: "Helped me understand bonds better than any other app." }
  ];

  const faqs = [
    { q: "Is Stound free to use?", a: "Yes, basic tracking features are free. Premium tools are optional." },
    { q: "Can I track multiple portfolios?", a: "Absolutely, you can manage multiple investment portfolios seamlessly." },
    { q: "Is my data secure?", a: "We use bank-grade encryption to keep your data safe." }
  ];

  const handleOpenDialog = (key) => {
    setDialogContent(services[key]);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "white", color: "#4B0082", boxShadow: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Stound
          </Typography>
          <Box>
            <Button onClick={() => navigate("/login")} sx={{ color: "#4B0082" }}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 2, bgcolor: "#4B0082", "&:hover": { bgcolor: "#6A0DAD" } }}
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          background: "linear-gradient(to right, #4B0082, #98FF98)",
          color: "white",
          px: 4,
          textAlign: "center"
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
          Simplify Your Investments. Track, Manage & Grow Your Wealth Seamlessly.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "white",
            color: "#4B0082",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#EEE" }
          }}
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </Box>

      {/* Services Section */}
      <Box sx={{ textAlign: "center", px: 3, py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 5, color: "#4B0082" }}>
          Our Core Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {Object.entries(services).map(([serviceName, serviceData]) => (
            <Grid item xs={12} sm={6} md={4} key={serviceName}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                sx={{
                  height: 250,
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onClick={() => handleOpenDialog(serviceName)}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundImage: `url(${serviceData.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(75,0,130,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                      }}
                    >
                      {serviceName}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Service Modal */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: "bold", color: "#4B0082" }}>Service Details</DialogTitle>
        <DialogContent>
          {dialogContent?.img && (
            <Box
              component="img"
              src={dialogContent.img}
              alt="Service"
              sx={{
                width: "100%",
                borderRadius: 2,
                mb: 2,
                boxShadow: 2
              }}
            />
          )}
          <Typography>{dialogContent?.text}</Typography>
        </DialogContent>
      </Dialog>

      {/* Reviews Section */}
      <Box sx={{ bgcolor: "#F9F9F9", py: 6 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight: "bold", color: "#4B0082" }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={3} justifyContent="center" px={3}>
          {reviews.map((review, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center", boxShadow: 2 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "{review.text}"
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#4B0082" }}>
                  - {review.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ px: 3, py: 6 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight: "bold", color: "#4B0082" }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#4B0082" }} />}>
              <Typography sx={{ fontWeight: "bold" }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#4B0082", color: "white", mt: "auto" }}>
        <Typography variant="body2">© 2025 Stound. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
