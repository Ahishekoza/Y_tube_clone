import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos,channelDetailPage ,direction}) => {

  return (
    <Stack direction={direction||"row"}  justifyContent={channelDetailPage ?"center":"start"} gap={2} flexWrap={"wrap"}>
      {videos.map((video) => {
        return (
          <Box>
            {video?.id?.videoId && <VideoCard video={video} />}
            {video?.id?.channelId && <ChannelCard channelDetails={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
