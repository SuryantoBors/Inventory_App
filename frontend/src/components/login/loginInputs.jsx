import React from "react";
import { TextField } from "@mui/material"

function Inputs(props){
    return(
        <TextField sx={{mb:2}} name={props.name} label={props.name} type={props.type} mb={2} required/>
    );
}

export default Inputs;