import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Grid,
  Paper,
  Fade,
} from "@mui/material";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import PaymentIcon from "@mui/icons-material/Payment";
import { useLocation, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';

 
const PaymentOptions = () => {
  let nav =useNavigate();
  const [method, setMethod] = useState("card");
  const [paid, setPaid] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
 
  const selectedPlan = location.state;
 
  // Form fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
 
  // Validation error states
  const [errors, setErrors] = useState({});
 
  // Validate inputs based on method
  const validate = () => {
    const newErrors = {};
 
    if (method === "card") {
      if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
 
      // Expiry MM/YY check
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        newErrors.expiry = "Expiry must be in MM/YY format";
      } else {
        // Check expiry is in future
        const [month, year] = expiry.split("/");
        const expiryDate = new Date(
          2000 + parseInt(year, 10),
          parseInt(month, 10) - 1,
          1
        );
        const now = new Date();
        // Set expiryDate to end of month
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        expiryDate.setDate(0);
 
        if (expiryDate < now) {
          newErrors.expiry = "Card has expired";
        }
      }
 
      if (!/^\d{3}$/.test(cvv)) {
        newErrors.cvv = "CVV must be 3 digits";
      }
    } else if (method === "upi") {
      // Basic UPI ID pattern: something@bank
      if (!/^[\w.-]+@[\w]+$/.test(upiId)) {
        newErrors.upiId = "Enter a valid UPI ID (example@bank)";
      }
    }
 
    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };
 
  // Re-validate whenever inputs or method changes
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, cardNumber, expiry, cvv, upiId]);
 
  const handlePay = () => {
    if (validate()) {
      setPaid(true);
      setTimeout(() => {
        alert(
          `🎉 Payment of ${selectedPlan.price} successful! Time to LOL nonstop! 😂`
        );
        navigate("/");
      }, 1500);
    }
  };
 
  return (
    <Box
      sx={{
        padding: 4,
        background: "linear-gradient(135deg, #fff9e6 25%, #ffd89b 100%)",
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <Typography
        variant="h3"
        color="secondary"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        💳 Payment Options — LOL Mode ON!
      </Typography>
 
      <Typography variant="h5" color="primary" gutterBottom>
        You picked: <strong>{selectedPlan?.name || "No Plan"}</strong>{" "}
        <SentimentVerySatisfiedIcon color="warning" />
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Damage:{" "}
        <span style={{ color: "#e65100", fontWeight: "bold" }}>
          {selectedPlan?.price || "₹0"}
        </span>
      </Typography>
 
      <Box mt={4}>
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", mb: 2, color: "#6d4c41" }}
        >
          Choose your weapon of payment 😂
        </Typography>
        <RadioGroup
          row
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          sx={{
            justifyContent: "center",
            "& .MuiFormControlLabel-root": {
              mx: 2,
            },
          }}
        >
          <FormControlLabel value="card" control={<Radio />} label="💳 Card" />
          <FormControlLabel value="upi" control={<Radio />} label="📱 UPI" />
        </RadioGroup>
      </Box>
 
      <Box mt={3} maxWidth={500} margin="auto">
        <Paper
          elevation={4}
          sx={{
            padding: 3,
            borderRadius: 3,
            border: "3px dashed #ffb300",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {method === "card" && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  placeholder="😜 Enter your card # (just kidding!)"
                  value={cardNumber}
                  onChange={(e) => {
                    // Allow only digits and spaces
                    const value = e.target.value.replace(/[^\d\s]/g, "");
                    setCardNumber(value);
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9\s]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={Boolean(errors.cardNumber)}
                  helperText={errors.cardNumber}
                  InputLabelProps={{ sx: { color: "#f57c00" } }}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9 ]*" }}
                  sx={{
                    "& input::placeholder": {
                      fontStyle: "italic",
                      color: "#ffcc80",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date (MM/YY)"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => {
                    // Allow only digits and slash
                    const value = e.target.value.replace(/[^0-9/]/g, "");
                    setExpiry(value);
                  }}
                  error={Boolean(errors.expiry)}
                  helperText={errors.expiry}
                  InputLabelProps={{ sx: { color: "#f57c00" } }}
                  inputProps={{ maxLength: 5 }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => {
                    // Only digits, max 3 chars
                    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                    setCvv(value);
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  error={Boolean(errors.cvv)}
                  helperText={errors.cvv}
                  InputLabelProps={{ sx: { color: "#f57c00" } }}
                  inputProps={{ inputMode: "numeric", maxLength: 3 }}
                />
              </Grid>
            </Grid>
          )}
 
          {method === "upi" && (
            <TextField
              fullWidth
              label="Enter UPI ID"
              placeholder="example@bank"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              error={Boolean(errors.upiId)}
              helperText={errors.upiId}
              InputLabelProps={{ sx: { color: "#f57c00" } }}
              sx={{
                "& input::placeholder": {
                  fontStyle: "italic",
                  color: "#ffcc80",
                },
              }}
            />
          )}
 
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{
              marginTop: 3,
              fontWeight: "bold",
              letterSpacing: 1,
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.1) rotate(5deg)",
              },
            }}
            onClick={handlePay}
            disabled={paid || Object.keys(errors).length > 0}
            startIcon={<PaymentIcon />}
          >
            {paid ? "Processing..." : `🤣 Pay ${selectedPlan?.price}`}
          </Button>
          <Button
  variant="outlined"
  color="error"
  size="large"
  sx={{
    marginTop: 2,
    fontWeight: "bold",
    letterSpacing: 1,
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.1) rotate(-5deg)",
    },
  }}
  onClick={()=>nav("/Subscription")} // Make sure you define handleCancel function
  startIcon={<CancelIcon />} // Import CancelIcon from @mui/icons-material
>
  Cancel Payment
</Button>

 
          <Fade in={paid} timeout={1000}>
            <Typography
              variant="h6"
              sx={{
                mt: 3,
                color: "#d84315",
                fontWeight: "bold",
                animation: "pulse 2s infinite",
              }}
            >
              🎉 Thanks for your laughter fuel! Enjoy the show! 🎉
            </Typography>
          </Fade>
        </Paper>
      </Box>
 
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
        `}
      </style>
    </Box>
  );
};
 
export default PaymentOptions;
 
 