import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }


  return (
    <Paper component={'form'} onSubmit={handleSubmit} sx={{
        borderRadius:20,
         border: '1px solid #e3e3e3',
         pl:2,
         boxShadow:'none',
         align: 'center',
         justifyContent: 'center',
         display:'flex',
    }}>
      <input placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="search-bar" />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
