import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            color: "white",
            background: category.name === selectedCategory && "#FC1503",
          }}
        >
          <span
            style={{
              marginRight: "15px",
              color: category.name === selectedCategory ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
