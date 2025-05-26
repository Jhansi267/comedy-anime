import React, { useEffect, useRef } from "react";
import "./Loader.scss";

const Loader = ({ appName = "Comedy Anime OTT" }) => {
  const jokes = [
    "Loading laughs... almost there!",
    "Preparing your dose of comedy...",
    "Hold tight! The fun is coming!",
    "Bringing the anime madness to you...",
    "Fetching your smiles... please wait!",
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  const audioRef = useRef(null);
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay prevented:", error);
          });
        }
      }
    };
    const timer = setTimeout(() => {
      playAudio();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="loader-container w-100">
      <img src="/Avatars/Lol.gif" alt="Loading..." className="loader-gif" />
      <h1 className="app-name">{appName}</h1>
      <p className="loader-joke">{joke}</p>
      <audio
        ref={audioRef}
        src="/Avatars/jerrylaughingsound.mp3"
        loop
        autoPlay
      />
    </div>
  );
};
export default Loader;
