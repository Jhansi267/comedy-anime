import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Laugh Lite",
    price: "₹99",
    icon: <EmojiEmotionsIcon fontSize="large" color="warning" />,
    features: ["720p streaming", "Ad-supported", "Single screen"],
  },
  {
    name: "Giggle Go",
    price: "₹199",
    icon: <StarIcon fontSize="large" color="primary" />,
    features: ["1080p streaming", "No ads", "2 screens"],
  },
  {
    name: "Comedy King",
    price: "₹299",
    icon: <WorkspacePremiumIcon fontSize="large" color="secondary" />,
    features: ["4K streaming", "No ads", "4 screens", "Offline access"],
  },
];
const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: 4,
        background: "#fff9f0",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom color="secondary">
        Choose Your LOL Plan 😂
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Pick a plan. Get ready to binge and laugh until your stomach hurts!
      </Typography>
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
                backgroundColor: selectedPlan === index ? "#ffe0b2" : "#ffffff",
              }}
              onClick={() => setSelectedPlan(index)}
            >
              <CardContent>
                <Box mb={2}>{plan.icon}</Box>
                <Typography variant="h6">{plan.name}</Typography>
                <Typography variant="h5">{plan.price}/month</Typography>
                <ul style={{ textAlign: "left", marginTop: 10 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  variant={selectedPlan === index ? "contained" : "outlined"}
                  fullWidth
                  color="primary"
                >
                  {selectedPlan === index ? "Selected" : "Select"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedPlan !== null && (
        <Box mt={5}>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() =>
              navigate("/payment-options", {
                state: {
                  name: plans[selectedPlan].name,
                  price: plans[selectedPlan].price,
                  features: plans[selectedPlan].features,
                },
              })
            }
          >
            Proceed to Pay {plans[selectedPlan].price}
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default PaymentPage;
