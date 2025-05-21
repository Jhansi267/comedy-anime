// import React from 'react';
// import './PrankEpisodes.scss';
// import { FaStar } from 'react-icons/fa';
// import { FaPlay } from "react-icons/fa";
// import { FaBookmark } from "react-icons/fa";
// import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// const PrankEpisodes = () => {
//  const episodes = [
//   {
//     id: 1,
//     title: "Toilet Paper Samurai Toilet Paper Samuai",
//     image: "/assets/images/comdey1.png",
//     description: "A legendary prank war begins in the dojo",
//     rating: 4.2,
//     episodes: 4,
//     season: 1,
//     votes: 356,
//     details: "In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami"
//   },
//   {
//     id: 2,
//     title: "Slippery Banana Stairs SlipperyStairs",
//     image: "/assets/images/comedy2.png",
//     description: "A hilarious hallway chase ensues after prank",
//     rating: 3.9,
//     episodes: 3,
//     season: 1,
//     votes: 289,
//     details: "The school's main staircase became an impossible obstacle course when someone coated it with banana peels The school's main staircase became an impossible obstacle course when someone coated it with banana peels"
//   },
//   {
//     id: 3,
//     title: "Fake Spider Invasion Fake Spider Invasion Fake Spider Invasion",
//     image: "/assets/images/comedy3.png",
//     description: "Classroom chaos erupts from plastic creatures",
//     rating: 4.5,
//     episodes: 5,
//     season: 2,
//     votes: 421,
//     details: "What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared"
//   },
//   {
//     id: 4,
//     title: "Whoopee Cushion Symphony Whoopee Cushion Symphony Whoopee Cushion Symphony",
//     image: "/assets/images/comedy4.png",
//     description: "An entire orchestra falls victim to pranks",
//     rating: 4.0,
//     episodes: 6,
//     season: 1,
//     votes: 378,
//     details: "The annual music recital turned chaotic when every chair had a hidden surprise The annual music recital turned chaotic when every chair had a hidden surprise"
//   },
//   {
//     id: 5,
//     title: "Invisible Ink Debacle Invisible Ink Debacle Invisible Ink Debacle",
//     image: "/assets/images/comedy5.png",
//     description: "Important documents disappear mysteriously",
//     rating: 3.7,
//     episodes: 4,
//     season: 2,
//     votes: 312,
//     details: "The teacher's lesson plans vanished only to reappear at the worst possible moments The teacher's lesson plans vanished only to reappear at the worst possible moments"
//   },
//   {
//     id: 6,
//     title: "Fake Food Frenzy Fake Food Frenzy Fake Food Frenzy",
//     image: "/assets/images/comedy6.png",
//     description: "Cafeteria chaos with plastic meals",
//     rating: 4.3,
//     episodes: 5,
//     season: 1,
//     votes: 402,
//     details: "Students found their lunches replaced with realistic-looking fake versions Students found their lunches replaced with realistic-looking fake versions"
//   },
//   {
//     id: 7,
//     title: "Glitter Bomb Explosion Glitter Bomb Explosion Glitter Bomb Explosion",
//     image: "/assets/images/comedy7.png",
//     description: "The entire school sparkles after prank",
//     rating: 4.6,
//     episodes: 3,
//     season: 2,
//     votes: 457,
//     details: "Someone rigged the ventilation system to shower everyone with glitter Someone rigged the ventilation system to shower everyone with glitter"
//   },
//   {
//     id: 8,
//     title: "Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem",
//     image: "/assets/images/comedy8.png",
//     description: "Students panic over nonexistent test",
//     rating: 3.8,
//     episodes: 4,
//     season: 1,
//     votes: 324,
//     details: "The class nearly revolted when they saw the impossible exam questions The class nearly revolted when they saw the impossible exam questions"
//   },
//   {
//     id: 9,
//     title: "Sticky Note Invasion Sticky Note Invasion Sticky Note Invasion",
//     image: "/assets/images/comedy9.png",
//     description: "Every surface covered in colorful notes",
//     rating: 4.1,
//     episodes: 6,
//     season: 2,
//     votes: 389,
//     details: "Overnight, the entire school became a mosaic of handwritten messages Overnight, the entire school became a mosaic of handwritten messages"
//   },
//   {
//     id: 10,
//     title: "Reverse Day Chaos Reverse Day Chaos Reverse Day Chaos",
//     image: "/assets/images/comedy10.png",
//     description: "Students and teachers switch roles",
//     rating: 4.4,
//     episodes: 5,
//     season: 1,
//     votes: 435,
//     details: "What began as an April Fool's joke turned into genuine role reversal What began as an April Fool's joke turned into genuine role reversal"
//   }
// ];
//   // return (
//   //   <div className="container py-4">
//   //     <div className="row g-4">
//   //       {episodes.map((episode) => (
//   //         <div key={episode.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//   //           <div className="episode-card card h-100 border-0 shadow-sm overflow-hidden">
//   //             <div className="image-container position-relative">
//   //               <img 
//   //                 src={episode.image} 
//   //                 className="card-img-top object-fit-cover" 
//   //                 alt={episode.title}
//   //                 style={{ height: '370px', width: '100%' }}
//   //               />
//   //                <div className="card-body">
//   //               <p className="card-text text-secondary description">{episode.description}</p>
//   //               </div>
//   //               <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 p-3 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-start">
//   //                 <h6 className="text-white mb-4">{episode.title}</h6>
//   //                 <div className="d-flex align-items-center mb-4">
//   //                   <FaStar className="text-warning me-1" />
//   //                   <span className="me-2 ">{episode.rating}</span>
//   //                   <span>({episode.votes} votes)</span>
//   //                 </div>
//   //                 <p>Season: {episode.season}</p>
//   //                 <p className=''>Episode: {episode.eposides}</p>
//   //                 <p className="mb-0 small">{episode.details}</p>
//   //                 <div className='mt-4' >
//   //                   <button className='btn'><FaPlay size={25} style={{color:"orange"}} /></button>
//   //                   <button className='btn bt-info'><FaBookmark  size={25}  style={{color:'orange'}}/></button>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="container py-4">
//       <div className="row g-4">
//         {episodes.map((episode) => (
//           <div key={episode.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//             <div className="episode-card card h-100 border-0 shadow-sm overflow-hidden">
//               <div className="image-container position-relative">
//                 <img 
//                   src={episode.image} 
//                   className="card-img-top object-fit-cover" 
//                   alt={episode.title}
//                   style={{ height: '370px', width: '100%' }}
//                 />
//               </div>
              
