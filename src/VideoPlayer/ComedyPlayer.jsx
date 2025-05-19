// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Slider, IconButton, Tooltip, Button, Typography } from '@mui/material';
// import {
//   PlayArrow, Pause, Replay10, Forward10, SlowMotionVideo, 
//   Screenshot, EmojiEmotions, VolumeUp, VolumeOff, Fullscreen
// } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';

// // Helper function to format time
// const formatTime = (seconds) => {
//   if (isNaN(seconds)) return '0:00';
  
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = Math.floor(seconds % 60);
//   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// };

// // Animations
// const wiggle = keyframes`
//   0%, 100% { transform: rotate(0deg); }
//   25% { transform: rotate(-5deg); }
//   75% { transform: rotate(5deg); }
// `;

// const flash = keyframes`
//   0% { opacity: 0; background: yellow; }
//   50% { opacity: 1; background: orange; }
//   100% { opacity: 0; background: yellow; }
// `;

// const ComedyPlayer = ({ src }) => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.7);
//   const [muted, setMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [jokeCount, setJokeCount] = useState(0);
//   const [slowMo, setSlowMo] = useState(false);
//   const [flashEffect, setFlashEffect] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);

//   // Handle metadata load to get duration
//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration);
//     }
//   };

//   // Handle time updates
//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//       setProgress((videoRef.current.currentTime / duration) * 100);
//     }
//   };

//   // Handle play/pause
//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (playing) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(error => {
//           console.error("Video play failed:", error);
//         });
//       }
//       setPlaying(!playing);
//     }
//   };

//   // Rewind 10 seconds with comic flash
//   const rewindLaugh = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
//       setFlashEffect(true);
//       setTimeout(() => setFlashEffect(false), 1000);
//     }
//   };

//   // Fast forward 10 seconds
//   const fastForward = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.min(
//         duration,
//         videoRef.current.currentTime + 10
//       );
//     }
//   };

//   // Toggle slow motion (0.5x speed)
//   const toggleSlowMo = () => {
//     if (videoRef.current) {
//       const newSlowMo = !slowMo;
//       videoRef.current.playbackRate = newSlowMo ? 0.5 : 1;
//       setSlowMo(newSlowMo);
//     }
//   };

//   // Capture meme screenshot
//   const captureMeme = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      
//       const link = document.createElement('a');
//       link.download = `meme-${new Date().getTime()}.png`;
//       link.href = canvas.toDataURL('image/png');
//       link.click();
//     }
//   };

//   // Count jokes
//   const countJoke = () => {
//     setJokeCount(prev => prev + 1);
//   };

//   // Handle volume change
//   const handleVolumeChange = (e, newValue) => {
//     if (videoRef.current) {
//       setVolume(newValue);
//       videoRef.current.volume = newValue;
//       setMuted(newValue === 0);
//     }
//   };

//   // Toggle fullscreen
//   const toggleFullscreen = () => {
//     if (!fullscreen) {
//       containerRef.current?.requestFullscreen?.().catch(err => {
//         console.error("Fullscreen failed:", err);
//       });
//     } else {
//       document.exitFullscreen?.();
//     }
//     setFullscreen(!fullscreen);
//   };

//   // Handle keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!videoRef.current) return;
      
//       switch (e.key) {
//         case ' ':
//           togglePlay();
//           break;
//         case 'ArrowLeft':
//           rewindLaugh();
//           break;
//         case 'ArrowRight':
//           fastForward();
//           break;
//         case 'm':
//           setMuted(!muted);
//           break;
//         case 'f':
//           toggleFullscreen();
//           break;
//         default:
//           break;
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [playing, muted, fullscreen]);

//   // Auto-hide controls
//   useEffect(() => {
//     if (!playing) {
//       setShowControls(true);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setShowControls(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [playing, currentTime]);

