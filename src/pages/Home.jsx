// import React from 'react';
// import Navbar from '../components/Navbar';
// import { FaPlayCircle } from "react-icons/fa";
// import { FaCirclePlus } from "react-icons/fa6";

// const Home = () => {
//   return (
//     <>
//       <Navbar/>
//       <div className="container" style={{marginTop: '97px'}}>
//         <div className="row">
//           <div className="col">
//             <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{maxHeight: '450px'}}>
//               <div className="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//               </div>
//               <div className="carousel-inner" style={{height: '450px'}}>
//                 <div className="carousel-item active h-100 position-relative">
//                   <img 
//                     src="/assets/images/comdey1.png" 
//                     className="d-block w-100 h-100 object-fit-cover" 
//                     alt="First slide"
//                   />
//                   <div className="carousel-caption d-none d-md-block text-white" style={{bottom: 'auto', top: '50%', left: '5%', right: 'auto', textAlign: 'left'}}>
//                     <h5 style={{
//                       fontFamily: "'Bangers', cursive",
//                       fontSize: '3rem',
//                       textTransform: 'uppercase',
//                       letterSpacing: '2px',
//                       textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
//                       color: '#ffcc00',
//                       WebkitTextStroke: '1px black'
//                     }}>Season 1</h5>
//                     <div className="d-flex gap-3" style={{fontFamily: "'Permanent Marker', cursive"}}>
//                       <p style={{
//                         backgroundColor: 'rgba(255,0,0,0.7)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '5px',
//                         transform: 'rotate(-5deg)'
//                       }}>Episode 1</p>
//                       <p style={{
//                         backgroundColor: 'rgba(0,150,255,0.7)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '5px',
//                         transform: 'rotate(2deg)'
//                       }}>Comedy</p>
//                       <p style={{
//                         backgroundColor: 'rgba(0,255,0,0.7)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '5px',
//                         transform: 'rotate(-3deg)'
//                       }}>Action</p>
//                     </div>
                    
//                     <div 
//                       className="d-inline-flex gap-3 text-white align-items-center" 
//                       style={{
//                         border: '3px solid white',
//                         borderRadius: '20px', 
//                         padding: '0.5rem 1rem',
//                         backgroundColor: 'rgba(0,0,0,0.7)',
//                         margin: '1rem 0',
//                         fontFamily: "'Impact', sans-serif"
//                       }}
//                     >
//                       <button className='btn p-0 d-flex align-items-center p-1'>
//                         <FaPlayCircle className='me-2' size={30} style={{color: '#ffcc00'}}/>
//                         <span className='text-white' style={{
//                           fontFamily: "'Impact', sans-serif",
//                           fontSize: '1.2rem',
//                           textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
//                         }}>WATCH NOW</span>
//                       </button>
//                       <button className='btn p-0 d-flex align-items-center'>
//                         <FaCirclePlus className='me-2' size={30} style={{color: '#ffcc00'}}/>
//                         <span className='text-white' style={{
//                           fontFamily: "'Impact', sans-serif",
//                           fontSize: '1.2rem',
//                           textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
//                         }}>MY LIST</span>
//                       </button>
//                     </div>
//                     <div style={{
//                       width: '40%',
//                       fontFamily: "'Comic Neue', cursive",
//                       backgroundColor: 'rgba(0,0,0,0.7)',
//                       padding: '1rem',
//                       borderRadius: '10px',
//                       borderLeft: '5px solid #ffcc00'
//                     }}>
//                       <p style={{
//                         margin: 0,
//                         fontSize: '1.1rem',
//                         lineHeight: '1.4'
//                       }}>Lorem ipsum, pa laborum totam ipsum explicabo rem unde, dignissimos suscipit ea sint ut nesciunt beatae.</p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Other carousel items... */}
//               </div>
//               {/* Carousel controls... */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React from 'react';
// import Navbar from '../components/Navbar';
// import { FaPlayCircle} from "react-icons/fa";
// import { FaCirclePlus } from "react-icons/fa6";
// const Home = () => {
//   const carouselItems = [
//     {
//       id: 1,
//       image: "/assets/images/comdey1.png",
//       alt: "Season 1",
//       title: "Season 1",
//       episode: "Episode 1",
//       genres: ["Comedy", "Action"],
//     },
//     {
//       id: 2,
//       image: "/assets/images/comedy2.png",
//       alt: "Season 2",
//       title: "Season 2",
//       episode: "Episode 5",
//       genres: ["Adventure", "Fantasy"],
//     },
//     {
//       id: 3,
//       image: "/assets/images/comedy3.png",
//       alt: "Special Episodes",
//       title: "Special Episodes",
//       episode: "Bonus 1",
//       genres: ["Special", "Behind Scenes"],
//     }
//   ];