//               {/* Normal State Card Body */}
//               <div className="card-body normal-state">
//                 <p className="card-text text-secondary description">{episode.description}</p>
//               </div>
              
//               {/* Hover State Card Body */}
//               <div className="card-body hover-state position-absolute top-0 start-0 w-100 h-100 p-3 bg-dark bg-opacity-75 text-white d-flex flex-column justify-content-between">
//                 <div>
//                   <h6 className="text-white mb-2">{episode.title}</h6>
//                   <div className="d-flex align-items-center mt-3">
//                     <FaStar className="text-warning me-1" />
//                     <span className="me-2">{episode.rating}</span>
//                     <span>({episode.votes} votes)</span>
//                   </div>
//                   <div className=" mt-3">
//                     <p className="mb-0">Season: {episode.season}</p>
//                     <p className="mb-0">Episode: {episode.episodes}</p>
//                   </div>
//                   <p className="small mt-3">{episode.details}</p>
//                 </div>
                
//                 <div className="d-flex gap-4 ms-2">
//                   <button className="btn p-0">
//                     <FaPlay size={25} style={{ color: "orange" }} />
//                   </button>
//                   <button className="btn p-0">
//                     <FaBookmark size={25} style={{ color: "orange" }} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PrankEpisodes;


// import React, { useRef } from "react";
// import { FaStar, FaPlay, FaBookmark } from "react-icons/fa";
// import "./PrankEpisodes.scss";