//   return (
//     <Box 
//       ref={containerRef}
//       sx={{
//         width: '100%',
//         maxWidth: 800,
//         mx: 'auto',
//         position: 'relative',
//         bgcolor: 'background.paper',
//         borderRadius: 2,
//         overflow: 'hidden',
//         boxShadow: 6,
//         '&:hover .controls': {
//           opacity: 1
//         }
//       }}
//       onMouseMove={() => setShowControls(true)}
//     >
//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         src={src}
//         onClick={togglePlay}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={() => setPlaying(false)}
//         onPlay={() => setPlaying(true)}
//         onPause={() => setPlaying(false)}
//         style={{
//           width: '100%',
//           display: 'block',
//           cursor: 'pointer',
//           filter: slowMo ? 'sepia(0.5)' : 'none',
//         }}
//       />

//       {/* Flash Effect (for rewind) */}
//       {flashEffect && (
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           animation: `${flash} 1s ease-out`,
//           pointerEvents: 'none',
//           zIndex: 1,
//         }} />
//       )}

//       {/* Controls Container */}
//       <Box className="controls" sx={{
//         p: 1,
//         bgcolor: 'rgba(0,0,0,0.7)',
//         color: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 1,
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         transition: 'opacity 0.3s',
//         opacity: showControls ? 1 : 0,
//         zIndex: 2
//       }}>
//         {/* Progress Bar */}
//         <Slider
//           value={progress || 0}
//           onChange={(e, newValue) => {
//             if (videoRef.current) {
//               const seekTime = (newValue / 100) * duration;
//               videoRef.current.currentTime = seekTime;
//             }
//           }}
//           sx={{
//             color: '#FF4081',
//             height: 6,
//             '& .MuiSlider-thumb': {
//               width: 15,
//               height: 15,
//               transition: '0.3s',
//               '&:hover, &.Mui-focusVisible': {
//                 boxShadow: '0 0 0 8px rgba(255, 64, 129, 0.16)',
//                 animation: `${wiggle} 0.5s ease-in-out`,
//               },
//             },
//           }}
//         />

//         {/* Main Controls */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           {/* Play/Pause */}
//           <IconButton onClick={togglePlay} color="inherit" aria-label={playing ? 'Pause' : 'Play'}>
//             {playing ? <Pause /> : <PlayArrow />}
//           </IconButton>

//           {/* Volume */}
//           <Box sx={{ display: 'flex', alignItems: 'center', width: 100 }}>
//             <IconButton onClick={() => setMuted(!muted)} color="inherit" aria-label={muted ? 'Unmute' : 'Mute'}>
//               {muted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
//             </IconButton>
//             <Slider
//               value={muted ? 0 : volume}
//               onChange={handleVolumeChange}
//               min={0}
//               max={1}
//               step={0.1}
//               sx={{ color: 'white' }}
//               aria-label="Volume"
//             />
//           </Box>

//           {/* Time Display */}
//           <Typography variant="body2" sx={{ ml: 'auto', mr: 1 }}>
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </Typography>

//           {/* Fullscreen */}
//           <IconButton onClick={toggleFullscreen} color="inherit" aria-label="Fullscreen">
//             <Fullscreen />
//           </IconButton>
//         </Box>

//         {/* Gag Tools */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-around',
//           borderTop: '1px solid rgba(255,255,255,0.2)',
//           pt: 1,
//         }}>
//           {/* Rewind the Laugh */}
//           <Tooltip title="Rewind the Laugh (10 sec)">
//             <Button 
//               onClick={rewindLaugh}
//               startIcon={<Replay10 />}
//               sx={{ color: 'white', '&:active': { animation: `${wiggle} 0.3s` } }}
//             >
//               10s
//             </Button>
//           </Tooltip>

//           {/* Fast Forward */}
//           <Tooltip title="Fast Forward (10 sec)">
//             <Button 
//               onClick={fastForward}
//               startIcon={<Forward10 />}
//               sx={{ color: 'white', '&:active': { animation: `${wiggle} 0.3s` } }}
//             >
//               10s
//             </Button>
//           </Tooltip>

//           {/* Slow Mo Scream */}
//           <Tooltip title="Slow Mo Scream">
//             <Button 
//               onClick={toggleSlowMo}
//               startIcon={<SlowMotionVideo />}
//               sx={{ 
//                 color: slowMo ? '#FFD700' : 'white',
//                 '&:active': { animation: `${wiggle} 0.3s` }
//               }}
//             >
//               Slow Mo
//             </Button>
//           </Tooltip>

