'use client'
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoPlayer = ({ url }) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  if (hasWindow) {
    return (
      <div className="relative [&>div>video]:object-cover h-full w-full" >
        <ReactPlayer
          url={url}
          playing={isPlaying}
          loop={true}
          muted={isMute}
          playsinline={true}
          width="100%"
          height="100%"
          autoPlay={true}
        />
        <div className="absolute z-10 right-8 bottom-8">
          <button
            className="border border-primary bg-white hover:bg-[#D8EDF5] transition-all duration-300 ease-linear p-1 md:p-2 rounded-full mr-2"
            onClick={() => setIsMute(!isMute)}
          >
            {isMute ? (
              
              <div className="flex items-center gap-2 px-2 text-primary">
                <p className="bg-primary p-2 rounded-full">
                  <FaVolumeXmark className="text-white text-3xs md:text-sm" />
                </p>
                <p className="text-3xs md:text-base">Unmute</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-2 text-primary">
                <p className="bg-primary p-2 rounded-full">
                  <FaVolumeHigh className="text-white  text-3xs md:text-sm" />
                </p>
                <p className="text-3xs md:text-base">Mute</p>
              </div>
            )}
          </button>

          <button
            className="border border-primary bg-white hover:bg-[#D8EDF5] transition-all duration-300 ease-linear  p-1 md:p-2 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <div className="flex items-center gap-2 px-2 text-primary">
                <p className="bg-primary p-2 rounded-full">
                  <FaPause className="text-white  text-3xs md:text-sm" />
                </p>
                <p className="text-3xs md:text-base">Pause</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-2 text-primary">
                <p className="bg-primary p-2 rounded-full">
                  <FaPlay className="text-white  text-3xs md:text-sm" />
                </p>
                <p className="text-3xs md:text-base">Play</p>
              </div>
            )}
          </button>
        </div>
      </div >
    );
  } else {
    return null;
  }

};
export default VideoPlayer;
