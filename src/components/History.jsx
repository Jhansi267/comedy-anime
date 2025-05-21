import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { Delete, ArrowBack } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./History.scss";

const History = () => {
  const [history, setHistory] = useState([
    {
      id: 1,
      title: "Epic Fail Squad",
      date: "2025-02-18",
      thumbnail: "/Avatars/EpicFailSquad.jfif",
    },
    {
      id: 2,
      title: "Laugh Riot High",
      date: "2025-05-19",
      thumbnail: "/Avatars/LaughRiotHigh.jpg",
    },
    {
      id: 3,
      title: "Silly Senpai",
      date: "2025-05-20",
      thumbnail: "/Avatars/SillySenpai.jpg",
    },
  ]);

  const handleDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id));
    toast.error("History entry deleted");
  };

  const handleClearHistory = () => {
    setHistory([]);
    toast.warning("Watch history cleared");
  };

  const navigate = useNavigate();

  return (
    <div className="history-page">
      {/* Floating emoji background */}
      <div className="emoji-background">
        <span className="emoji">🤣</span>
        <span className="emoji">😜</span>
        <span className="emoji">💥</span>
        <span className="emoji">🍥</span>
        <span className="emoji">🌀</span>
      </div>

      <Container className="mt-4">
        <div className="d-flex justify-content-start align-items-center mb-3">
          <Button className="gradient-button" onClick={() => navigate(-1)}>
            <ArrowBack />
            Back
          </Button>
        </div>

        <h2 className="mb-4 text-center">📺 Watch History 📺</h2>

        <Row>
          {history.length > 0 ? (
            history.map((item) => (
              <Col md={4} key={item.id} className="mb-3">
                <Card className="shadow-sm history-card">
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.title}
                    className="history-img"
                  />
                  <IconButton
                    className="delete-icon"
                    onClick={() => handleDelete(item.id)}
                    size="small"
                    aria-label={`Delete ${item.title}`}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                  <Card.Body>
                    <Card.Title>{item.title} 😂</Card.Title>
                    <Card.Text>Watched on: {item.date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="no-history">No watch history available. 😢</p>
          )}
        </Row>

        {history.length > 0 && (
          <Button className="gradient-button" onClick={handleClearHistory}>
            🗑️ Clear All History
          </Button>
        )}

        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    </div>
  );
};

export default History;
