import React, { useEffect, useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";
import { getAllMovies } from "../api-helpers/api-helpers.js";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.error(err)); // Fixed syntax here
  }, []);

  return (
    <AppBar sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          <MovieFilterIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={movies && movies.map((option) => option.title)} // Pass the array directly
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab LinkComponent={Link} to="/admin" label="Admin" />
            <Tab LinkComponent={Link} to="/auth" label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
