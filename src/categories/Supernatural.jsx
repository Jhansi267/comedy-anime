import React, { useRef, useState, useEffect } from "react";
import { FaStar, FaPlay, FaBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFire, FaRocket, FaHeart, FaRegLaughSquint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const badgeIcons = {
  Trending: <FaFire className="ms-1" />,
  Popular: <FaStar className="ms-1" />,
  New: <FaRocket className="ms-1" />,
  "Fan Favorite": <FaHeart className="ms-1" />,
  Funny: <FaRegLaughSquint className="ms-1" />,
};
const badgeColors = {
  Trending: "#FF1493",
  Popular: "#FFD700",
  Funny: "#4B0082",
  New: "#00BFFF",
  "Fan Favorite": "#FF4500",
};
const styles = {
  episodeCard: {
    position: "relative",
    width: "100%",
    height: "450px",
    perspective: "1500px",
    cursor: "pointer",
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    backfaceVisibility: "hidden",
    backgroundColor: "#fff",
  },
  front: {
    zIndex: 2,
  },
  back: {
    backgroundColor: "#222",
    color: "white",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  imageContainer: {
    height: "370px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#ff4081",
    color: "white",
    padding: "4px 10px",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "14px",
    zIndex: 10,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  normalState: {
    padding: "10px 15px",
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
  },
  hoverState: {
    position: "relative",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  episodeDetails: {
    flexGrow: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
  },
  facepalmOverlay: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "3rem",
    opacity: 0.4,
    animation: "facepalm-shake 1.2s ease-in-out infinite alternate",
    userSelect: "none",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "10px 0",
    marginTop: "auto",
  },
};
const Supernatural = () => {
  let nav = useNavigate();
  const episodes = [
    {
      id: 1,
      title: "The Flying Stapler Incident",
      image: "/assets/images/Supernatural1.png",
      description: "Office supplies gain unexpected mobility",
      rating: 4.5,
      episodes: 4,
      season: 1,
      votes: 387,
      details:
        "Someone rigged the staplers with tiny rubber bands, making them 'fly' across the desk when pressed. The accounting department still finds staples in unexpected places.",
      badgeText: "Trending",
    },
    {
      id: 2,
      title: "The Great Plant Swap",
      image: "/assets/images/Supernatural2.png",
      description: "Office greenery gets rearranged overnight",
      rating: 4.1,
      episodes: 3,
      season: 2,
      votes: 342,
      details:
        "Every office plant was moved to a different desk. The cactus ended up with HR, while the sensitive fern found itself in the break room microwave.",
      badgeText: "Popular",
    },
    {
      id: 3,
      title: "The Mystery Snack Bandit",
      image: "/assets/images/Supernatural3.png",
      description: "Lunch bags develop legs",
      rating: 4.7,
      episodes: 5,
      season: 1,
      votes: 456,
      details:
        "Someone kept moving people's lunches just slightly - enough to make everyone question their memory. The tuna sandwich that kept appearing in different fridges became legendary.",
      badgeText: "Fan Favorite",
    },
    {
      id: 4,
      title: "The Elevator Surprise",
      image: "/assets/images/Supernatural4.png",
      description: "Going up takes on new meaning",
      rating: 4.9,
      episodes: 2,
      season: 3,
      votes: 521,
      details:
        "The elevator was transformed into a disco party every time it reached the 3rd floor. Complete with lights, music, and a tiny disco ball that dropped from the ceiling.",
      badgeText: "Trending",
    },
    {
      id: 5,
      title: "The Fake Promotion",
      image: "/assets/images/Supernatural5.png",
      description: "Nameplates tell creative stories",
      rating: 4.3,
      episodes: 6,
      season: 2,
      votes: 398,
      details:
        "Everyone's titles got creative upgrades overnight. Interns became 'Supreme Overlords', managers turned into 'Chief Fun Officers', and the CEO's plate read 'Head Janitor'.",
      badgeText: "Funny",
    },
    {
      id: 6,
      title: "The Meeting Bingo Scandal",
      image: "/assets/images/Supernatural6.png",
      description: "Corporate jargon becomes a game",
      rating: 4.6,
      episodes: 4,
      season: 1,
      votes: 432,
      details:
        "Someone distributed bingo cards with common meeting phrases. The first person to shout 'Bingo!' during the budget presentation nearly got fired (but got promoted instead).",
      badgeText: "Popular",
    },
    {
      id: 7,
      title: "The Parking Space Lottery",
      image: "/assets/images/Supernatural7.png",
      description: "Reserved spots become musical chairs",
      rating: 4.2,
      episodes: 3,
      season: 3,
      votes: 367,
      details:
        "All the parking space name tags were randomly reassigned. The CEO ended up in spot #47 while the new intern parked in the VIP space for a glorious two hours.",
      badgeText: "New",
    },
    {
      id: 8,
      title: "The Haunted Restroom",
      image: "/assets/images/Supernatural8.png",
      description: "Motion sensors get creative",
      rating: 4.8,
      episodes: 5,
      season: 2,
      votes: 489,
      details:
        "The bathroom motion sensors were reprogrammed to play dramatic opera music whenever someone entered. The stall doors would 'applaud' when occupants left.",
      badgeText: "Fan Favorite",
    },
    {
      id: 9,
      title: "The Fake Company Merger",
      image: "/assets/images/Supernatural9.png",
      description: "Office names get creative",
      rating: 4.4,
      episodes: 7,
      season: 1,
      votes: 412,
      details:
        "All department names were changed to reflect a fake merger with a chocolate factory. Marketing became 'Wonka Vision', IT turned into 'Oompa Loompa Tech Support'.",
      badgeText: "Funny",
    },
    {
      id: 10,
      title: "The Reverse Birthday",
      image: "/assets/images/Supernatural10.png",
      description: "Everyone gets unexpected gifts",
      rating: 4.9,
      episodes: 2,
      season: 3,
      votes: 534,
      details:
        "Someone declared it 'Reverse Birthday' where instead of receiving gifts, everyone had to give random items to coworkers. The CFO still has that half-eaten granola bar from accounting.",
      badgeText: "Trending",
    },
  ];
  const audioRefs = useRef({});
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    const styleTag = document.createElement("style");
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
      <Navbar />
      <div className="container py-4" style={{ marginTop: "97px" }}>
        <h1 className="mb-4"> Supernatural Movies</h1>
        <div className="row g-4">
          {episodes.map((episode) => {
            const isHovered = hoveredCard === episode.id;
            const frontTransform = isHovered
              ? "rotateY(180deg)"
              : "rotateY(0deg)";
            const backTransform = isHovered
              ? "rotateY(0deg)"
              : "rotateY(180deg)";
            return (
              <div
                key={episode.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                onMouseEnter={() => handleMouseEnter(episode.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div style={styles.episodeCard}>
                  <div
                    style={{
                      ...styles.card,
                      ...styles.front,
                      transform: frontTransform,
                      zIndex: isHovered ? 1 : 2,
                    }}
                  >
                    <div style={styles.imageContainer}>
                      <div
                        style={{
                          ...styles.badge,
                          backgroundColor: badgeColors[episode.badgeText],
                        }}
                      >
                        {episode.badgeText}
                        {badgeIcons[episode.badgeText]}
                      </div>
                      <img
                        src={episode.image}
                        alt={episode.title}
                        style={{
                          height: "370px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={styles.normalState}>
                      <p className="card-text text-secondary description">
                        {episode.description}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      ...styles.card,
                      ...styles.back,
                      transform: backTransform,
                      zIndex: isHovered ? 2 : 1,
                    }}
                  >
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
                      <div
                        style={styles.cardActions}
                        className="d-flex me-auto"
                      >
                        <button
                          className="btn p-0"
                          onClick={() => nav("/WatchEpisode")}
                        >
                          <FaPlay size={25} style={{ color: "orange" }} />
                        </button>
                        <button
                          className="btn p-0"
                          onClick={() => nav("/Wishlist")}
                        >
                          <FaBookmark size={25} style={{ color: "orange" }} />
                        </button>
                      </div>
                    </div>
                  </div>
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
      <Footer />
    </>
  );
};
export default Supernatural;
