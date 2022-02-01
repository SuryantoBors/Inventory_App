import React from "react";
import {Button, Grid, Typography} from "@mui/material"
import Inputs from "./loginInputs";


function Login(){
    return(
        <Grid container sx={{minHeight: "100vh", minWidth:"100vw"}} direction="column" fullWidth alignItems="center" justifyContent="center" >
            <Grid item>
                <Typography variant="h3" color="primary">Login Page</Typography>
            </Grid>
            <Grid container direction="column" alignItems="center" justifyItems="center" sx={{mt:5}}>
                <Inputs name="Email" type="email" />
                <Inputs name="password" type="password" />
                <Button variant="contained" color="primary">Login</Button>
            </Grid>
        </Grid>
    );
}

export default Login;