// const PrankEpisodes = () => {
//   const episodes = [
//   {
//     id: 1,
//     title: "Toilet Paper Samurai Toilet Paper Samuai",
//     image: "/assets/images/comdey1.png",
//     description: "A legendary prank war begins in the dojo",
//     rating: 4.2,
//     episodes: 4,
//     season: 1,
//     votes: 356,
//     details: "In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami"
//   },
//   {
//     id: 2,
//     title: "Slippery Banana Stairs SlipperyStairs",
//     image: "/assets/images/comedy2.png",
//     description: "A hilarious hallway chase ensues after prank",
//     rating: 3.9,
//     episodes: 3,
//     season: 1,
//     votes: 289,
//     details: "The school's main staircase became an impossible obstacle course when someone coated it with banana peels The school's main staircase became an impossible obstacle course when someone coated it with banana peels"
//   },
//   {
//     id: 3,
//     title: "Fake Spider Invasion Fake Spider Invasion Fake Spider Invasion",
//     image: "/assets/images/comedy3.png",
//     description: "Classroom chaos erupts from plastic creatures",
//     rating: 4.5,
//     episodes: 5,
//     season: 2,
//     votes: 421,
//     details: "What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared"
//   },
//   {
//     id: 4,
//     title: "Whoopee Cushion Symphony Whoopee Cushion Symphony Whoopee Cushion Symphony",
//     image: "/assets/images/comedy4.png",
//     description: "An entire orchestra falls victim to pranks",
//     rating: 4.0,
//     episodes: 6,
//     season: 1,
//     votes: 378,
//     details: "The annual music recital turned chaotic when every chair had a hidden surprise The annual music recital turned chaotic when every chair had a hidden surprise"
//   },
//   {
//     id: 5,
//     title: "Invisible Ink Debacle Invisible Ink Debacle Invisible Ink Debacle",
//     image: "/assets/images/comedy5.png",
//     description: "Important documents disappear mysteriously",
//     rating: 3.7,
//     episodes: 4,
//     season: 2,
//     votes: 312,
//     details: "The teacher's lesson plans vanished only to reappear at the worst possible moments The teacher's lesson plans vanished only to reappear at the worst possible moments"
//   },
//   {
//     id: 6,
//     title: "Fake Food Frenzy Fake Food Frenzy Fake Food Frenzy",
//     image: "/assets/images/comedy6.png",
//     description: "Cafeteria chaos with plastic meals",
//     rating: 4.3,
//     episodes: 5,
//     season: 1,
//     votes: 402,
//     details: "Students found their lunches replaced with realistic-looking fake versions Students found their lunches replaced with realistic-looking fake versions"
//   },
//   {
//     id: 7,
//     title: "Glitter Bomb Explosion Glitter Bomb Explosion Glitter Bomb Explosion",
//     image: "/assets/images/comedy7.png",
//     description: "The entire school sparkles after prank",
//     rating: 4.6,
//     episodes: 3,
//     season: 2,
//     votes: 457,
//     details: "Someone rigged the ventilation system to shower everyone with glitter Someone rigged the ventilation system to shower everyone with glitter"
//   },
//   {
//     id: 8,
//     title: "Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem",
//     image: "/assets/images/comedy8.png",
//     description: "Students panic over nonexistent test",
//     rating: 3.8,
//     episodes: 4,
//     season: 1,
//     votes: 324,
//     details: "The class nearly revolted when they saw the impossible exam questions The class nearly revolted when they saw the impossible exam questions"
//   },
//   {
//     id: 9,
//     title: "Sticky Note Invasion Sticky Note Invasion Sticky Note Invasion",
//     image: "/assets/images/comedy9.png",
//     description: "Every surface covered in colorful notes",
//     rating: 4.1,
//     episodes: 6,
//     season: 2,
//     votes: 389,
//     details: "Overnight, the entire school became a mosaic of handwritten messages Overnight, the entire school became a mosaic of handwritten messages"
//   },
//   {
//     id: 10,
//     title: "Reverse Day Chaos Reverse Day Chaos Reverse Day Chaos",
//     image: "/assets/images/comedy10.png",
//     description: "Students and teachers switch roles",
//     rating: 4.4,
//     episodes: 5,
//     season: 1,
//     votes: 435,
//     details: "What began as an April Fool's joke turned into genuine role reversal What began as an April Fool's joke turned into genuine role reversal"
//   }
//   ];

