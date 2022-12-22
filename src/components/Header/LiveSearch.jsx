import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconSearch from "../../assets/headerComponent/icon-search";
const LiveSearch = () => {
  return (
    <>
 
        <TextField
          size="small"
          style={{ width:180, marginBottom:1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconSearch />
              </InputAdornment>
            ),
          }}
        />
  
    </>
  );
};
export default LiveSearch;