//   return (
//     <>
//       <Navbar/>
//       <div className="container" style={{marginTop: '97px'}}>
//         <div className="row">
//           <div className="col">
//             <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{maxHeight: '550px'}}>
//               {/* Indicators */}
//               <div className="carousel-indicators left-indicators" style={{
//                 bottom: '20px',
//                 left: '20px',
//                 right: 'auto',
//                 marginLeft: '0',
//                 justifyContent: 'flex-start'
//               }}>
//                 {carouselItems.slice(0, 2).map((_, index) => (
//                   <button 
//                     key={`left-${index}`}
//                     type="button" 
//                     data-bs-target="#carouselExampleCaptions" 
//                     data-bs-slide-to={index} 
//                     className={index === 0 ? "active" : ""}
//                     aria-label={`Slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
              
//               <div className="carousel-indicators right-indicators" style={{
//                 bottom: '20px',
//                 right: '20px',
//                 left: 'auto',
//                 marginRight: '0',
//                 justifyContent: 'flex-end'
//               }}>
//                 {carouselItems.slice(2).map((_, index) => (
//                   <button 
//                     key={`right-${index}`}
//                     type="button" 
//                     data-bs-target="#carouselExampleCaptions" 
//                     data-bs-slide-to={index + 2} 
//                     aria-label={`Slide ${index + 3}`}
//                   />
//                 ))}
//               </div>

//               {/* Carousel Items */}
//               <div className="carousel-inner" style={{height: '450px'}}>
//                 {carouselItems.map((item, index) => (
//                   <div 
//                     key={item.id}
//                     className={`carousel-item h-100 position-relative ${index === 0 ? "active" : ""}`}
//                   >
//                     <img 
//                       src={item.image} 
//                       className="d-block w-100 h-100 object-fit-cover" 
//                       alt={item.alt}
//                     />
//                     <div 
//                       className="carousel-caption d-none d-md-block text-white" 
//                       style={{
//                         bottom: 'auto', 
//                         top: '50%', 
//                         left: '5%', 
//                         right: 'auto', 
//                         textAlign: 'left'
//                       }}
//                     >
//                       <h5 style={{
//                         fontFamily: "'Bangers', cursive",
//                         fontSize: '3rem',
//                         textTransform: 'uppercase',
//                         letterSpacing: '2px',
//                         textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
//                         color: '#ffcc00',
//                         WebkitTextStroke: '1px black'
//                       }}>{item.title}</h5>
                      
//                       <div className="d-flex gap-3" style={{fontFamily: "'Permanent Marker', cursive"}}>
//                         <p style={{
//                           backgroundColor: 'rgba(255,0,0,0.7)',
//                           padding: '0.2rem 0.5rem',
//                           borderRadius: '5px',
//                           transform: 'rotate(-5deg)'
//                         }}>{item.episode}</p>
//                         {item.genres.map((genre, i) => {
//                           const colors = [
//                             'rgba(0,150,255,0.7)',
//                             'rgba(0,255,0,0.7)',
//                             'rgba(255,165,0,0.7)',
//                             'rgba(128,0,128,0.7)',
//                             'rgba(0,255,255,0.7)'
//                           ];
//                           return (
//                             <p 
//                               key={genre}
//                               style={{
//                                 backgroundColor: colors[i % colors.length],
//                                 padding: '0.2rem 0.5rem',
//                                 borderRadius: '5px',
//                                 transform: `rotate(${i % 2 === 0 ? '2deg' : '-3deg'})`
//                               }}
//                             >
//                               {genre}
//                             </p>
//                           );
//                         })}
//                       </div>
                      
//                       <div 
//                         className="d-inline-flex gap-3 text-white align-items-center" 
//                         style={{
//                           border: '3px solid white',
//                           borderRadius: '20px', 
//                           padding: '0.5rem 1rem',
//                           backgroundColor: 'rgba(0,0,0,0.7)',
//                           margin: '1rem 0',
//                           fontFamily: "'Impact', sans-serif"
//                         }}
//                       >
//                         <button className='btn p-0 d-flex align-items-center p-1'>
//                           <FaPlayCircle className='me-2' size={30} style={{color: '#ffcc00'}}/>
//                           <span className='text-white' style={{
//                             fontFamily: "'Impact', sans-serif",
//                             fontSize: '1.2rem',
//                             textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
//                           }}>WATCH NOW</span>
//                         </button>
//                         <button className='btn p-0 d-flex align-items-center'>
//                           <FaCirclePlus className='me-2' size={30} style={{color: '#ffcc00'}}/>
//                           <span className='text-white' style={{
//                             fontFamily: "'Impact', sans-serif",
//                             fontSize: '1.2rem',
//                             textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
//                           }}>MY LIST</span>
//                         </button>
//                       </div>
                      
