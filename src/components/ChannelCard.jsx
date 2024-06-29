import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const renderCardContent = (channelDetails, demoProfilePicture) => (
  <CardContent>
    <CardMedia
      image={
        channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture
      }
      alt={channelDetails?.snippet?.title}
      sx={{
        borderRadius: "50%",
        height: "180px",
        width: "180px",
        mb: 2,
        border: "1px solid #e3e3e3",
      }}
    />
    <Typography variant="h6" sx={{ color: "white" }}>
      {channelDetails?.snippet?.title}{" "}
      <CheckCircleIcon sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
    </Typography>
  </CardContent>
);

const ChannelCard = ({ channelDetails, marginTop, id }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      {id ? (
        renderCardContent(channelDetails, demoProfilePicture)
      ) : (
        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
          {renderCardContent(channelDetails, demoProfilePicture)}
        </Link>
      )}
    </Box>
  );
};

export default ChannelCard;
