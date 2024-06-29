import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchForApi";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(
        `videos?part=snippet,statistics&id=${id}`
      );
      console.log(data);

      setVideoDetail(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box  flex={1} >
          <Box sx={{ width:'100%' , position:'sticky' , top:'86px' }}> 
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