//                       {/* <div style={{
//                         width: '40%',
//                         fontFamily: "'Comic Neue', cursive",
//                         backgroundColor: 'rgba(0,0,0,0.7)',
//                         padding: '1rem',
//                         borderRadius: '10px',
//                         borderLeft: '5px solid #ffcc00'
//                       }}>
//                         <p style={{
//                           margin: 0,
//                           fontSize: '1.1rem',
//                           lineHeight: '1.4'
//                         }}>{item.description}</p>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper, Button, IconButton, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Animation keyframes (SOP: "Exaggerated Shapes")
const crashIn = keyframes`
  0% { transform: translateX(-100%) rotate(-30deg); opacity: 0; }
  70% { transform: translateX(10%) rotate(10deg); opacity: 1; }
  100% { transform: translateX(0) rotate(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

// Styled Components (SOP: "Comic Visual Styling")
const ComicSlide = styled(Paper)({
  height: "400px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  border: "4px dashed #FFD700",
  background: "linear-gradient(45deg, #FF9A8B, #FF6B95)",
  boxShadow: "10px 10px 0px rgba(0,0,0,0.2)",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  // SOP: "Gag Showcases" content
  const comedySlides = [
    {
      id: 1,
      title: "Prank War Extravaganza!",
      description: "Watch as characters unleash ultimate pranks!",
   media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk4dG5sZ3R4N3R6dGxqZ2VlY2R5dWJ6eWZ4bmR5dGZ4Z3B5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBwdIuRJiAIqQgw/giphy.gif",      type: "video",
      emoji: "🤡",
      soundEffect: "rimshot.mp3",
    },
    {
      id: 2,
      title: "Dance-Off Disaster",
      description: "Epic fail dance battles guaranteed!",
      media: "https://example.com/dance-fail.gif", // Replace with actual URL
      type: "gif",
      emoji: "💃",
      soundEffect: "boing.mp3",
    },
    {
      id: 3,
      title: "Toilet Paper Samurai",
      description: "The most absurd hero returns!",
      media: "https://example.com/samurai.mp4", // Replace with actual URL
      type: "video",
      emoji: "🗡️",
      soundEffect: "whoopee.mp3",
    },
  ];

  // Auto-rotate every 5s (SOP: "Playful Timing")
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Restart videos when they become active
  useEffect(() => {
    if (videoRefs.current[activeIndex] && comedySlides[activeIndex].type === "video") {
      videoRefs.current[activeIndex].currentTime = 0;
      videoRefs.current[activeIndex].play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % comedySlides.length);
    playSound(comedySlides[activeIndex].soundEffect);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + comedySlides.length) % comedySlides.length);
    playSound(comedySlides[activeIndex].soundEffect);
  };

  // SOP: "SFX for Pop-ups"
  const playSound = (effect) => {
    // Implement with Howler.js or HTML5 Audio in production
    console.log(`Playing sound: ${effect}`);
  };

  return (
    <Box sx={{ position: "relative", maxWidth: "100%", mx: "auto", my: 4 }}>
      <ComicSlide
        sx={{
          animation: `${crashIn} 0.8s ease-out`,
        }}
      >
        {/* Media Player */}
        {comedySlides[activeIndex].type === "gif" ? (
          <img
            src={comedySlides[activeIndex].media}
            alt={comedySlides[activeIndex].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              imageRendering: "optimizeSpeed",
            }}
          />
        ) : (
          <video
            ref={el => videoRefs.current[activeIndex] = el}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={comedySlides[activeIndex].media} type="video/mp4" />
          </video>
        )}

        {/* Caption (SOP: "Comic Captions") */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            p: 3,
            color: "white",
            textAlign: "center",
            fontFamily: "'Comic Neue', cursive",
          }}
        >
          <Typography variant="h4" fontFamily="'Bangers', cursive" sx={{ fontSize: "2.2rem" }}>
            {comedySlides[activeIndex].title}{" "}
            <span style={{ animation: `${bounce} 1s infinite`, fontSize: "2.5rem" }}>
              {comedySlides[activeIndex].emoji}
            </span>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontSize: "1.1rem" }}>
            {comedySlides[activeIndex].description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#FF4081",
              fontFamily: "'Comic Neue', cursive",
              fontSize: "1rem",
              "&:hover": { 
                transform: "rotate(5deg)",
                bgcolor: "#FF1493",
              },
            }}
          >
            Watch Now!
          </Button>
        </Box>
      </ComicSlide>

      {/* Navigation Arrows (SOP: "Interactive Elements") */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          bgcolor: "rgba(255,255,255,0.7)",
          "&:hover": { 
            bgcolor: "rgba(255,215,0,0.9)",
            transform: "scale(1.2)",
          },
          width: 50,
          height: 50,
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          bgcolor: "rgba(255,255,255,0.7)",
          "&:hover": { 
            bgcolor: "rgba(255,215,0,0.9)",
            transform: "scale(1.2)",
          },
          width: 50,
          height: 50,
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 30 }} />
      </IconButton>

      {/* Indicators (SOP: "Progress Badges") */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        {comedySlides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              mx: 1,
              bgcolor: activeIndex === index ? "#FFD700" : "gray",
              cursor: "pointer",
              transform: activeIndex === index ? "scale(1.3)" : "scale(1)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;