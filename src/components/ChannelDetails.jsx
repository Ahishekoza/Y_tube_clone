import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/FetchForApi";
import Videos from "./Videos";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      console.log(data?.items[0]);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetails={channelDetail} marginTop="-93px" id={id}/>
      </Box>

      <Box p={2} >
        <Videos videos={videos} channelDetailPage={true} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
