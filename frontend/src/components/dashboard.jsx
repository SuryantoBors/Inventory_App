import React from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider,createTheme } from "@mui/material";
// import {Grid,Typography } from "@mui/material";
//import { Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

// import axios from "axios";

function Dashboard(){

    // function dataTable(id, itemName, itemQty, timeCreated){
    //     return {id, itemName, itemQty, timeCreated}
    // }

    // const data = [
    //     dataTable("1", "screw", 1, 1),
    //     dataTable("2", "screw", 1, 1),
    //     dataTable("3", "screw", 1, 1),
    //     dataTable("4", "screw", 1, 1),
    //     dataTable("5", "screw", 1, 1),
    //     dataTable("6", "screw", 1, 1),
    //     dataTable("7", "screw", 1, 1),
    //     dataTable("8", "screw", 1, 1),
    //     dataTable("9", "screw", 1, 1),
    //     dataTable("10", "screw", 1, 1)
    // ]
    
    //create table header data
    const column = [
        {
            name : "id",
            label : "ID",
            options : {
                filter : true,
                sort : true
            }
        },{
            name : "itemName",
            label : "Item Name",
            options : {
                filter : true,
                sort : true
            }
        },{
            name : "itemQTY",
            label : "Item Qty",
            options : {
                filter : true,
                sort : true
            }
        },{
            name : "timeCreated",
            label : "Time Created",
            options : {
                filter : true,
                sort : true
            }
        }
    ];
    const options = {
        download : false,
        print : false,
        viewColumns : false
      };

    const data = [
        {id : 1, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 2, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 3, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 4, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 5, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 6, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 7, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 8, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 9, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"},
        {id : 10, itemName : "Screw", itemQTY : 12, timeCreated: "22.22.2022"}
    ];
    let theme = createTheme();


    return(
        <ThemeProvider theme={theme}>
            <MUIDataTable 
                title={"Item Lists"} 
                data={data} 
                columns={column} 
                options={options} 
            />
        </ThemeProvider>
        // <Grid container justifyContent="center" sx={{width: 1}}>
        //     <Typography variant="h4" color="primary" sx={{mt : 4, mb : 4}}>Hello World</Typography>
        //     <Grid container alignContent="center" justifyContent="center">
        //         <TableContainer component="Paper">
        //             <Table aria-label="simple table">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell align="center">Item ID</TableCell>
        //                         <TableCell align="center">Item Name</TableCell>
        //                         <TableCell align="center">Item Qty</TableCell>
        //                         <TableCell align="center">Time Created</TableCell>
        //                         <TableCell align="center">Action</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {data.map((itemData)=>(
        //                         <TableRow key={itemData.id}>
        //                             <TableCell align="center">{itemData.id}</TableCell>
        //                             <TableCell align="center">{itemData.itemName}</TableCell>
        //                             <TableCell align="center">{itemData.itemQty}</TableCell>
        //                             <TableCell align="center">{itemData.timeCreated}</TableCell>
        //                             <TableCell align="center">
        //                                 <Button variant="contained" color="warning"> View Details</Button>
        //                             </TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //         <MUIDataTable
        //             title={"Item Inventory"}
        //             data = {data}
        //             columns = {column}
        //             options={options}
        //         />
        //     </Grid>
        // </Grid>
    )
}

export default Dashboard;