//           {/* Meme Freeze */}
//           <Tooltip title="Meme Freeze (Screenshot)">
//             <Button 
//               onClick={captureMeme}
//               startIcon={<Screenshot />}
//               sx={{ color: 'white', '&:active': { animation: `${wiggle} 0.3s` } }}
//             >
//               Meme
//             </Button>
//           </Tooltip>

//           {/* Joke Counter */}
//           <Tooltip title="Joke Counter">
//             <Button 
//               onClick={countJoke}
//               startIcon={<EmojiEmotions />}
//               sx={{ color: 'white', '&:active': { animation: `${wiggle} 0.3s` } }}
//             >
//               Jokes: {jokeCount}
//             </Button>
//           </Tooltip>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ComedyPlayer;

// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Slider, IconButton, Tooltip, Button, Typography } from '@mui/material';
// import {
//   PlayArrow, Pause, Replay10, Forward10, SlowMotionVideo,
//   Screenshot, EmojiEmotions, VolumeUp, VolumeOff, Fullscreen
// } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';

// // Helper function to format time
// const formatTime = (seconds) => {
//   if (isNaN(seconds)) return '0:00';
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = Math.floor(seconds % 60);
//   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// };

// // Animations
// const wiggle = keyframes`
//   0%, 100% { transform: rotate(0deg); }
//   25% { transform: rotate(-5deg); }
//   75% { transform: rotate(5deg); }
// `;

// const flash = keyframes`
//   0% { opacity: 0; background: yellow; }
//   50% { opacity: 1; background: orange; }
//   100% { opacity: 0; background: yellow; }
// `;

// const ComedyPlayer = ({ src }) => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const controlsTimeout = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.7);
//   const [muted, setMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [jokeCount, setJokeCount] = useState(0);
//   const [slowMo, setSlowMo] = useState(false);
//   const [flashEffect, setFlashEffect] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Handle metadata load
//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration);
//     }
//   };

//   // Handle time updates
//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//       setProgress((videoRef.current.currentTime / duration) * 100);
//     }
//   };

//   // Handle play/pause
//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (playing) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(error => {
//           console.error("Video play failed:", error);
//         });
//       }
//       setPlaying(!playing);
//     }
//   };

//   // Seek functions
//   const rewindLaugh = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
//       setFlashEffect(true);
//       setTimeout(() => setFlashEffect(false), 1000);
//     }
//   };

//   const fastForward = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.min(
//         duration,
//         videoRef.current.currentTime + 10
//       );
//     }
//   };

//   // Playback controls
//   const toggleSlowMo = () => {
//     if (videoRef.current) {
//       const newSlowMo = !slowMo;
//       videoRef.current.playbackRate = newSlowMo ? 0.5 : 1;
//       setSlowMo(newSlowMo);
//     }
//   };

//   // Volume controls
//   const handleVolumeChange = (e, newValue) => {
//     if (videoRef.current) {
//       setVolume(newValue);
//       videoRef.current.volume = newValue;
//       setMuted(newValue === 0);
//     }
//   };

//   // Screenshot function
//   const captureMeme = () => {
//     if (videoRef.current) {
//       const canvas = document.createElement('canvas');
//       canvas.width = videoRef.current.videoWidth;
//       canvas.height = videoRef.current.videoHeight;
//       canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      
//       const link = document.createElement('a');
//       link.download = `meme-${new Date().getTime()}.png`;
//       link.href = canvas.toDataURL('image/png');
//       link.click();
//     }
//   };

//   // Joke counter
//   const countJoke = () => {
//     setJokeCount(prev => prev + 1);
//   };

//   // Fullscreen controls
//   const toggleFullscreen = () => {
//     if (!fullscreen) {
//       containerRef.current?.requestFullscreen?.().catch(err => {
//         console.error("Fullscreen failed:", err);
//       });
//     } else {
//       document.exitFullscreen?.();
//     }
//     setFullscreen(!fullscreen);
//   };

//   // Handle keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!videoRef.current) return;
      
//       switch (e.key) {
//         case ' ':
//           e.preventDefault();
//           togglePlay();
//           break;
//         case 'ArrowLeft':
//           rewindLaugh();
//           break;
//         case 'ArrowRight':
//           fastForward();
//           break;
//         case 'm':
//           setMuted(!muted);
//           break;
//         case 'f':
//           toggleFullscreen();
//           break;
//         default:
//           break;
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [playing, muted, fullscreen]);

