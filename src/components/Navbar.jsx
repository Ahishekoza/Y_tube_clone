import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      p={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
