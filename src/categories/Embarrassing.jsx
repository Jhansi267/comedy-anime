import React, { useRef, useState, useEffect } from "react";
import { FaStar, FaPlay, FaBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
  episodeCard: {
    position: 'relative',
    width: '100%',
    height: '450px',
    perspective: '1500px',
    cursor: 'pointer',
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff'
  },
  front: {
    zIndex: 2,
  },
  back: {
    backgroundColor: '#222',
    color: 'white',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  imageContainer: {
    height: '370px',
    overflow: 'hidden'
  },
  normalState: {
    padding: '10px 15px',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center'
  },
  hoverState: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  episodeDetails: {
    flexGrow: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical'
  },
  facepalmOverlay: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '3rem',
    opacity: 0.4,
    animation: 'facepalm-shake 1.2s ease-in-out infinite alternate',
    userSelect: 'none'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '10px 0',
    marginTop: 'auto'
  },
};

const Embarrassing = () => {
  const episodes = [
    {
      id: 1,
      title: "Office Chair Olympics",
      image: "/assets/images/comdey1.png",
      description: "Employees turn work chairs into racing machines",
      rating: 4.7,
      episodes: 3,
      season: 2,
      votes: 512,
      details: "What started as a simple office prank turned into a full-blown racing tournament during lunch breaks. Employees customized their chairs with makeshift engines and competed in hallway races."
    },
    {
      id: 2,
      title: "Keyboard Confetti",
      image: "/assets/images/comedy2.png",
      description: "Surprise party in every keystroke",
      rating: 4.3,
      episodes: 5,
      season: 1,
      votes: 421,
      details: "Someone replaced all the keycaps with confetti poppers. Every time employees typed, colorful paper explosions covered their desks. Productivity dropped but morale skyrocketed."
    },
    {
      id: 3,
      title: "The Great Coffee Swap",
      image: "/assets/images/comedy3.png",
      description: "Caffeine addicts get the ultimate surprise",
      rating: 4.9,
      episodes: 2,
      season: 3,
      votes: 687,
      details: "All the coffee in the office was secretly replaced with decaf for a week. The reactions ranged from confusion to existential crisis as employees questioned their life choices."
    },
    {
      id: 4,
      title: "Mouse Mayhem",
      image: "/assets/images/comedy4.png",
      description: "Computer mice develop a mind of their own",
      rating: 4.1,
      episodes: 4,
      season: 2,
      votes: 389,
      details: "Someone installed tiny motors in all the office mice, making them randomly move on their own. Employees thought their computers were haunted or they were working too hard."
    },
    {
      id: 5,
      title: "Desktop Inversion",
      image: "/assets/images/comedy5.png",
      description: "Screens flip upside down overnight",
      rating: 3.9,
      episodes: 6,
      season: 1,
      votes: 356,
      details: "Every computer monitor in the office was set to display upside down. Some employees tried to work like this for hours before realizing they could just rotate the display settings."
    },
    {
      id: 6,
      title: "The Fake Fire Drill",
      image: "/assets/images/comedy6.png",
      description: "Panic ensues when alarms sound unexpectedly",
      rating: 4.5,
      episodes: 3,
      season: 3,
      votes: 498,
      details: "Someone triggered a fake fire drill during the busiest work hour. The best part was watching executives in suits sprint down the emergency stairs clutching their laptops."
    },
    {
      id: 7,
      title: "Sticky Note Art Attack",
      image: "/assets/images/comedy7.png",
      description: "Office walls become colorful canvases",
      rating: 4.8,
      episodes: 5,
      season: 2,
      votes: 543,
      details: "Overnight, someone covered every blank wall space with intricate sticky note mosaics depicting famous artworks and office inside jokes."
    },
    {
      id: 8,
      title: "The Phantom Typist",
      image: "/assets/images/comedy8.png",
      description: "Mysterious messages appear in documents",
      rating: 4.0,
      episodes: 4,
      season: 1,
      votes: 412,
      details: "Employees kept finding strange comments and edits in their documents from an unknown collaborator. The messages ranged from helpful suggestions to absurd jokes."
    },
    {
      id: 9,
      title: "Chair Swap Chaos",
      image: "/assets/images/comedy9.png",
      description: "Everyone's seating gets rearranged",
      rating: 4.2,
      episodes: 7,
      season: 3,
      votes: 467,
      details: "Someone stayed late and completely rearranged all the office furniture. The next morning, executives found themselves at interns' desks and vice versa."
    },
    {
      id: 10,
      title: "The Infinite Printer",
      image: "/assets/images/comedy10.png",
      description: "Print jobs never stop coming",
      rating: 4.6,
      episodes: 2,
      season: 2,
      votes: 521,
      details: "A clever hack made the office printer spit out endless copies of ridiculous memes. The IT department still hasn't figured out how it was done."
    }
  ];

  const audioRefs = useRef({});
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Add keyframes to the document head
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes facepalm-shake {
        0% {
          transform: rotate(0deg);
          opacity: 0.4;
        }
        50% {
          transform: rotate(15deg);
          opacity: 0.7;
        }
        100% {
          transform: rotate(-15deg);
          opacity: 0.4;
        }
      }
    `;
    document.head.appendChild(styleTag);
    
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const enableAudio = () => {
      setCanPlayAudio(true);
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
    
    if (!canPlayAudio) return;

    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
    <Navbar/>
    <div className="container py-4" style={{marginTop:'97px'}}>
        <h1 className="mb-4"> Embarrassing Movies</h1>
      <div className="row g-4">
        {episodes.map((episode) => {
          const isHovered = hoveredCard === episode.id;
          const frontTransform = isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)';
          const backTransform = isHovered ? 'rotateY(0deg)' : 'rotateY(180deg)';
          
          return (
            <div
              key={episode.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              onMouseEnter={() => handleMouseEnter(episode.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.episodeCard}>
                {/* Front Card */}
                <div style={{
                  ...styles.card,
                  ...styles.front,
                  transform: frontTransform,
                  zIndex: isHovered ? 1 : 2
                }}>
                  <div style={styles.imageContainer}>
                    <img
                      src={episode.image}
                      alt={episode.title}
                      style={{ height: "370px", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={styles.normalState}>
                    <p className="card-text text-secondary description">
                      {episode.description}
                    </p>
                  </div>
                </div>

                {/* Back Card */}
                <div style={{
                  ...styles.card,
                  ...styles.back,
                  transform: backTransform,
                  zIndex: isHovered ? 2 : 1
                }}>
                  <div style={styles.hoverState}>
                    <h6 className="text-white mb-2">{episode.title}</h6>
                    <div className="d-flex align-items-center mt-3">
                      <FaStar className="text-warning me-1" />
                      <span className="me-2">{episode.rating}</span>
                      <span>({episode.votes} votes)</span>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <p className="mb-0">Season: {episode.season}</p>
                      <p className="mb-0">Episode: {episode.episodes}</p>
                    </div>
                    <p style={styles.episodeDetails} className="small mt-3">
                      {episode.details}
                    </p>

                    <div style={styles.facepalmOverlay}>🤣</div>

                    <div style={styles.cardActions} className="d-flex me-auto">
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
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Embarrassing;