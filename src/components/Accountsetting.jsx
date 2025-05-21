import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Accountsetting.scss";

const Accountsetting = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const lastActivity = [
    { date: "2025-05-20", activity: "Logged in from Chrome on Windows" },
    { date: "2025-05-19", activity: "Password changed" },
    { date: "2025-05-18", activity: "Enabled push notifications" },
  ];

  const [errors, setErrors] = useState({});

  const handleTabChange = (tab) => {
    setErrors({});
    setActiveTab(tab);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityData((prev) => ({ ...prev, [name]: value }));
  };

  const validateProfile = () => {
    let tempErrors = {};
    if (!profileData.username) tempErrors.username = "Username is required";
    if (!profileData.email) tempErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(profileData.email)
    )
      tempErrors.email = "Invalid email address";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateSecurity = () => {
    let tempErrors = {};
    if (!securityData.currentPassword)
      tempErrors.currentPassword = "Current password is required";
    if (!securityData.newPassword)
      tempErrors.newPassword = "New password is required";
    if (securityData.newPassword !== securityData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      toast.success("Profile updated successfully!");
      setErrors({});
    } else {
      toast.error("Fix profile form errors.");
    }
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    if (validateSecurity()) {
      toast.success("Password updated successfully!");
      setErrors({});
      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Fix security form errors.");
    }
  };

  return (
    <div className="account-layout">
      <div className="account-image-section">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Account Visual"
        />
      </div>

      <div className="account-setting-container">
        <ToastContainer />
        <h2>Account Settings</h2>

        <div className="tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </button>
          <button
            className={activeTab === "security" ? "active" : ""}
            onClick={() => handleTabChange("security")}
          >
            Security
          </button>
          <button
            className={activeTab === "activity" ? "active" : ""}
            onClick={() => handleTabChange("activity")}
          >
            Last Activity
          </button>
        </div>

        {activeTab === "profile" && (
          <form className="tab-content" onSubmit={handleProfileSubmit} noValidate>
            <div className="input-row">
              <div className="input-field">
                <label>Username</label>
                <input
                  name="username"
                  value={profileData.username}
                  onChange={handleProfileChange}
                  className={errors.username ? "error" : ""}
                  placeholder="Enter username"
                />
                {errors.username && (
                  <span className="error-message">{errors.username}</span>
                )}
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className={errors.email ? "error" : ""}
                  placeholder="Enter email"
                  type="email"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <button type="submit" className="save-btn">
              Save Profile
            </button>
          </form>
        )}

        {activeTab === "security" && (
          <form className="tab-content" onSubmit={handleSecuritySubmit} noValidate>
            <div className="input-field">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={securityData.currentPassword}
                onChange={handleSecurityChange}
                className={errors.currentPassword ? "error" : ""}
                placeholder="Current password"
              />
              {errors.currentPassword && (
                <span className="error-message">{errors.currentPassword}</span>
              )}
            </div>

            <div className="input-field">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={securityData.newPassword}
                onChange={handleSecurityChange}
                className={errors.newPassword ? "error" : ""}
                placeholder="New password"
              />
              {errors.newPassword && (
                <span className="error-message">{errors.newPassword}</span>
              )}
            </div>

            <div className="input-field">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={securityData.confirmPassword}
                onChange={handleSecurityChange}
                className={errors.confirmPassword ? "error" : ""}
                placeholder="Confirm new password"
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className="save-btn">
              Change Password
            </button>
          </form>
        )}

        {activeTab === "activity" && (
          <div className="tab-content last-activity">
            {lastActivity.length === 0 ? (
              <p>No recent activity.</p>
            ) : (
              <ul>
                {lastActivity.map((item, idx) => (
                  <li key={idx}>
                    <span className="date">{item.date}</span> —{" "}
                    <span className="activity">{item.activity}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accountsetting;
