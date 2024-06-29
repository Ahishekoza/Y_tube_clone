import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchForApi";
import { Box } from "@mui/material";
import Videos from "./Videos";

const SearchDetail = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      await fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
        setVideos(data.items);
      });
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <Box minHeight={'95vh'}>
      <Box p={2}>
        <Videos videos={videos} channelDetailPage={true} />
      </Box>
    </Box>
  );
};

export default SearchDetail;
