import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider,createTheme, Button, Grid } from "@mui/material";
import axios from "axios";
// import {Grid,Typography } from "@mui/material";
//import { Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function Dashboard(){
    let [itemLists, setItemList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/item/getItemList").then((response)=>{
            if(response.status === 200){
                setItemList(response.data);
            }
        });
    },[]);

    //use mui default table
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
    
    //create table hard coded data using MUI DataTables
    // const itemLists = [
    //     {itemID : 1, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 2, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 3, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 4, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 5, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 6, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 7, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 8, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 9, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"},
    //     {itemID : 10, itemName : "Screw", itemQty : 12, timeCreated: "22.22.2022"}
    // ];
    const column = [
        {
            name : "_id",
            label : "_id",
            options : {
                display : false
            }
        },{
            name : "itemID",
            label : "ID",
            options : {
                filter : true,
                sort : false
            }
        },{
            name : "itemName",
            label : "Item Name",
            options : {
                filter : true,
                sort : false
            }
        },{
            name : "itemQty",
            label : "Item Qty",
            options : {
                filter : true,
                sort : false
            }
        },{
            name : "timeCreated",
            label : "Time Created",
            options : {
                filter : true,
                sort : false
            }
        },{
            name : "action",
            label : "Action",
            options : {
                filter : false,
                sort : false,
                customBodyRender: (value, tableMeta, updateValue)=>{
                    return (
                        <Grid>
                            <Button variant="contained" onClick={()=>{console.log(tableMeta.rowData[0])}} color="warning"> View Details</Button>
                        </Grid>
                      );
                }
            }
        }
    ];
    const options = {
        download : false,
        print : false,
        selectableRows: "none"
    };
    
    let theme = createTheme();

    return(
        <ThemeProvider theme={theme}>
            <MUIDataTable 
                title={"Item Lists"} 
                data={itemLists} 
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
    );
}

export default Dashboard;