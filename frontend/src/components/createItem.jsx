import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

function Product() {
  const [newItemInput, setNewInput] = useState({
    itemID: "",
    itemName: "",
    itemQty: "",
  });

  function setInput(e) {
    const { value, name } = e.target;
    setNewInput((prevValue) => {
      if (name === "itemID") {
        return {
          itemID: value,
          itemName: prevValue.itemName,
          itemQty: prevValue.itemQty,
        };
      } else if (name === "itemName") {
        return {
          itemID: prevValue.itemID,
          itemName: value,
          itemQty: prevValue.itemQty,
        };
      } else if (name === "itemQty") {
        return {
          itemID: prevValue.itemID,
          itemName: prevValue.itemName,
          itemQty: value,
        };
      }
    });
  }

  function submitNewItem(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/item/createItem", newItemInput)
      .then((response) => {
        if (response.status === 200) {
          window.location = "/dashboard";
        }
      });
  }
  return (
    <Grid>
      <Typography variant='h4' color='primary' sx={{ margin: 2 }}>
        Add New Item
      </Typography>
      <Grid container alignItems='center' justifyItems='center'>
        <TextField
          sx={{ mr: 2 }}
          onChange={setInput}
          name='itemID'
          label='Item ID'
          type='text'
          value={newItemInput.itemID}
          required
        />
        <TextField
          sx={{ mr: 2 }}
          onChange={setInput}
          name='itemName'
          label='Item Name'
          type='text'
          value={newItemInput.itemName}
          required
        />
        <TextField
          onChange={setInput}
          name='itemQty'
          label='Item Quantity'
          type='number'
          value={newItemInput.itemQty}
          required
        />
      </Grid>
      <Button
        sx={{ mt: 2 }}
        variant='contained'
        onClick={submitNewItem}
        color='primary'>
        Add Item
      </Button>
    </Grid>
  );
}

export default Product;
