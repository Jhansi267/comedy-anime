import React from "react";
import {
  PlayArrow,
  MoreVert,
  ThumbUp,
  Share,
  PlaylistAdd,
  FiberManualRecord,
  CheckCircle,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
const PlaylistSidebar = () => {
  const playlists = [
    {
      title: "Daring Prabhas Lovely Hit Songs ▶ Jukebox",
      channel: "Aditya Music",
      views: "4M views",
      time: "9 years ago",
      verified: true,
    },
    {
      title: "Mix – #NeedChoopule Full Song With TeluguLyrics",
      channel: "Ram Pothineni, Haricharan, Sonu Nigam",
      time: "Updated today",
    },
    {
      title: "Old Hindi Songs ♫ Unplugged ♫ Unplugged Covers! Song II...",
      channel: "The Editsmith",
      views: "25M views",
      time: "1 year ago",
      active: true,
    },
    {
      title: "Best of KK | Singer KK Songs | Aditya Music Telugu #RIPKK",
      channel: "Aditya Music PLAYBACK",
      views: "1.5M views",
      time: "2 years ago",
      verified: true,
    },
    {
      title: "Sid sriram top songs#songs #latest #romantic",
      channel: "Sid Sriram Official",
    },
    {
      title: "Chill Songs Vol.03",
      duration: "0:10 / 1:42:12 · 01.Yours My",
    },
    {
      title: "Chill Songs Vol.03 | Smooth & Mellow Vibes for Work & Study",
      channel: "MocktailMusic",
      subscribers: "16.8K subscribers",
    },
  ];
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={12} className="p-0">
          <Box sx={{ bgcolor: "background.paper" }} className="shadow-sm">
            {/* Header */}
            <Box
              sx={{ p: 2 }}
              className="d-flex justify-content-between align-items-center"
            >
              <Typography variant="h6" component="div">
                Playlists
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<PlayArrow />}
                  className="text-secondary"
                >
                  Play all
                </Button>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<PlaylistAdd />}
                  className="text-secondary"
                >
                  Save
                </Button>
              </Stack>
            </Box>
            <Divider />
            <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
              {playlists.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    alignItems="flex-start"
                    secondaryAction={
                      <IconButton edge="end" aria-label="more">
                        <MoreVert />
                      </IconButton>
                    }
                    sx={{
                      bgcolor: item.active ? "action.selected" : "inherit",
                      "&:hover": { bgcolor: "action.hover" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      {item.active ? (
                        <FiberManualRecord color="primary" fontSize="small" />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {index + 1}
                        </Typography>
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: item.active ? 600 : 400 }}
                          noWrap
                        >
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                          >
                            <Typography
                              component="span"
                              variant="caption"
                              color="text.primary"
                              sx={{ display: "inline" }}
                            >
                              {item.channel}
                            </Typography>
                            {item.verified && (
                              <CheckCircle
                                color="primary"
                                sx={{ fontSize: "0.8rem" }}
                              />
                            )}
                          </Stack>
                          <Typography
                            component="span"
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: "block" }}
                          >
                            {item.views && `${item.views} · `}
                            {item.time || item.duration}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ p: 2 }} className="bg-light">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    MocktailMusic
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    16.8K subscribers
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<ThumbUp fontSize="small" />}
                    label="2.6K"
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<Share fontSize="small" />}
                    label="Share"
                    size="small"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ borderRadius: 20 }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
export default PlaylistSidebar;
