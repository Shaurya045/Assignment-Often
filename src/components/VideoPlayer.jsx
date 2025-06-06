import React from "react";
import { Player } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";

function VideoPlayer() {
  return (
    <div className="w-full mt-6 sm:mt-8 md:mt-10">
      <Player
        component={RemotionVideo}
        durationInFrames={150}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        controls
        acknowledgeRemotionLicense
        style={{
          width: "100%",
          maxWidth: "100%",
          aspectRatio: "16/9",
          height: "auto"
        }}
      />
    </div>
  );
}

export default VideoPlayer;
