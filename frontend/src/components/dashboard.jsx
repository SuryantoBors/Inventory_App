import React from "react";
import { Button, Grid,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

// import axios from "axios";

function Dashboard(){

    function dataTable(id, itemName, itemQty, timeCreated){
        return {id, itemName, itemQty, timeCreated}
    }

    const data = [
        dataTable("1", "screw", 1, 1),
        dataTable("2", "screw", 1, 1),
        dataTable("3", "screw", 1, 1),
        dataTable("4", "screw", 1, 1),
        dataTable("5", "screw", 1, 1),
        dataTable("6", "screw", 1, 1),
        dataTable("7", "screw", 1, 1),
        dataTable("8", "screw", 1, 1),
        dataTable("9", "screw", 1, 1),
        dataTable("10", "screw", 1, 1)
    ]
    return(
        <Grid container justifyContent="center" sx={{width: 1}}>
            <Typography variant="h4" color="primary" sx={{mt : 4, mb : 4}}>Hello World</Typography>
            <Grid container alignContent="center" justifyContent="center">
                <TableContainer component="Paper">
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Item ID</TableCell>
                                <TableCell align="center">Item Name</TableCell>
                                <TableCell align="center">Item Qty</TableCell>
                                <TableCell align="center">Time Created</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((itemData)=>(
                                <TableRow key={itemData.id}>
                                    <TableCell align="center">{itemData.id}</TableCell>
                                    <TableCell align="center">{itemData.itemName}</TableCell>
                                    <TableCell align="center">{itemData.itemQty}</TableCell>
                                    <TableCell align="center">{itemData.timeCreated}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="warning"> View Details</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Dashboard;