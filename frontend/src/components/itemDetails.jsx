import React, { useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function Product() {
  const reqItemID = useParams().itemID;
  const path = useLocation().pathname.replace(reqItemID, "");
  let disabledValue;

  if (path === "/editProduct/") {
    disabledValue = false;
  } else {
    disabledValue = true;
  }

  const [viewItem, editItemValue] = useState({
    itemID: "",
    itemName: "",
    itemQty: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/item/getItemDetails/${reqItemID}`)
      .then((response) => {
        if (response.status === 200) {
          editItemValue(response.data);
        }
      });
  }, []);

  function editItem(e) {
    const { value, name } = e.target;
    editItemValue((prevValue) => {
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

  function saveChanges(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/item/editItemDetails/${reqItemID}`, viewItem)
      .then((response) => {
        if (response.status === 200) {
          window.location = "/dashboard";
        }
      });
  }

  return (
    <Grid>
      <Typography variant='h4' color='primary' sx={{ margin: 2 }}>
        Item Details
      </Typography>
      <Grid container alignItems='center' justifyItems='center'>
        <TextField
          sx={{ mr: 2 }}
          onChange={editItem}
          name='itemID'
          label='Item ID'
          type='text'
          value={viewItem.itemID}
          disabled={disabledValue}
          required
        />
        <TextField
          sx={{ mr: 2 }}
          onChange={editItem}
          name='itemName'
          label='Item Name'
          type='text'
          value={viewItem.itemName}
          disabled={disabledValue}
          required
        />
        <TextField
          onChange={editItem}
          name='itemQty'
          label='Item Quantity'
          type='number'
          value={viewItem.itemQty}
          disabled={disabledValue}
          required
        />
      </Grid>
      {!disabledValue ? (
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          onClick={saveChanges}
          color='primary'>
          Save Changes
        </Button>
      ) : (
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          onClick={() => {
            window.location = `/editProduct/${reqItemID}`;
          }}
          color='primary'>
          Edit Item
        </Button>
      )}
    </Grid>
  );
}

export default Product;
