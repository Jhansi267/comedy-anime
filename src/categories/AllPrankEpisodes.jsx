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
const AllPrankEpisodes = () => {
  let nav = useNavigate();
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
      badgeText: "Trending",
      details:
        "In the sacred dojo, there are two kinds of people. Those who respect the art, and those who turn it into toilet paper origami. This episode follows the epic battle between a disciplined sensei and his rebellious student who transforms every training session into a slapstick comedy with strategically placed toilet paper traps. The climax features a showdown where the dojo's entire floor becomes a web of two-ply treachery.",
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
      badgeText: "Popular",
      details:
        "The school's main staircase became an impossible obstacle course when someone coated every step with banana peels. What starts as a simple gag turns into a school-wide spectacle as teachers, students, and even the principal attempt (and fail spectacularly) to navigate the now-hazardous steps. The janitor's final revenge with a supersized peel is legendary.",
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
      badgeText: "Funny",
      details:
        "What started as a simple desk prank turned into mass hysteria when hundreds of rubber spiders appeared overnight in every classroom. The episode's highlight shows the football team screaming like toddlers when spiders 'attack' during practice. The culprit? A quiet art student who rigged the ceiling tiles to rain spiders during finals week.",
    },
    {
      id: 4,
      title:
        "Whoopee Cushion Symphony Whoopee Cushion Symphony Whoopee Cushion Symphony",
      image: "/assets/images/comedy4.png",
      description: "An entire orchestra falls victim to pranks",
      rating: 4.0,
      episodes: 6,
      season: 1,
      votes: 378,
      badgeText: "Funny",
      details:
        "The annual music recital turned chaotic when every chair had a hidden surprise. As the orchestra performs a serious classical piece, the synchronized whoopee cushion chorus steals the show. The percussion section's increasingly creative attempts to cover the sounds (including cymbal crashes after every toot) makes this episode unforgettable.",
    },
    {
      id: 5,
      title:
        "Invisible Ink Debacle Invisible Ink Debacle Invisible Ink Debacle",
      image: "/assets/images/comedy5.png",
      description: "Important documents disappear mysteriously",
      rating: 3.7,
      episodes: 4,
      season: 2,
      votes: 312,
      badgeText: "New",
      details:
        "The teacher's lesson plans vanished only to reappear at the worst possible moments - mid-test answers appearing on students' shirts, the principal's secret memos materializing on hallway walls when heated by sunlight. The chemistry club's homemade ink formula leads to an escalating war of disappearing/reappearing messages throughout the school.",
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
      badgeText: "Fan Favorite",
      details:
        "Students found their lunches replaced with realistic-looking fake versions - rubber chicken drumsticks, wax apples, and plastic sushi so convincing even teachers were fooled. The lunch lady's gradual realization that her entire inventory has been swapped with props builds to an epic meltdown involving a spaghetti ladle and very real rage.",
    },
    {
      id: 7,
      title:
        "Glitter Bomb Explosion Glitter Bomb Explosion Glitter Bomb Explosion",
      image: "/assets/images/comedy7.png",
      description: "The entire school sparkles after prank",
      rating: 4.6,
      episodes: 3,
      season: 2,
      votes: 457,
      badgeText: "Trending",
      details:
        "Someone rigged the ventilation system to shower everyone with glitter during parent-teacher conferences. The slow-motion shots of horrified parents discovering they're now permanently festive, combined with the janitor's resigned sigh as he realizes his vacuum just spreads the glitter further, makes this episode iconic. Glitter is still being found in lockers years later.",
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
      badgeText: "New",
      details:
        "The class nearly revolted when they saw the impossible exam questions covering 'material never taught'. The teacher's poker face holds as students invent increasingly creative answers (including one about 'quantum meme theory'), until the reveal that it's all a stress-relief prank before real finals. The valedictorian's dramatic fainting spell steals the episode.",
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
      badgeText: "Popular",
      details:
        "Overnight, the entire school became a mosaic of handwritten messages. Every locker, window, and even the principal's car was covered in positive affirmations, inside jokes, and bizarre doodles. The mystery culprit turned out to be the chess club, whose intricate sticky-note mural in the gym (visible only from the balcony) broke the school's art installation record.",
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
      badgeText: "Fan Favorite",
      details:
        "What began as an April Fool's joke turned into genuine role reversal when students ran classes while teachers 'misbehaved' in the back rows. Highlights include the physics teacher loudly chewing gum while a 16-year-old struggles to explain quantum mechanics, and the principal being sent to detention for 'excessive hallway loitering'. The student-taught lunch period (featuring experimental 'dessert-first' policy) became legend.",
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
        <h1 className="mb-4"> Prank Movies</h1>
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
export default AllPrankEpisodes;
