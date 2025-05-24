import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Slider,
  Typography,
  Button,
  Snackbar,
  Alert,
  keyframes,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Brightness4,
  Brightness7,
  Fullscreen,
  Replay10,
  Forward10,
  Screenshot,
  SlowMotionVideo,
  EmojiEmotions
} from '@mui/icons-material';

// Keyframe animations
const flash = keyframes`
  0% { background-color: transparent; }
  50% { background-color: white; }
  100% { background-color: transparent; }
`;

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [showBrightnessSlider, setShowBrightnessSlider] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [flashEffect, setFlashEffect] = useState(false);
  const [slowMo, setSlowMo] = useState(false);
  const [jokeCount, setJokeCount] = useState(0);
  const [canCapture, setCanCapture] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });
  const [touchStartTime, setTouchStartTime] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  // Handle volume change
  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
    videoRef.current.volume = newValue;
    setMuted(newValue === 0);
  };

  // Handle brightness change
  const handleBrightnessChange = (e, newValue) => {
    setBrightness(newValue);
    videoRef.current.style.filter = `brightness(${newValue / 100})`;
  };

  // Toggle brightness slider
  const toggleBrightnessSlider = () => {
    setShowBrightnessSlider(!showBrightnessSlider);
  };

  // Handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    setProgress((videoRef.current.currentTime / duration) * 100);
  };

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        setSnackbar({
          open: true,
          message: `Fullscreen failed: ${err.message}`,
          severity: 'error'
        });
      });
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  // Seek functions
  const rewindLaugh = () => {
    videoRef.current.currentTime = Math.max(0, currentTime - 10);
  };

  const fastForward = () => {
    videoRef.current.currentTime = Math.min(duration, currentTime + 10);
  };

  // Comedy features
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
  const toggleSlowMo = () => {
    setSlowMo(!slowMo);
    videoRef.current.playbackRate = slowMo ? 1 : 0.5;
  };

  const countJoke = () => {
    setJokeCount(jokeCount + 1);
  };

  // Snackbar handler
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Render control button helper
  const renderControlButton = (icon, title, onClick, color = 'white', extra = {}) => (
    <Button
      onClick={onClick}
      aria-label={title}
      sx={{
        color,
        minWidth: 'auto',
        p: isMobile ? 0.5 : 1,
        '&:active': { animation: `${wiggle} 0.3s` }
      }}
    >
      {icon}
      {!isMobile && extra.text && (
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          {extra.text}
        </Typography>
      )}
    </Button>
  );

  // Touch event handlers for mobile
  const handleTouchStart = () => {
    setTouchStartTime(Date.now());
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  const handleTouchEnd = () => {
    const touchDuration = Date.now() - touchStartTime;
    if (touchDuration < 300) {
      const now = Date.now();
      if (now - lastTapTime < 300) {
        togglePlay();
      }
      setLastTapTime(now);
    }
  };

  // Hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timer;
    if (showControls) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showControls]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

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
          opacity: isMobile ? 0 : 1
        }
      }}
      onMouseMove={() => !isMobile && setShowControls(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        crossOrigin="anonymous"
        onClick={isMobile ? undefined : togglePlay}
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
          cursor: isMobile ? 'default' : 'pointer',
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
        p: isMobile ? 0.5 : 1,
        bgcolor: 'rgba(0,0,0,0.7)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 0.5 : 1,
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
            height: isMobile ? 4 : 6,
            '& .MuiSlider-thumb': {
              width: isMobile ? 12 : 15,
              height: isMobile ? 12 : 15,
              transition: '0.3s',
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(255, 64, 129, 0.16)',
                animation: `${wiggle} 0.5s ease-in-out`,
              },
            },
          }}
        />

        {/* Main Controls Row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile ? 0.5 : 1,
        }}>
          {/* Play/Pause */}
          {renderControlButton(
            playing ? <Pause fontSize={isMobile ? 'small' : 'medium'} /> : <PlayArrow fontSize={isMobile ? 'small' : 'medium'} />,
            playing ? 'Pause' : 'Play',
            togglePlay
          )}

          {/* Volume Controls */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              width: isTablet ? 80 : 100,
              gap: 0.5
            }}>
              {renderControlButton(
                muted || volume === 0 ? <VolumeOff fontSize={isMobile ? 'small' : 'medium'} /> : <VolumeUp fontSize={isMobile ? 'small' : 'medium'} />,
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
          )}

          {/* Brightness Control */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            width: isMobile ? 80 : 120
          }}>
            {renderControlButton(
              brightness > 100 ? <Brightness7 fontSize={isMobile ? 'small' : 'medium'} /> : <Brightness4 fontSize={isMobile ? 'small' : 'medium'} />,
              'Adjust Brightness',
              toggleBrightnessSlider
            )}
            {showBrightnessSlider && (
              <Slider
                value={brightness}
                onChange={handleBrightnessChange}
                min={50}
                max={150}
                step={5}
                sx={{ color: 'white' }}
                aria-label="Brightness"
                size="small"
              />
            )}
          </Box>

          {/* Time Display */}
          <Typography 
            variant="body2" 
            sx={{ 
              ml: 'auto', 
              mr: 1,
              fontSize: isMobile ? '0.7rem' : '0.875rem',
              display: isMobile ? 'none' : 'block'
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>

          {/* Seek Controls */}
          {renderControlButton(
            <Replay10 fontSize={isMobile ? 'small' : 'medium'} />,
            'Rewind 10s',
            rewindLaugh,
            'inherit',
            { text: isMobile ? null : '10s' }
          )}

          {renderControlButton(
            <Forward10 fontSize={isMobile ? 'small' : 'medium'} />,
            'Forward 10s',
            fastForward,
            'inherit',
            { text: isMobile ? null : '10s' }
          )}

          {/* Fullscreen */}
          {renderControlButton(
            <Fullscreen fontSize={isMobile ? 'small' : 'medium'} />,
            fullscreen ? 'Exit Fullscreen' : 'Fullscreen',
            toggleFullscreen
          )}
        </Box>

        {/* Comedy Features Row - Hidden on mobile to save space */}
        {!isMobile && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-around',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            pt: isMobile ? 0.5 : 1,
          }}>
            <Button 
              onClick={captureMeme}
              disabled={!canCapture}
              startIcon={<Screenshot fontSize={isMobile ? 'small' : 'medium'} />}
              sx={{ 
                color: 'white', 
                '&:active': { animation: `${wiggle} 0.3s` },
                minWidth: 'auto',
                px: isMobile ? 0.5 : 1,
                fontSize: isMobile ? '0.7rem' : '0.875rem'
              }}
              size="small"
            >
              Meme
            </Button>

            <Button 
              onClick={toggleSlowMo}
              startIcon={<SlowMotionVideo fontSize={isMobile ? 'small' : 'medium'} />}
              sx={{ 
                color: slowMo ? '#FFD700' : 'white',
                '&:active': { animation: `${wiggle} 0.3s` },
                minWidth: 'auto',
                px: isMobile ? 0.5 : 1,
                fontSize: isMobile ? '0.7rem' : '0.875rem'
              }}
              size="small"
            >
              Slow Mo
            </Button>

            <Button 
              onClick={countJoke}
              startIcon={<EmojiEmotions fontSize={isMobile ? 'small' : 'medium'} />}
              sx={{ 
                color: 'white', 
                '&:active': { animation: `${wiggle} 0.3s` },
                minWidth: 'auto',
                px: isMobile ? 0.5 : 1,
                fontSize: isMobile ? '0.7rem' : '0.875rem'
              }}
              size="small"
            >
              Jokes: {jokeCount}
            </Button>
          </Box>
        )}
      </Box>

      {/* Mobile Time Display */}
      {isMobile && showControls && (
        <Box sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          bgcolor: 'rgba(0,0,0,0.5)',
          px: 1,
          py: 0.5,
          borderRadius: 1,
          zIndex: 2
        }}>
          <Typography variant="caption" sx={{ color: 'white', fontSize: '0.7rem' }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>
        </Box>
      )}

      {/* Mobile Play/Pause Center Button */}
      {isMobile && !showControls && (
        <Box 
          onClick={togglePlay}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:active': {
              opacity: 1
            }
          }}
        >
          {playing ? (
            <Pause sx={{ fontSize: '3rem', color: 'white' }} />
          ) : (
            <PlayArrow sx={{ fontSize: '3rem', color: 'white' }} />
          )}
        </Box>
      )}

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

export default VideoPlayer;