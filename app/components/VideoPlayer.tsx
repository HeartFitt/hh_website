import React from "react";
import Button from "~/hkit/Button";
import { PlayIcon } from "@phosphor-icons/react";

const VideoPlayer = () => {
  return (
    <video className="h-full w-full rounded-lg" poster="./hh_b_video-cover.png" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;