import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { Delete, PlayArrow, ArrowBack } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Downloads.scss";
const Downloads = () => {
  let nav = useNavigate();
  const [history, setHistory] = useState([
    { id: 1, title: "Shin Chan:", date: "2025-02-24", thumbnail: "/Avatars/Shin-Chan-PNG.png" },
    { id: 2, title: "Shiva", date: "2025-02-22", thumbnail: "/Avatars/Shiva.png" },
    { id: 3, title: "The mefirst wizard", date: "2025-02-22", thumbnail: "/Avatars/Dargons.jpg" },
    { id: 4, title: "Kid Vs Kat", date: "2025-02-20", thumbnail: "/Avatars/Kid.png" },
    { id: 5, title: "Doraemon", date: "2025-02-18", thumbnail: "/Avatars/Doraemonc.jpg" },
    { id: 6, title: "Tom And Jerry", date: "2025-02-16", thumbnail: "/Avatars/Tom.png" },
  ]);

  const handleDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id));
    toast.error("Download deleted!");
  };

  const handleClearHistory = () => {
    setHistory([]);
    toast.warning("All downloads cleared!");
  };

  const navigate = useNavigate();

  return (
    <div className="download-page">
      {/* Emoji floating background */}
      <div className="emoji-background">
        <span className="emoji">🤣</span>
        <span className="emoji">😜</span>
        <span className="emoji">💥</span>
        <span className="emoji">🍥</span>
        <span className="emoji">🌀</span>
      </div>

      <Container fluid className="px-0">
        <div className="top-bar">
          <Button
            variant="outline-primary"
            onClick={() => navigate(-1)}
            className="d-flex align-items-center back-btn"
          >
            <ArrowBack className="me-2" />
            Back
          </Button>
          <h2 className="download-title">Downloads</h2>
        </div>

        <Row className="gx-0">
          {history.length > 0 ? (
            history.map((item) => (
              <Col md={4} key={item.id} className="mb-3 px-1">
                <Card className="download-card">
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.title}
                    className="download-image"
                  />
                  <Card.Body className="card-body">
                    <Card.Title>{item.title}</Card.Title>
                    <div className="btn-group">
                      <IconButton
                        color="secondary"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Delete />
                      </IconButton>
                      <IconButton className="playing" color="primary" onClick={()=>nav('/WatchEpisode')}>
                        <PlayArrow />
                      </IconButton>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Downloads are not available.</p>
          )}
        </Row>

        {history.length > 0 && (
          <div className="clear-button-wrapper">
            <Button variant="danger" onClick={handleClearHistory}>
              Clear All Downloads
            </Button>
          </div>
        )}

        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    </div>
  );
};

export default Downloads;
