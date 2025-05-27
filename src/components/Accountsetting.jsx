import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Paper,
  Avatar,
  InputAdornment,
  Icon,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Accountsetting.scss";

const Accountsetting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    username: "ComedyFan123",
    email: "user@comedyott.com",
    avatar: "",
    bio: "Laughing my way through life!",
  });
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const lastActivity = [
    { date: "2025-05-20", activity: "Logged in from Chrome on Windows" },
    { date: "2025-05-19", activity: "Password changed" },
    { date: "2025-05-18", activity: "Enabled push notifications" },
    { date: "2025-05-15", activity: "Watched 'Stand-Up Special: Laugh Riot'" },
    { date: "2025-05-14", activity: "Subscribed to 'Funny Bones' series" },
  ];
  const [errors, setErrors] = useState({
    profile: {},
    security: {},
  });
  const handleTabChange = (event, newValue) => {
    setErrors({ profile: {}, security: {} });
    setActiveTab(newValue);
  };
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
    if (errors.profile[name]) {
      setErrors((prev) => ({
        ...prev,
        profile: { ...prev.profile, [name]: "" },
      }));
    }
  };
  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityData((prev) => ({ ...prev, [name]: value }));
    if (errors.security[name]) {
      setErrors((prev) => ({
        ...prev,
        security: { ...prev.security, [name]: "" },
      }));
    }
  };
  const handleClickShowPassword = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field],
    });
  };
  const validateProfile = () => {
    let valid = true;
    const newErrors = { ...errors.profile };
    if (!profileData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (profileData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(profileData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers and underscores";
      valid = false;
    }
    if (!profileData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(profileData.email)
    ) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (profileData.bio.length > 150) {
      newErrors.bio = "Bio must be less than 150 characters";
      valid = false;
    }
    setErrors({ ...errors, profile: newErrors });
    return valid;
  };
  const validateSecurity = () => {
    let valid = true;
    const newErrors = { ...errors.security };
    if (!securityData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
      valid = false;
    } else if (securityData.currentPassword.length < 8) {
      newErrors.currentPassword = "Password must be at least 8 characters";
      valid = false;
    }
    if (!securityData.newPassword) {
      newErrors.newPassword = "New password is required";
      valid = false;
    } else if (securityData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
      valid = false;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        securityData.newPassword
      )
    ) {
      newErrors.newPassword =
        "Password must contain uppercase, lowercase, number and special character";
      valid = false;
    } else if (securityData.newPassword === securityData.currentPassword) {
      newErrors.newPassword =
        "New password must be different from current password";
      valid = false;
    }
    if (!securityData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
      valid = false;
    } else if (securityData.newPassword !== securityData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    setErrors({ ...errors, security: newErrors });
    return valid;
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      toast.success("Profile updated successfully!");
      setErrors({ ...errors, profile: {} });
    } else {
      toast.error("Please fix the errors in the form");
    }
  };
  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    if (validateSecurity()) {
      toast.success("Password updated successfully!");
      setErrors({ ...errors, security: {} });
      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Please fix the errors in the form");
    }
  };
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size should be less than 2MB");
        return;
      }
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        toast.error("Only JPG, PNG or GIF images are allowed");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData((prev) => ({
          ...prev,
          avatar: event.target.result,
        }));
        toast.success("Avatar updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container maxWidth="lg" className="account-setting-container">
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Button
          variant="contained"
          style={{
            background:
              "linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)",
          }}
          size="large"
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" component="h1" sx={{ 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          LOL OTT Account Settings
        </Typography>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} />
      <Paper elevation={3} sx={{ p: 3, mb: 4, background: "#1a1a2e" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Profile" value="profile" />
            <Tab label="Security" value="security" />
            <Tab label="Activity Log" value="activity" />
          </Tabs>
        </Box>
        <Box sx={{ pt: 3 }}>
          {activeTab === "profile" && (
            <Box component="form" onSubmit={handleProfileSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Avatar
                  src={profileData.avatar}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: "3px solid #FF6B6B",
                  }}
                />
                <Button
                  variant="contained"
                  component="label"
                  style={{
                    background:
                      "linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)",
                  }}
                  size="small"
                >
                  Upload Avatar
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleAvatarUpload}
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={profileData.username}
                  onChange={handleProfileChange}
                  error={!!errors.profile.username}
                  helperText={errors.profile.username}
                  variant="outlined"
                  color="secondary"
                  InputProps={{
                    style: { color: "#fff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#aaa" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  error={!!errors.profile.email}
                  helperText={errors.profile.email}
                  variant="outlined"
                  color="secondary"
                  InputProps={{
                    style: { color: "#fff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#aaa" },
                  }}
                />
              </Box>
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
                error={!!errors.profile.bio}
                helperText={
                  errors.profile.bio || `${profileData.bio.length}/150`
                }
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                sx={{ mt: 3 }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
              />
              <Button
              onClick={() => navigate(-1)} 
                type="submit"
                variant="contained"
                style={{
                  background:
                    "linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)",
                }}
                size="large"
                sx={{ mt: 3, fontWeight: "bold" }}
              >
                Save Profile
              </Button>
            </Box>
          )}
          {activeTab === "security" && (
            <Box component="form" onSubmit={handleSecuritySubmit}>
              <TextField
                fullWidth
                label="Current Password"
                name="currentPassword"
                type={showPasswords.current ? "text" : "password"}
                value={securityData.currentPassword}
                onChange={handleSecurityChange}
                error={!!errors.security.currentPassword}
                helperText={errors.security.currentPassword}
                variant="outlined"
                color="secondary"
                sx={{ mb: 3 }}
                InputProps={{
                  style: { color: "#fff" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("current")}
                        edge="end"
                      >
                        {showPasswords.current ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
              />
              <TextField
                fullWidth
                label="New Password"
                name="newPassword"
                type={showPasswords.new ? "text" : "password"}
                value={securityData.newPassword}
                onChange={handleSecurityChange}
                error={!!errors.security.newPassword}
                helperText={
                  errors.security.newPassword ||
                  "Minimum 8 characters with uppercase, lowercase, number and special character"
                }
                variant="outlined"
                color="secondary"
                sx={{ mb: 3 }}
                InputProps={{
                  style: { color: "#fff" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("new")}
                        edge="end"
                      >
                        {showPasswords.new ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                name="confirmPassword"
                type={showPasswords.confirm ? "text" : "password"}
                value={securityData.confirmPassword}
                onChange={handleSecurityChange}
                error={!!errors.security.confirmPassword}
                helperText={errors.security.confirmPassword}
                variant="outlined"
                color="secondary"
                sx={{ mb: 3 }}
                InputProps={{
                  style: { color: "#fff" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("confirm")}
                        edge="end"
                      >
                        {showPasswords.confirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ fontWeight: 'bold' }}
                 style={{background: 'linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)'}}
              >
                    
                Change Password
              </Button>
            </Box>
          )}
          {activeTab === "activity" && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ color: "#FF6B6B" }}>
                Recent Activity
              </Typography>
              <List
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                {lastActivity.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "#FF8E53" }}
                          >
                            {item.activity}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: "#aaa" }}>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < lastActivity.length - 1 && (
                      <Divider component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
export default Accountsetting;