//   // Store audio elements for each episode
//   const audioRefs = useRef({});

//   const handleMouseEnter = (id) => {
//     const audio = audioRefs.current[id];
//     if (audio) {
//       audio.currentTime = 0;
//       audio.play();
//     }
//   };

//   return (
//     <div className="container py-4">
//       <div className="row g-4">
//         {episodes.map((episode) => (
//           <div
//             key={episode.id}
//             className="col-12 col-sm-6 col-md-4 col-lg-3"
//             onMouseEnter={() => handleMouseEnter(episode.id)}
//           >
//             <div className="episode-card">
//               <div className="card front">
//                 <div className="image-container">
//                   <img
//                     src={episode.image}
//                     alt={episode.title}
//                     style={{ height: "370px", width: "100%", objectFit: "cover" }}
//                   />
//                 </div>
//                 <div className="card-body normal-state">
//                   <p className="card-text text-secondary description">
//                     {episode.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="card back">
//                 <div className="card-body hover-state">
//                   <h6 className="text-white mb-2">{episode.title}</h6>
//                   <div className="d-flex align-items-center mt-3">
//                     <FaStar className="text-warning me-1" />
//                     <span className="me-2">{episode.rating}</span>
//                     <span>({episode.votes} votes)</span>
//                   </div>
//                   <div className="mt-3">
//                     <p className="mb-0">Season: {episode.season}</p>
//                     <p className="mb-0">Episode: {episode.episodes}</p>
//                   </div>
//                   <p className="small mt-3">{episode.details}</p>

//                   <div className="facepalm-overlay">🤣</div>

//                   <div className="d-flex gap-4 ms-2 mt-3">
//                     <button className="btn p-0">
//                       <FaPlay size={25} style={{ color: "orange" }} />
//                     </button>
//                     <button className="btn p-0">
//                       <FaBookmark size={25} style={{ color: "orange" }} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Audio element for this card */}
//               <audio
//                 ref={(el) => (audioRefs.current[episode.id] = el)}
//                 src="/assets/sounds/crazy.mp3"
//                 preload="auto"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PrankEpisodes;

import React, { useRef, useState, useEffect } from "react";
import { FaStar, FaPlay, FaBookmark } from "react-icons/fa";
import "./PrankEpisodes.scss";

