import React, { useState } from 'react';
import ComedyPlayer from './ComedyPlayer';
import {
  PlayArrow, MoreVert, FiberManualRecord,
  PlayCircleOutline, CheckCircle
} from '@mui/icons-material';
import {
  List, ListItem, ListItemIcon, ListItemText,
  Typography, Divider, IconButton, Box, Grid, 
  Card, CardMedia, CardContent, Avatar, Stack
} from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import './WatchEpisode.scss';

const WatchEpisode = () => {
  const [currentVideo, setCurrentVideo] = useState({
    id: 5,
    title: "Toilet Paper Samurai Returns",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    season: 2,
    episode: 3,
    description: "The hilarious return of everyone's favorite bathroom warrior!",
    airDate: "May 15, 2023",
    cast: ["John Smith", "Jane Doe", "Mike Johnson"],
    duration: "22:45",
    views: "1.2M views",
    active: true
  });

  const allEpisodes = [
    {
      id: 1,
      title: "Toilet Paper Samurai Origins",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://i.ytimg.com/vi/1L7EI0vKVuU/hqdefault.jpg",
      season: 1,
      episode: 1,
      description: "The origin story of our bathroom hero",
      duration: "18:32",
      views: "2.5M views",
      cast: ["John Smith", "Jane Doe"]
    },
    {
      id: 2,
      title: "The Paper Cut Crisis",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://i.ytimg.com/vi/2L8E0vKVuU/hqdefault.jpg",
      season: 1,
      episode: 2,
      description: "Facing the deadliest bathroom threat",
      duration: "20:15",
      views: "1.8M views",
      cast: ["John Smith", "Jane Doe"]
    },
    {
      id: 3,
      title: "Bidet of Destiny",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "https://i.ytimg.com/vi/3L9E0vKVuU/hqdefault.jpg",
      season: 2,
      episode: 1,
      description: "A mysterious new bathroom appliance appears",
      duration: "19:45",
      views: "1.5M views",
      cast: ["John Smith", "Mike Johnson"]
    },
    {
      id: 4,
      title: "Rolling Thunder",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "https://i.ytimg.com/vi/4L0E0vKVuU/hqdefault.jpg",
      season: 2,
      episode: 2,
      description: "The toilet paper revolution begins",
      duration: "21:30",
      views: "1.3M views",
      cast: ["John Smith", "Jane Doe"]
    },
    {
      id: 5,
      title: "Toilet Paper Samurai Returns",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      season: 2,
      episode: 3,
      description: "The hilarious return of everyone's favorite bathroom warrior!",
      airDate: "May 15, 2023",
      cast: ["John Smith", "Jane Doe", "Mike Johnson"],
      duration: "22:45",
      views: "1.2M views",
      active: true
    },
    {
      id: 6,
      title: "The Final Flush",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "https://i.ytimg.com/vi/6L0E0vKVuU/hqdefault.jpg",
      season: 2,
      episode: 4,
      description: "The epic bathroom conclusion",
      duration: "23:10",
      views: "950K views",
      cast: ["John Smith", "Jane Doe"]
    }
  ];

  const recommendedVideos = [
    {
      id: 7,
      title: "Bathroom Chronicles: The Series",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      channel: "Mocktail Comedy",
      views: "5.7M views",
      thumbnail: "https://i.ytimg.com/vi/7L0E0vKVuU/hqdefault.jpg",
      verified: true,
      duration: "15:30"
    },
    {
      id: 8,
      title: "Plunger Adventures",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      channel: "Mocktail Comedy",
      views: "3.2M views",
      thumbnail: "https://i.ytimg.com/vi/8L0E0vKVuU/hqdefault.jpg",
      verified: true,
      duration: "18:45"
    },
    {
      id: 9,
      title: "Towel Ninja Spinoff",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      channel: "Mocktail Universe",
      views: "2.8M views",
      thumbnail: "https://i.ytimg.com/vi/9L0E0vKVuU/hqdefault.jpg",
      duration: "17:20"
    },
    {
      id: 10,
      title: "Soap Opera Parodies",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      channel: "Mocktail Comedy",
      views: "4.1M views",
      thumbnail: "https://i.ytimg.com/vi/0L1E0vKVuU/hqdefault.jpg",
      verified: true,
      duration: "14:50"
    }
  ];

  const handleVideoSelect = (video) => {
    setCurrentVideo({
      ...video,
      cast: video.cast || ["Unknown Actor"], // Ensure cast always exists
      active: true
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container fluid className="mt-4 px-0 px-md-3">
      <Row>
        {/* Main Content Column */}
        <Col lg={8} className="pe-lg-3">
          <Box className="episode-container p-3 p-md-4">
            <Typography variant="h4" component="h1" className="text-center mb-3">
              {currentVideo.title}
            </Typography>
            
            <Box className="mb-4">
              <ComedyPlayer 
                src={currentVideo.videoUrl} 
                key={currentVideo.id}
              />
            </Box>
            
            <Grid container spacing={3} className="episode-meta">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Episode Info
                </Typography>
                <Stack spacing={1}>
                  <Typography><strong>Season:</strong> {currentVideo.season}</Typography>
                  <Typography><strong>Episode:</strong> {currentVideo.episode}</Typography>
                  <Typography><strong>Aired:</strong> {currentVideo.airDate || "Unknown date"}</Typography>
                  <Typography><strong>Duration:</strong> {currentVideo.duration}</Typography>
                  <Typography><strong>Views:</strong> {currentVideo.views}</Typography>
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
              <Typography paragraph>
                {currentVideo.description}
              </Typography>
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
                    sx={{ cursor: 'pointer' }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={video.thumbnail}
                        alt={video.title}
                      />
                      <Box sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        px: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem'
                      }}>
                        {video.duration || "10:15"}
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="subtitle2" component="div" noWrap>
                        {video.title}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="caption" color="text.secondary">
                          {video.channel}
                        </Typography>
                        {video.verified && <CheckCircle color="primary" sx={{ fontSize: '0.8rem' }} />}
                      </Stack>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {video.views}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Col>

        {/* All Episodes Sidebar Column */}
        <Col lg={4} className="ps-lg-0">
          <Box sx={{ bgcolor: 'background.paper' }} className="shadow-sm h-100">
            <Box sx={{ p: 2 }} className="d-flex justify-content-between align-items-center">
              <Typography variant="h6" component="div">
                Season {currentVideo.season} Episodes
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {allEpisodes.filter(ep => ep.season === currentVideo.season).length} episodes
              </Typography>
            </Box>

            <Divider />

            <List dense sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: '60vh', overflowY: 'auto' }}>
              {allEpisodes
                .filter(episode => episode.season === currentVideo.season)
                .map((episode) => (
                  <React.Fragment key={episode.id}>
                    <ListItem
                      alignItems="flex-start"
                      onClick={() => handleVideoSelect(episode)}
                      sx={{
                        bgcolor: episode.id === currentVideo.id ? 'action.selected' : 'inherit',
                        '&:hover': { 
                          bgcolor: episode.id === currentVideo.id ? 'action.selected' : 'action.hover',
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <Box sx={{ 
                        position: 'relative',
                        mr: 2,
                        flexShrink: 0 
                      }}>
                        <Avatar
                          variant="square"
                          src={episode.thumbnail}
                          sx={{ width: 120, height: 68 }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: 'white',
                          fontSize: '2rem',
                          opacity: 0.8
                        }}>
                          <PlayCircleOutline fontSize="inherit" />
                        </Box>
                        {episode.id === currentVideo.id && (
                          <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            bgcolor: 'primary.main'
                          }} />
                        )}
                      </Box>
                      <ListItemText
                        primary={
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontWeight: episode.id === currentVideo.id ? 600 : 400,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
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
                              sx={{ display: 'flex', alignItems: 'center' }}
                            >
                              <span>Episode {episode.episode}</span>
                              <FiberManualRecord sx={{ fontSize: '0.5rem', mx: 1 }} />
                              <span>{episode.duration}</span>
                            </Typography>
                            <Typography
                              component="span"
                              variant="caption"
                              color="text.secondary"
                              sx={{ display: 'block' }}
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
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default WatchEpisode;






// import React, { useState, useRef } from 'react';
// import ComedyPlayer from './ComedyPlayer';
// import {
//   PlayArrow, Pause, MoreVert, FiberManualRecord,
//   PlayCircleOutline, CheckCircle, Brightness4
// } from '@mui/icons-material';
// import {
//   List, ListItem, ListItemIcon, ListItemText,
//   Typography, Divider, IconButton, Box, Grid, 
//   Card, CardMedia, CardContent, Avatar, Stack,
//   Slider, Tooltip
// } from '@mui/material';
// import { Container, Row, Col } from 'react-bootstrap';
// import './WatchEpisode.scss';

// const WatchEpisode = () => {
//   const [currentVideo, setCurrentVideo] = useState({
//     id: 5,
//     title: "Toilet Paper Samurai Returns",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
//     season: 2,
//     episode: 3,
//     description: "The hilarious return of everyone's favorite bathroom warrior!",
//     airDate: "May 15, 2023",
//     cast: ["John Smith", "Jane Doe", "Mike Johnson"],
//     duration: "22:45",
//     views: "1.2M views",
//     active: true
//   });

//   // Player state
//   const [showControls, setShowControls] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [brightness, setBrightness] = useState(100);
//   const [showBrightnessSlider, setShowBrightnessSlider] = useState(false);
//   const brightnessTimeoutRef = useRef(null);

//   // ... (keep other existing state and data)

//   const handleBrightnessChange = (event, newValue) => {
//     setBrightness(newValue);
//     // Reset the hide timeout when adjusting brightness
//     if (brightnessTimeoutRef.current) {
//       clearTimeout(brightnessTimeoutRef.current);
//     }
//     brightnessTimeoutRef.current = setTimeout(() => {
//       setShowBrightnessSlider(false);
//     }, 2000);
//   };

//   const toggleBrightnessSlider = () => {
//     setShowBrightnessSlider(!showBrightnessSlider);
//     if (brightnessTimeoutRef.current) {
//       clearTimeout(brightnessTimeoutRef.current);
//     }
//     if (!showBrightnessSlider) {
//       brightnessTimeoutRef.current = setTimeout(() => {
//         setShowBrightnessSlider(false);
//       }, 2000);
//     }
//   };

//   // ... (keep other existing functions)

//   return (
//     <Container fluid className="mt-4 px-0 px-md-3">
//       <Row>
//         <Col lg={8} className="pe-lg-3">
//           <Box className="episode-container p-3 p-md-4">
//             <Typography variant="h4" component="h1" className="text-center mb-3">
//               {currentVideo.title}
//             </Typography>
            
//             <Box 
//               className="mb-4 video-player-container" 
//               onClick={() => setShowControls(!showControls)}
//               sx={{ 
//                 position: 'relative',
//                 backgroundColor: 'transparent',
//                 borderRadius: '8px',
//                 overflow: 'hidden',
//                 filter: `brightness(${brightness}%)`,
//                 transition: 'filter 0.3s ease',
//                 '&:hover .video-controls': {
//                   opacity: 1
//                 }
//               }}
//             >
//               <ComedyPlayer 
//                 src={currentVideo.videoUrl} 
//                 key={currentVideo.id}
//                 isPlaying={isPlaying}
//               />
              
//               {/* Brightness Control - Left Center Position */}
//               <Box sx={{
//                 position: 'absolute',
//                 left: '16px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 zIndex: 10
//               }}>
//                 <Tooltip title="Brightness">
//                   <IconButton 
//                     onClick={toggleBrightnessSlider}
//                     sx={{ 
//                       color: 'white',
//                       bgcolor: 'rgba(0,0,0,0.5)',
//                       '&:hover': {
//                         bgcolor: 'rgba(0,0,0,0.7)'
//                       }
//                     }}
//                   >
//                     <Brightness4 />
//                   </IconButton>
//                 </Tooltip>
                
//                 {showBrightnessSlider && (
//                   <Slider
//                     value={brightness}
//                     onChange={handleBrightnessChange}
//                     orientation="vertical"
//                     min={50}
//                     max={150}
//                     step={5}
//                     sx={{
//                       height: '100px',
//                       color: 'white',
//                       '& .MuiSlider-thumb': {
//                         width: 16,
//                         height: 16,
//                         '&:hover, &.Mui-focusVisible': {
//                           boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
//                         },
//                       },
//                       '& .MuiSlider-track': {
//                         border: 'none',
//                         width: '4px'
//                       },
//                       '& .MuiSlider-rail': {
//                         width: '4px',
//                         opacity: 0.5
//                       },
//                       mt: 1,
//                       mb: 1
//                     }}
//                   />
//                 )}
//               </Box>

//               {/* Rest of the video controls... */}
//               {showControls && (
//                 <Box className="video-controls" sx={{
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   p: 2,
//                   background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
//                   transition: 'opacity 0.3s ease',
//                 }}>
//                   {/* ... existing control buttons ... */}
//                 </Box>
//               )}
//             </Box>

//             {/* ... rest of the component remains the same ... */}
//           </Box>
//         </Col>
        
//         {/* Sidebar column remains the same */}
//         {/* ... */}
//       </Row>
//     </Container>
//   );
// };

// export default WatchEpisode;

