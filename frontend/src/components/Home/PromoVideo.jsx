import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";

import advideo from "../../assets/video/digital.mp4";
import img1 from "../../assets/imgs/pages/img-32.png";

// import "./style.css";

function PromoVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState();
  const [duration, setDuration] = useState([0, 0]);
  const [durationSec, setDurationSec] = useState();

  const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };

  useEffect(() => {
    const { min, sec } = sec2Min(videoRef.current.duration);
    setDurationSec(videoRef.current.duration);
    setDuration([min, sec]);

    // console.log(videoRef.current.duration);
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTimeSec(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
      videoRef.current.startTime = 3.35;
    }
  });

  return (
    <section className="w-full h-[85vh] bg-black pb-12 relative z-20">
      <div className="playerContainer h-full w-full relative">
        <video
          className="videoPlayer object-cover w-full rounded-[5rem] px-2 h-full border-red-600"
          // poster={img1}
          ref={videoRef}
          autoPlay
          loop
          muted
        >
          <source src={advideo} type="video/mp4" />
        </video>
        <div className="controlsContainer flex absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="controls flex">
            {isPlaying ? (
              <button
                className="controlButton bg-cyan-50/95 rounded-full"
                onClick={handlePlay}
              >
                <IconContext.Provider
                  className="opacity-35"
                  value={{ color: "white", size: "12em", opacity: 0.5 }}
                >
                  <BiPause />
                </IconContext.Provider>
              </button>
            ) : (
              <button
                className="controlButton bg-slate-50/15 flex items-center justify-center rounded-full"
                onClick={handlePlay}
              >
                <IconContext.Provider value={{ color: "white", size: "12em" }}>
                  <BiPlay />
                </IconContext.Provider>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoVideo;