const PrankEpisodes = () => {
  const episodes = [
    {
      id: 1,
      title: "Toilet Paper Samurai Toilet Paper Samuai",
      image: "/assets/images/comdey1.png",
      description: "A legendary prank war begins in the dojo",
      rating: 4.2,
      episodes: 4,
      season: 1,
      votes: 356,
      details:
        "In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami",
    },
    {
      id: 2,
      title: "Slippery Banana Stairs SlipperyStairs",
      image: "/assets/images/comedy2.png",
      description: "A hilarious hallway chase ensues after prank",
      rating: 3.9,
      episodes: 3,
      season: 1,
      votes: 289,
      details:
        "The school's main staircase became an impossible obstacle course when someone coated it with banana peels The school's main staircase became an impossible obstacle course when someone coated it with banana peels",
    },
    {
      id: 3,
      title: "Fake Spider Invasion Fake Spider Invasion Fake Spider Invasion",
      image: "/assets/images/comedy3.png",
      description: "Classroom chaos erupts from plastic creatures",
      rating: 4.5,
      episodes: 5,
      season: 2,
      votes: 421,
      details:
        "What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared",
    },
    {
      id: 4,
      title: "Whoopee Cushion Symphony Whoopee Cushion Symphony Whoopee Cushion Symphony",
      image: "/assets/images/comedy4.png",
      description: "An entire orchestra falls victim to pranks",
      rating: 4.0,
      episodes: 6,
      season: 1,
      votes: 378,
      details:
        "The annual music recital turned chaotic when every chair had a hidden surprise The annual music recital turned chaotic when every chair had a hidden surprise",
    },
    {
      id: 5,
      title: "Invisible Ink Debacle Invisible Ink Debacle Invisible Ink Debacle",
      image: "/assets/images/comedy5.png",
      description: "Important documents disappear mysteriously",
      rating: 3.7,
      episodes: 4,
      season: 2,
      votes: 312,
      details:
        "The teacher's lesson plans vanished only to reappear at the worst possible moments The teacher's lesson plans vanished only to reappear at the worst possible moments",
    },
    {
      id: 6,
      title: "Fake Food Frenzy Fake Food Frenzy Fake Food Frenzy",
      image: "/assets/images/comedy6.png",
      description: "Cafeteria chaos with plastic meals",
      rating: 4.3,
      episodes: 5,
      season: 1,
      votes: 402,
      details:
        "Students found their lunches replaced with realistic-looking fake versions Students found their lunches replaced with realistic-looking fake versions",
    },
    {
      id: 7,
      title: "Glitter Bomb Explosion Glitter Bomb Explosion Glitter Bomb Explosion",
      image: "/assets/images/comedy7.png",
      description: "The entire school sparkles after prank",
      rating: 4.6,
      episodes: 3,
      season: 2,
      votes: 457,
      details:
        "Someone rigged the ventilation system to shower everyone with glitter Someone rigged the ventilation system to shower everyone with glitter",
    },
    {
      id: 8,
      title: "Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem Fake Pop Quiz Mayhem",
      image: "/assets/images/comedy8.png",
      description: "Students panic over nonexistent test",
      rating: 3.8,
      episodes: 4,
      season: 1,
      votes: 324,
      details:
        "The class nearly revolted when they saw the impossible exam questions The class nearly revolted when they saw the impossible exam questions",
    },
    {
      id: 9,
      title: "Sticky Note Invasion Sticky Note Invasion Sticky Note Invasion",
      image: "/assets/images/comedy9.png",
      description: "Every surface covered in colorful notes",
      rating: 4.1,
      episodes: 6,
      season: 2,
      votes: 389,
      details:
        "Overnight, the entire school became a mosaic of handwritten messages Overnight, the entire school became a mosaic of handwritten messages",
    },
    {
      id: 10,
      title: "Reverse Day Chaos Reverse Day Chaos Reverse Day Chaos",
      image: "/assets/images/comedy10.png",
      description: "Students and teachers switch roles",
      rating: 4.4,
      episodes: 5,
      season: 1,
      votes: 435,
      details:
        "What began as an April Fool's joke turned into genuine role reversal What began as an April Fool's joke turned into genuine role reversal",
    },
  ];

  // Store audio refs for each episode
  const audioRefs = useRef({});

  // State to track if user has interacted with the page (allow playing audio)
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    const enableAudio = () => {
      setCanPlayAudio(true);
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  const handleMouseEnter = (id) => {
    if (!canPlayAudio) return; // Don't play audio until user interacted

    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        // Optional: handle play error here
        console.log("Audio play error:", err);
      });
    }
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            onMouseEnter={() => handleMouseEnter(episode.id)}
          >
            <div className="episode-card">
              <div className="card front">
                <div className="image-container">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    style={{ height: "370px", width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body normal-state">
                  <p className="card-text text-secondary description">
                    {episode.description}
                  </p>
                </div>
              </div>

              <div className="card back">
                <div className="card-body hover-state">
                  <h6 className="text-white mb-2">{episode.title}</h6>
                  <div className="d-flex align-items-center mt-3">
                    <FaStar className="text-warning me-1" />
                    <span className="me-2">{episode.rating}</span>
                    <span>({episode.votes} votes)</span>
                  </div>
                  <div className="mt-3">
                    <p className="mb-0">Season: {episode.season}</p>
                    <p className="mb-0">Episode: {episode.episodes}</p>
                  </div>
                  <p className="small mt-3">{episode.details}</p>

                  <div className="facepalm-overlay">🤣</div>

                  <div className="d-flex gap-4 ms-2 mt-3">
                    <button className="btn p-0">
                      <FaPlay size={25} style={{ color: "orange" }} />
                    </button>
                    <button className="btn p-0">
                      <FaBookmark size={25} style={{ color: "orange" }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Audio element for this card */}
              <audio
                ref={(el) => (audioRefs.current[episode.id] = el)}
                src="/assets/sounds/crazy.mp3"
                preload="auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrankEpisodes;


