import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button, Typography, Box, keyframes } from '@mui/material';
import { PlayArrow, BookmarkAdd } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import PrankEpisodesScroll from '../scroll/PrankEpisodesScroll';
import { FaChevronRight } from "react-icons/fa";
import EmbarrassingConfessions from '../scroll/EmbarrassingConfessions';
import SupernaturalShenanigans from '../scroll/SupernaturalShenanigans';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './EmojiBackground.scss';
const comicFonts = {
  title: "'Bangers', cursive",
  tag: "'Permanent Marker', cursive",
  body: "'Comic Neue', cursive"
};
const crashThrough = keyframes`
  0% { transform: translateX(-100%) rotate(-30deg) scale(1.5); opacity: 0; }
  70% { transform: translateX(10%) rotate(10deg) scale(1.1); opacity: 1; }
  100% { transform: translateX(0) rotate(0) scale(1); }
`;
const doorSlam = keyframes`
  0% { transform: perspective(1000px) rotateY(-90deg); opacity: 0; }
  70% { transform: perspective(1000px) rotateY(20deg); }
  100% { transform: perspective(1000px) rotateY(0); opacity: 1; }
`;
const sweatDropBounce = keyframes`
  0% { transform: translateY(-100px) scale(0.5); opacity: 0; }
  60% { transform: translateY(20px) scale(1.2); }
  80% { transform: translateY(-10px) scale(0.9); }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;
const Home = () => {
  let nav = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const comedyShows = [
    {
      id: 1,
      title: "Anime Baka Moments",
      description: "Hilarious 'baka' reactions from top anime series!",
      media: "/assets/videos/anime-baka.mp4",
      type: "video",
      tag: "Joke of the Day",
      fallbackImage: "/assets/images/anime-baka-poster.jpg",
      animation: crashThrough,
      transformOrigin: 'center center',
      effect: 'crash'
    },
    {
      id: 2,
      title: "The Office Pranks",
      description: "Jim's best pranks on Dwight - guaranteed laughs!",
      media: "/assets/videos/prank-om-nom.mp4",
      type: "video",
      tag: "Prank War",
      animation: doorSlam,
      transformOrigin: 'left center',
      effect: 'door'
    },
    {
      id: 3,
      title: "Friends Fails",
      description: "Joey's food obsessions gone wrong!",
      media: "/assets/videos/friends.mp4",
      type: "video",
      tag: "Fan Favorite",
      animation: crashThrough,
      transformOrigin: 'center center',
      effect: 'crash'
    }
  ];

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
      item.style.animation = 'none';
      void item.offsetWidth;
    });

    setTimeout(() => {
      const activeItem = items[selectedIndex];
      if (activeItem) {
        activeItem.style.animation = `${comedyShows[selectedIndex].animation} 0.8s ease-out`;
        activeItem.style.transformOrigin = comedyShows[selectedIndex].transformOrigin;
      }
    }, 50);
  };

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          fontFamily: comicFonts.body,
          marginTop: '97px'
        }}>
        <div className="emoji-background">
          {[
            { emoji: '😂', size: '5rem' },
            { emoji: '🤣', size: '3rem' },
            { emoji: '😹', size: '1.8rem' },
            { emoji: '😆', size: '2.5rem' },
            { emoji: '🙃', size: '3.2rem' },
            { emoji: '😜', size: '2.2rem' },
            { emoji: '😝', size: '1.5rem' },
            { emoji: '🎭', size: '2.8rem' },
          ].map((item, index) => (
            <span
              key={`emoji-${index}`}
              className={`emoji emoji-${index}`}
              style={{ fontSize: item.size }}
            >
              {item.emoji}
            </span>
          ))}

          {[
            '/Avatars/Banana.png',
            '/Avatars/confetti.png',
            '/Avatars/speechbubles.png',
          ].map((src, index) => (
            <img
              key={`img-${index}`}
              src={src}
              alt={`bg-${index}`}
              className={`floating-img floating-img-${index}`}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSlide}
                indicators={true}
                interval={3000}
                nextIcon={<span className="carousel-control-next-icon" />}
                prevIcon={<span className="carousel-control-prev-icon" />}
              >
                {comedyShows.map((show, index) => (
                  <Carousel.Item
                    key={show.id}
                    className={index === activeIndex ? 'active' : ''}
                    style={{
                      animation: `${show.animation} 0.8s ease-out`,
                      transformOrigin: show.transformOrigin
                    }}
                  >
                    <div style={{
                      height: '70vh',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {show.type === 'video' ? (
                        <video
                          autoPlay loop muted playsInline
                          poster={show.fallbackImage}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: show.effect === 'door' ? 'perspective(1000px)' : 'none'
                          }}
                        >
                          <source src={show.media} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={show.media}
                          alt={show.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}

                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
                      }}>
                        <Box sx={{
                          position: 'absolute',
                          bottom: '20%',
                          left: { xs: '5%', md: '10%' },
                          maxWidth: { xs: '90%', md: '600px' },
                          color: 'white'
                        }}>
                          {show.tag && (
                            <Typography
                              variant="overline"
                              sx={{
                                fontFamily: comicFonts.tag,
                                display: 'inline-block',
                                backgroundColor: '#FF4081',
                                px: 2,
                                py: 0.5,
                                borderRadius: '16px',
                                mb: 1,
                                fontSize: { xs: '0.7rem', md: '0.8rem' }
                              }}
                            >
                              {show.tag}
                            </Typography>
                          )}

                          <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                              fontFamily: comicFonts.title,
                              fontWeight: 'bold',
                              mb: 2,
                              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                              letterSpacing: '1px'
                            }}
                          >
                            {show.title}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: comicFonts.body,
                              mb: 3,
                              fontSize: { xs: '0.9rem', md: '1.2rem' }
                            }}
                          >
                            {show.description}
                          </Typography>

                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                              variant="contained"
                              startIcon={<PlayArrow />}
                              onClick={() => nav('/WatchEpisode')}
                              sx={{
                                fontFamily: comicFonts.body,
                                borderRadius: '50px',
                                px: 3,
                                py: 1,
                                fontWeight: 'bold',
                                background: 'linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)'
                              }}
                            >
                              Watch Now
                            </Button>
                            <Button
                              variant="contained"
                              startIcon={<BookmarkAdd />}
                              onClick={() => nav('/Wishlist')}
                              sx={{
                                fontFamily: comicFonts.body,
                                borderRadius: '50px',
                                px: 3,
                                py: 1,
                                fontWeight: 'bold',
                                borderWidth: '2px',
                                background: 'linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a)'
                              }}
                            >
                              Wishlist
                            </Button>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              {activeIndex === 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '15%',
                    zIndex: 10,
                    display: { xs: 'none', md: 'block' },
                    animation: `${sweatDropBounce} 1s ease-out`,
                    fontSize: '4rem'
                  }}
                >
                  💦
                </Box>
              )}
            </Box>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex">
            <h2>Prank Episodes</h2>
            <span className='ms-auto'><FaChevronRight style={{ cursor: 'pointer' }} onClick={() => nav('/Movies/AllPrankEpisodes')} /></span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PrankEpisodesScroll />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex">
            <h2>Embarrassing Confessions</h2>
            <span className='ms-auto'><FaChevronRight style={{ cursor: 'pointer' }} onClick={() => nav('/Movies/Embarrassing')} /></span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EmbarrassingConfessions />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex">
            <h2> Supernatural Shenanigans</h2>
            <span className='ms-auto'><FaChevronRight style={{ cursor: 'pointer' }} onClick={() => nav('/Movies/Supernatural')} /></span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SupernaturalShenanigans />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Home;