//   // Auto-hide controls
//   useEffect(() => {
//     const resetControlsTimeout = () => {
//       clearTimeout(controlsTimeout.current);
//       setShowControls(true);
//       if (playing) {
//         controlsTimeout.current = setTimeout(() => {
//           setShowControls(false);
//         }, 3000);
//       }
//     };

//     resetControlsTimeout();
//     return () => clearTimeout(controlsTimeout.current);
//   }, [playing, currentTime]);

//   // Responsive controls render
//   const renderControlButton = (icon, label, onClick, color = 'inherit', extraProps = {}) => (
//     <Tooltip title={label}>
//       <IconButton
//         onClick={onClick}
//         color={color}
//         aria-label={label}
//         sx={{
//           '&:active': { animation: `${wiggle} 0.3s` },
//           ...extraProps.sx
//         }}
//         size={isMobile ? "small" : "medium"}
//       >
//         {icon}
//         {!isMobile && extraProps.text && (
//           <Typography variant="caption" sx={{ ml: 0.5 }}>
//             {extraProps.text}
//           </Typography>
//         )}
//       </IconButton>
//     </Tooltip>
//   );

//   return (
//     <Box 
//       ref={containerRef}
//       sx={{
//         width: '100%',
//         maxWidth: '100%',
//         mx: 'auto',
//         position: 'relative',
//         bgcolor: 'background.paper',
//         borderRadius: { xs: 0, sm: 2 },
//         overflow: 'hidden',
//         boxShadow: 6,
//         '&:hover .controls': {
//           opacity: 1
//         }
//       }}
//       onMouseMove={() => setShowControls(true)}
//       onTouchStart={() => setShowControls(true)}
//     >
//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         src={src}
//         onClick={togglePlay}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={() => setPlaying(false)}
//         onPlay={() => setPlaying(true)}
//         onPause={() => setPlaying(false)}
//         style={{
//           width: '100%',
//           display: 'block',
//           cursor: 'pointer',
//           filter: slowMo ? 'sepia(0.5)' : 'none',
//         }}
//       />

//       {/* Flash Effect */}
//       {flashEffect && (
//         <Box sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           animation: `${flash} 1s ease-out`,
//           pointerEvents: 'none',
//           zIndex: 1,
//         }} />
//       )}

//       {/* Controls Container */}
//       <Box className="controls" sx={{
//         p: { xs: 0.5, sm: 1 },
//         bgcolor: 'rgba(0,0,0,0.7)',
//         color: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: { xs: 0.5, sm: 1 },
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         transition: 'opacity 0.3s',
//         opacity: showControls ? 1 : 0,
//         zIndex: 2
//       }}>
//         {/* Progress Bar */}
//         <Slider
//           value={progress || 0}
//           onChange={(e, newValue) => {
//             if (videoRef.current) {
//               const seekTime = (newValue / 100) * duration;
//               videoRef.current.currentTime = seekTime;
//             }
//           }}
//           sx={{
//             color: '#FF4081',
//             height: { xs: 4, sm: 6 },
//             '& .MuiSlider-thumb': {
//               width: { xs: 12, sm: 15 },
//               height: { xs: 12, sm: 15 },
//               transition: '0.3s',
//               '&:hover, &.Mui-focusVisible': {
//                 boxShadow: '0 0 0 8px rgba(255, 64, 129, 0.16)',
//                 animation: `${wiggle} 0.5s ease-in-out`,
//               },
//             },
//           }}
//         />

//         {/* Main Controls */}
//         <Box sx={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           gap: { xs: 0.5, sm: 1 },
//         }}>
//           {/* Play/Pause */}
//           {renderControlButton(
//             playing ? <Pause /> : <PlayArrow />,
//             playing ? 'Pause' : 'Play',
//             togglePlay
//           )}

