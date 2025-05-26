import React, { useState } from "react";
import VideoPlayer from "./ComedyPlayer";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  MoreVert,
  FiberManualRecord,
  PlayCircleOutline,
  CheckCircle,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Stack,
  Chip,
  LinearProgress,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import "./WatchEpisode.scss";
import { useNavigate } from "react-router-dom";

const WatchEpisode = () => {
  let nav = useNavigate();
  const [currentVideo, setCurrentVideo] = useState({
    id: 5,
    title: "Toilet Paper Samurai Returns",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    season: 2,
    episode: 3,
    description:
      "The hilarious return of everyone's favorite bathroom warrior!",
    airDate: "May 15, 2023",
    cast: ["John Smith", "Jane Doe", "Mike Johnson"],
    duration: "22:45",
    views: "1.2M views",
    active: true,
  });
  const [viewMode, setViewMode] = useState("list");
  const allEpisodes = [
    {
      id: 1,
      title: "Ultimate Prank War: Office Edition",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/assest/images/thumbnail1.png",
      season: 1,
      episode: 1,
      description: "The origin story of our bathroom hero",
      duration: "18:32",
      views: "2.5M views",
      cast: ["John Smith", "Jane Doe"],
      intensity: 95,
      expressions: ["😐", "😲", "🤯"],
    },
    {
      id: 2,
      title: "Dance-Off Disaster",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://i.ytimg.com/vi/2L8E0vKVuU/hqdefault.jpg",
      season: 1,
      episode: 2,
      description: "Facing the deadliest bathroom threat",
      duration: "20:15",
      views: "1.8M views",
      cast: ["John Smith", "Jane Doe"],
      intensity: 85,
      expressions: ["😑", "🕺", "🤪"],
    },
    {
      id: 3,
      title: "Bidet of Destiny",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "/assets/images/thumbnail1.png",
      season: 2,
      episode: 1,
      description: "A mysterious new bathroom appliance appears",
      duration: "19:45",
      views: "1.5M views",
      cast: ["John Smith", "Mike Johnson"],
      intensity: 75,
      expressions: ["😊", "😳", "🤣"],
    },
    {
      id: 4,
      title: "Rolling Thunder",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "/assets/images/thumbnail2.png",
      season: 2,
      episode: 2,
      description: "The toilet paper revolution begins",
      duration: "21:30",
      views: "1.3M views",
      cast: ["John Smith", "Jane Doe"],
      intensity: 80,
      expressions: ["😐", "😠", "🤬"],
    },
    {
      id: 5,
      title: "Toilet Paper Samurai Returns",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      season: 2,
      episode: 3,
      description:
        "The hilarious return of everyone's favorite bathroom warrior!",
      airDate: "May 15, 2023",
      cast: ["John Smith", "Jane Doe", "Mike Johnson"],
      duration: "22:45",
      views: "1.2M views",
      active: true,
      intensity: 90,
      expressions: ["😊", "😲", "🤣"],
    },
    {
      id: 6,
      title: "The Final Flush",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "/assets/images/thumbnail3.png",
      season: 2,
      episode: 4,
      description: "The epic bathroom conclusion",
      duration: "23:10",
      views: "950K views",
      cast: ["John Smith", "Jane Doe"],
      intensity: 88,
      expressions: ["😐", "😨", "😱"],
    },
  ];
  const recommendedVideos = [
    {
      id: 7,
      title: "Bathroom Chronicles: The Series",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      channel: "Mocktail Comedy",
      views: "5.7M views",
      thumbnail: "/assets/images/thumbnail4.png",
      verified: true,
      duration: "15:30",
    },
    {
      id: 8,
      title: "Plunger Adventures",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      channel: "Mocktail Comedy",
      views: "3.2M views",
      thumbnail: "/assets/images/thumbnail5.png",
      verified: true,
      duration: "18:45",
    },
    {
      id: 9,
      title: "Towel Ninja Spinoff",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      channel: "Mocktail Universe",
      views: "2.8M views",
      thumbnail: "/assets/images/thumbnail6.png",
      duration: "17:20",
    },
    {
      id: 10,
      title: "Soap Opera Parodies",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      channel: "Mocktail Comedy",
      views: "4.1M views",
      thumbnail: "/assets/images/thumbnail7.png",
      verified: true,
      duration: "14:50",
    },
  ];
  const handleVideoSelect = (video) => {
    setCurrentVideo({
      ...video,
      cast: video.cast || ["Unknown Actor"],
      active: true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const getHighlightLabel = (title) => {
    if (title.includes("Prank War"))
      return { text: "ULTIMATE PRANK WAR", color: "error.main" };
    if (title.includes("Dance-Off"))
      return { text: "DANCE-OFF DISASTER", color: "secondary.main" };
    if (title.includes("Samurai"))
      return { text: "SAMURAI RETURNS", color: "warning.main" };
    return null;
  };
  return (
    <Container fluid className="mt-4 px-0 px-md-3">
      <Row>
        <Col lg={8} className="pe-lg-3">
          <Box sx={{ mb: 2 }}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => window.history.back()}
              style={{
                background:
                  "linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)",
              }}
            >
              Back
            </Button>
          </Box>
          <Box className="episode-container p-3 p-md-4">
            <Typography
              variant="h4"
              component="h1"
              className="text-center mb-3"
            >
              {currentVideo.title}
            </Typography>

            <Box className="mb-4">
              <VideoPlayer src={currentVideo.videoUrl} key={currentVideo.id} />
            </Box>
            <Grid container spacing={3} className="episode-meta">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Episode Info
                </Typography>
                <Stack spacing={1}>
                  <Typography>
                    <strong>Season:</strong> {currentVideo.season}
                  </Typography>
                  <Typography>
                    <strong>Episode:</strong> {currentVideo.episode}
                  </Typography>
                  <Typography>
                    <strong>Aired:</strong>{" "}
                    {currentVideo.airDate || "Unknown date"}
                  </Typography>
                  <Typography>
                    <strong>Duration:</strong> {currentVideo.duration}
                  </Typography>
                  <Typography>
                    <strong>Views:</strong> {currentVideo.views}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Cast
                </Typography>
                <List dense>
                  {(currentVideo.cast || []).map((actor, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={actor} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Box className="episode-description mt-4">
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography paragraph>{currentVideo.description}</Typography>
            </Box>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h5" gutterBottom>
              More Videos You Might Like
            </Typography>
            <Grid container spacing={2}>
              {recommendedVideos.map((video) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={video.id}>
                  <Card
                    onClick={() => handleVideoSelect(video)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={video.thumbnail}
                        alt={video.title}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          right: 8,
                          bgcolor: "rgba(0,0,0,0.7)",
                          color: "white",
                          px: 0.5,
                          borderRadius: 1,
                          fontSize: "0.75rem",
                        }}
                      >
                        {video.duration || "10:15"}
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                        noWrap
                      >
                        {video.title}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="caption" color="text.secondary">
                          {video.channel}
                        </Typography>
                        {video.verified && (
                          <CheckCircle
                            color="primary"
                            sx={{ fontSize: "0.8rem" }}
                          />
                        )}
                      </Stack>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {video.views}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Col>
        <Col lg={4} className="ps-lg-0 mt-5">
          <Box sx={{ bgcolor: "background.paper" }} className="shadow-sm h-100">
            <Box
              sx={{ p: 2 }}
              className="d-flex justify-content-between align-items-center"
            >
              <Typography variant="h6" component="div">
                Season {currentVideo.season} Episodes
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {
                  allEpisodes.filter((ep) => ep.season === currentVideo.season)
                    .length
                }{" "}
                episodes
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ px: 2, py: 1, display: "flex", gap: 1 }}>
              <Chip
                label="List View"
                size="small"
                variant="outlined"
                onClick={() => setViewMode("list")}
                color={viewMode === "list" ? "primary" : "default"}
              />
              <Chip
                label="Comic View"
                size="small"
                variant="outlined"
                onClick={() => setViewMode("comic")}
                color={viewMode === "comic" ? "primary" : "default"}
              />
            </Box>
            {viewMode === "comic" ? (
              <Box
                sx={{ p: 2, display: "flex", overflowX: "auto", gap: 2, pb: 3 }}
              >
                {allEpisodes
                  .filter((episode) => episode.season === currentVideo.season)
                  .map((episode) => {
                    const highlight = getHighlightLabel(episode.title);
                    return (
                      <Card
                        key={episode.id}
                        sx={{
                          minWidth: 200,
                          border:
                            episode.id === currentVideo.id
                              ? "3px solid"
                              : "1px solid",
                          borderColor:
                            episode.id === currentVideo.id
                              ? "primary.main"
                              : "divider",
                          transform:
                            episode.id === currentVideo.id
                              ? "scale(1.02)"
                              : "none",
                          transition: "all 0.2s",
                          position: "relative",
                        }}
                        onClick={() => handleVideoSelect(episode)}
                      >
                        {highlight && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: -10,
                              left: 10,
                              bgcolor: highlight.color,
                              color: "white",
                              px: 1,
                              borderRadius: 1,
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                              zIndex: 1,
                              textTransform: "uppercase",
                            }}
                          >
                            {highlight.text}
                          </Box>
                        )}
                        <CardMedia
                          component="img"
                          height="140"
                          image={episode.thumbnail}
                          alt={episode.title}
                          sx={{
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            objectFit: "cover",
                          }}
                        />
                        <CardContent sx={{ p: 1.5 }}>
                          <Typography variant="subtitle2" noWrap>
                            {episode.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mt: 1,
                              mb: 0.5,
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{ flexShrink: 0 }}
                            >
                              Mood:
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.5,
                                flexGrow: 1,
                              }}
                            >
                              {episode.expressions?.map((emoji, i) => (
                                <React.Fragment key={i}>
                                  <span>{emoji}</span>
                                  {i < episode.expressions.length - 1 && (
                                    <span>→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </Box>
                          </Box>
                          <Box sx={{ width: "100%", mb: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={episode.intensity || 75}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "grey.200",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor:
                                    highlight?.color || "primary.main",
                                },
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{ textAlign: "right", display: "block" }}
                            >
                              {episode.intensity || 75}% Intensity
                            </Typography>
                          </Box>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="caption">
                              Ep {episode.episode}
                            </Typography>
                            <Typography variant="caption">
                              {episode.duration}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    );
                  })}
              </Box>
            ) : (
              <List
                dense
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  maxHeight: "60vh",
                  overflowY: "auto",
                }}
              >
                {allEpisodes
                  .filter((episode) => episode.season === currentVideo.season)
                  .map((episode) => (
                    <React.Fragment key={episode.id}>
                      <ListItem
                        alignItems="flex-start"
                        onClick={() => handleVideoSelect(episode)}
                        sx={{
                          bgcolor:
                            episode.id === currentVideo.id
                              ? "action.selected"
                              : "inherit",
                          "&:hover": {
                            bgcolor:
                              episode.id === currentVideo.id
                                ? "action.selected"
                                : "action.hover",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          <Avatar
                            variant="square"
                            src={episode.thumbnail}
                            sx={{ width: 120, height: 68 }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "white",
                              fontSize: "2rem",
                              opacity: 0.8,
                            }}
                          >
                            <PlayCircleOutline fontSize="inherit" />
                          </Box>
                          {episode.id === currentVideo.id && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 3,
                                bgcolor: "primary.main",
                              }}
                            />
                          )}
                        </Box>
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight:
                                  episode.id === currentVideo.id ? 600 : 400,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {episode.title}
                            </Typography>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <span>Episode {episode.episode}</span>
                                <FiberManualRecord
                                  sx={{ fontSize: "0.5rem", mx: 1 }}
                                />
                                <span>{episode.duration}</span>
                              </Typography>
                              <Typography
                                component="span"
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: "block" }}
                              >
                                {episode.views}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                        {episode.id !== currentVideo.id && (
                          <IconButton edge="end" aria-label="more">
                            <MoreVert />
                          </IconButton>
                        )}
                      </ListItem>
                      <Divider variant="inset" component="li" sx={{ ml: 17 }} />
                    </React.Fragment>
                  ))}
              </List>
            )}
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
export default WatchEpisode;
