import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

function Login() {
  const [userLogin, setLoginData] = useState({
    username: "",
    password: "",
  });
  function insertLoginData(e) {
    const { value, name } = e.target;
    setLoginData((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value,
        };
      }
    });
  }
  function submitLogin(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/signin", userLogin).then((response) => {
      if (response.status === 200) {
        window.location = "/dashboard";
      }
    });
  }

  return (
    <Grid
      container
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
      direction='column'
      alignItems='center'
      justifyContent='center'>
      <Grid item>
        <Typography variant='h3' color='primary'>
          Inventory App
        </Typography>
      </Grid>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyItems='center'
        sx={{ mt: 5 }}>
        <TextField
          sx={{ mb: 2 }}
          name='username'
          label='Username'
          type='text'
          onChange={insertLoginData}
          value={userLogin.username}
          required
        />
        <TextField
          sx={{ mb: 2 }}
          name='password'
          label='Password'
          type='password'
          onChange={insertLoginData}
          value={userLogin.password}
          required
        />
        <Button variant='contained' color='primary' onClick={submitLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