//           {/* Volume */}
//           <Box sx={{ 
//             display: 'flex', 
//             alignItems: 'center', 
//             width: { xs: 80, sm: 100 },
//             gap: 0.5
//           }}>
//             {renderControlButton(
//               muted || volume === 0 ? <VolumeOff /> : <VolumeUp />,
//               muted ? 'Unmute' : 'Mute',
//               () => setMuted(!muted)
//             )}
//             <Slider
//               value={muted ? 0 : volume}
//               onChange={handleVolumeChange}
//               min={0}
//               max={1}
//               step={0.1}
//               sx={{ color: 'white' }}
//               aria-label="Volume"
//               size="small"
//             />
//           </Box>

//           {/* Time Display */}
//           <Typography 
//             variant="body2" 
//             sx={{ 
//               ml: 'auto', 
//               mr: 1,
//               fontSize: { xs: '0.75rem', sm: '0.875rem' },
//               display: { xs: 'none', sm: 'block' }
//             }}
//           >
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </Typography>

//           {/* Additional Controls */}
//           {renderControlButton(
//             <Replay10 />,
//             'Rewind 10s',
//             rewindLaugh,
//             'inherit',
//             { text: isMobile ? null : '10s' }
//           )}

//           {renderControlButton(
//             <Forward10 />,
//             'Forward 10s',
//             fastForward,
//             'inherit',
//             { text: isMobile ? null : '10s' }
//           )}

//           {renderControlButton(
//             <SlowMotionVideo />,
//             'Slow Motion',
//             toggleSlowMo,
//             slowMo ? 'warning' : 'inherit'
//           )}

//           {renderControlButton(
//             <Fullscreen />,
//             fullscreen ? 'Exit Fullscreen' : 'Fullscreen',
//             toggleFullscreen
//           )}
//         </Box>

//         {/* Bottom Row Controls */}
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-around',
//           borderTop: '1px solid rgba(255,255,255,0.2)',
//           pt: { xs: 0.5, sm: 1 },
//         }}>
//           <Button 
//             onClick={captureMeme}
//             startIcon={<Screenshot />}
//             sx={{ 
//               color: 'white', 
//               '&:active': { animation: `${wiggle} 0.3s` },
//               minWidth: 'auto',
//               px: { xs: 0.5, sm: 1 }
//             }}
//             size="small"
//           >
//             {!isMobile && 'Meme'}
//           </Button>

//           <Button 
//             onClick={countJoke}
//             startIcon={<EmojiEmotions />}
//             sx={{ 
//               color: 'white', 
//               '&:active': { animation: `${wiggle} 0.3s` },
//               minWidth: 'auto',
//               px: { xs: 0.5, sm: 1 }
//             }}
//             size="small"
//           >
//             {!isMobile && 'Jokes:'} {jokeCount}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ComedyPlayer;


// 

