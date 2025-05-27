import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  Grid,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import StarIcon from "@mui/icons-material/Star";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ComedyButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  borderRadius: "25px",
  padding: "10px 24px",
  textTransform: "none",
  fontSize: "1rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
  },
}));
const currentPlan = {
  id: 1,
  name: "😄 Laugh Lite",
  price: "₹99 per month",
  features: [
    "Access to Comedy Section",
    "Meme Freeze & Rewind the Laugh",
    "Ads every 15 mins (with whoopee cushion sounds)",
  ],
  color: "primary",
};
const CurrentSubscription = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate("/Subscription", { state: currentPlan });
  };
  const handleCancel = () => {
    console.log("Cancelling subscription:", currentPlan.name);
    navigate(-1);
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          mt: 8,
          mb: 4,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "85px",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            mb: 2,
          }}
        >
          CURRENT PLAN
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: `2px solid ${theme.palette[currentPlan.color].main}`,
                boxShadow: `0 0 15px ${theme.palette[currentPlan.color].light}`,
                mb: 4,
                borderRadius: "16px",
                background: "linear-gradient(145deg, #1a1a2e, #16213e)",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette[currentPlan.color].main,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    {currentPlan.name}
                  </Typography>
                  <StarIcon
                    color="primary"
                    sx={{
                      ml: 1,
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    mb: 2,
                    color: "#FF8E53",
                    fontWeight: "bold",
                  }}
                >
                  {currentPlan.price}
                </Typography>
                <List dense>
                  {currentPlan.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <EmojiEmotionsIcon
                          color={currentPlan.color}
                          sx={{
                            filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
                          }}
                        />
                      </ListItemIcon>
                      <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                        {feature}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <ComedyButton
                  variant="contained"
                  color="primary"
                  onClick={handleUpgrade}
                  fullWidth
                  sx={{
                    background:
                      "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)",
                    },
                  }}
                >
                  Upgrade Plan
                </ComedyButton>
                <ComedyButton
                  variant="outlined"
                  color="error"
                  onClick={handleCancel}
                  fullWidth
                  sx={{
                    border: "2px solid",
                    color: "#ff4444",
                    "&:hover": {
                      backgroundColor: "rgba(255, 68, 68, 0.08)",
                      border: "2px solid",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Cancel My LOL
                </ComedyButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
export default CurrentSubscription;
