import * as React from 'react';
import { useContext } from 'react';
import { RequestsFilesContext } from '../context/requestsFilesContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import requests from '../../data/requests.json';
import SourceIcon from '@mui/icons-material/Source';
import FolderOffIcon from '@mui/icons-material/FolderOff';

let rows = requests;//rows list to display inside grid
function DailyExpencess(){
    const {setOpendFilesList}=useContext(RequestsFilesContext);

   const setOpenedFiles=(obj)=>{
        setOpendFilesList(obj);
    }
    return(
        <>
     <Box sx={{ width: '100%',padding:'10px'}}>
       <Typography variant="h4" align={'left'} gutterBottom>
        Daily Expencess
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Comment</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Files(s)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.itemDesc}
                </TableCell>
                <TableCell align="right">{row.comment}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                    {row.files.length>0?<SourceIcon onClick={() => setOpenedFiles({name:row.itemDesc,files:row.files,filesType:row.filesType})} sx={{color:"green"}}/>:<FolderOffIcon sx={{color:"red"}}/>}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      </Box>
        </>

         );
}
export default DailyExpencess;