import React, { useState, useRef, useEffect } from 'react';
import { Box, Slider, IconButton, Tooltip, Button, Typography, Snackbar, Alert } from '@mui/material';
import {
  PlayArrow, Pause, Replay10, Forward10, SlowMotionVideo,
  Screenshot, EmojiEmotions, VolumeUp, VolumeOff, Fullscreen,
  Brightness4, Brightness7
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Helper function to format time
const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

// Animations
const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
`;

const flash = keyframes`
  0% { opacity: 0; background: yellow; }
  50% { opacity: 1; background: orange; }
  100% { opacity: 0; background: yellow; }
`;

const ComedyPlayer = ({ src }) => {
  // Refs
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeout = useRef(null);

  // Player state
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [canCapture, setCanCapture] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  // Comedy features state
  const [jokeCount, setJokeCount] = useState(0);
  const [slowMo, setSlowMo] = useState(false);
  const [flashEffect, setFlashEffect] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [showBrightnessSlider, setShowBrightnessSlider] = useState(false);

  // Check mobile responsiveness
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Video event handlers
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress((videoRef.current.currentTime / duration) * 100);
    }
  };

  // Playback controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
      setPlaying(!playing);
    }
  };

  const rewindLaugh = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
      setFlashEffect(true);
      setTimeout(() => setFlashEffect(false), 1000);
    }
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        duration,
        videoRef.current.currentTime + 10
      );
    }
  };

  const toggleSlowMo = () => {
    if (videoRef.current) {
      const newSlowMo = !slowMo;
      videoRef.current.playbackRate = newSlowMo ? 0.5 : 1;
      setSlowMo(newSlowMo);
      updateVideoFilter();
    }
  };

  // Video effects
  const updateVideoFilter = () => {
    if (videoRef.current) {
      videoRef.current.style.filter = `
        brightness(${brightness}%) 
        ${slowMo ? 'sepia(0.5)' : ''}
      `;
    }
  };

  const handleBrightnessChange = (e, newValue) => {
    setBrightness(newValue);
    updateVideoFilter();
  };

  const toggleBrightnessSlider = () => {
    setShowBrightnessSlider(!showBrightnessSlider);
  };

  // Meme capture with security error handling
  const captureMeme = async () => {
    if (!videoRef.current || !canCapture) return;
    
    try {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      
      // Draw the video frame to canvas
      ctx.drawImage(videoRef.current, 0, 0);
      
      // Check if canvas is tainted
      try {
        ctx.getImageData(0, 0, 1, 1);
      } catch (error) {
        throw new Error("Cannot export due to security restrictions");
      }
      
      // Create download link
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error("Canvas to Blob conversion failed");
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `meme-${new Date().getTime()}.png`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
      }, 'image/png');
      
    } catch (error) {
      console.error("Failed to capture meme:", error);
      setSnackbar({
        open: true,
        message: "Couldn't create meme due to security restrictions. Try using a video from the same domain.",
        severity: 'error'
      });
      setCanCapture(false);
    }
  };

  const handleVolumeChange = (e, newValue) => {
    if (videoRef.current) {
      setVolume(newValue);
      videoRef.current.volume = newValue;
      setMuted(newValue === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!fullscreen) {
      containerRef.current?.requestFullscreen?.().catch(err => {
        console.error("Fullscreen failed:", err);
      });
    } else {
      document.exitFullscreen?.();
    }
    setFullscreen(!fullscreen);
  };

  // Comedy features
  const countJoke = () => {
    setJokeCount(prev => prev + 1);
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!videoRef.current) return;
      
      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          rewindLaugh();
          break;
        case 'ArrowRight':
          fastForward();
          break;
        case 'm':
          setMuted(!muted);
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'b':
          toggleBrightnessSlider();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [playing, muted, fullscreen]);

  // Auto-hide controls
  useEffect(() => {
    const resetControlsTimeout = () => {
      clearTimeout(controlsTimeout.current);
      setShowControls(true);
      if (playing) {
        controlsTimeout.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };

    resetControlsTimeout();
    return () => clearTimeout(controlsTimeout.current);
  }, [playing, currentTime]);

  // Responsive control button renderer
  const renderControlButton = (icon, label, onClick, color = 'inherit', extraProps = {}) => (
    <Tooltip title={label}>
      <IconButton
        onClick={onClick}
        color={color}
        aria-label={label}
        sx={{
          '&:active': { animation: `${wiggle} 0.3s` },
          ...extraProps.sx
        }}
        size={isMobile ? "small" : "medium"}
      >
        {icon}
        {!isMobile && extraProps.text && (
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            {extraProps.text}
          </Typography>
        )}
      </IconButton>
    </Tooltip>
  );

  return (
    <Box 
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: '100%',
        mx: 'auto',
        position: 'relative',
        bgcolor: 'background.paper',
        borderRadius: { xs: 0, sm: 2 },
        overflow: 'hidden',
        boxShadow: 6,
        '&:hover .controls': {
          opacity: 1
        }
      }}
      onMouseMove={() => setShowControls(true)}
      onTouchStart={() => setShowControls(true)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        crossOrigin="anonymous"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={(e) => {
          if (e.target.error && e.target.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            setCanCapture(false);
          }
        }}
        style={{
          width: '100%',
          display: 'block',
          cursor: 'pointer',
        }}
      />

      {/* Flash Effect */}
      {flashEffect && (
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          animation: `${flash} 1s ease-out`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      )}

      {/* Controls Container */}
      <Box className="controls" sx={{
        p: { xs: 0.5, sm: 1 },
        bgcolor: 'rgba(0,0,0,0.7)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 0.5, sm: 1 },
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        transition: 'opacity 0.3s',
        opacity: showControls ? 1 : 0,
        zIndex: 2
      }}>
        {/* Progress Bar */}
        <Slider
          value={progress || 0}
          onChange={(e, newValue) => {
            if (videoRef.current) {
              const seekTime = (newValue / 100) * duration;
              videoRef.current.currentTime = seekTime;
            }
          }}
          sx={{
            color: '#FF4081',
            height: { xs: 4, sm: 6 },
            '& .MuiSlider-thumb': {
              width: { xs: 12, sm: 15 },
              height: { xs: 12, sm: 15 },
              transition: '0.3s',
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(255, 64, 129, 0.16)',
                animation: `${wiggle} 0.5s ease-in-out`,
              },
            },
          }}
        />

        {/* Brightness Slider */}
        {showBrightnessSlider && (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 1
          }}>
            <Brightness4 sx={{ color: 'white' }} />
            <Slider
              value={brightness}
              onChange={handleBrightnessChange}
              min={50}
              max={150}
              step={5}
              sx={{ color: 'white', flexGrow: 1 }}
              aria-label="Brightness"
            />
            <Brightness7 sx={{ color: 'white' }} />
          </Box>
        )}

        {/* Main Controls Row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 0.5, sm: 1 },
        }}>
          {/* Play/Pause */}
          {renderControlButton(
            playing ? <Pause /> : <PlayArrow />,
            playing ? 'Pause' : 'Play',
            togglePlay
          )}

          {/* Volume Controls */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: { xs: 80, sm: 100 },
            gap: 0.5
          }}>
            {renderControlButton(
              muted || volume === 0 ? <VolumeOff /> : <VolumeUp />,
              muted ? 'Unmute' : 'Mute',
              () => setMuted(!muted)
            )}
            <Slider
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.1}
              sx={{ color: 'white' }}
              aria-label="Volume"
              size="small"
            />
          </Box>

          {/* Brightness Toggle */}
          {renderControlButton(
            brightness > 100 ? <Brightness7 /> : <Brightness4 />,
            'Adjust Brightness',
            toggleBrightnessSlider
          )}

          {/* Time Display */}
          <Typography 
            variant="body2" 
            sx={{ 
              ml: 'auto', 
              mr: 1,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              display: { xs: 'none', sm: 'block' }
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>

          {/* Seek Controls */}
          {renderControlButton(
            <Replay10 />,
            'Rewind 10s',
            rewindLaugh,
            'inherit',
            { text: isMobile ? null : '10s' }
          )}

          {renderControlButton(
            <Forward10 />,
            'Forward 10s',
            fastForward,
            'inherit',
            { text: isMobile ? null : '10s' }
          )}

          {/* Fullscreen */}
          {renderControlButton(
            <Fullscreen />,
            fullscreen ? 'Exit Fullscreen' : 'Fullscreen',
            toggleFullscreen
          )}
        </Box>

        {/* Comedy Features Row */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-around',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          pt: { xs: 0.5, sm: 1 },
        }}>
          {/* Meme Capture */}
          <Button 
            onClick={captureMeme}
            disabled={!canCapture}
            startIcon={<Screenshot />}
            sx={{ 
              color: 'white', 
              '&:active': { animation: `${wiggle} 0.3s` },
              minWidth: 'auto',
              px: { xs: 0.5, sm: 1 }
            }}
            size="small"
          >
            {!isMobile && 'Meme'}
          </Button>

          {/* Slow Motion */}
          <Button 
            onClick={toggleSlowMo}
            startIcon={<SlowMotionVideo />}
            sx={{ 
              color: slowMo ? '#FFD700' : 'white',
              '&:active': { animation: `${wiggle} 0.3s` },
              minWidth: 'auto',
              px: { xs: 0.5, sm: 1 }
            }}
            size="small"
          >
            {!isMobile && 'Slow Mo'}
          </Button>

          {/* Joke Counter */}
          <Button 
            onClick={countJoke}
            startIcon={<EmojiEmotions />}
            sx={{ 
              color: 'white', 
              '&:active': { animation: `${wiggle} 0.3s` },
              minWidth: 'auto',
              px: { xs: 0.5, sm: 1 }
            }}
            size="small"
          >
            {!isMobile && 'Jokes:'} {jokeCount}
          </Button>
        </Box>
      </Box>

      {/* Snackbar for error messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ComedyPlayer;