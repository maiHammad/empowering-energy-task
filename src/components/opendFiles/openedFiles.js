import * as React from 'react';
import { useContext } from 'react';
import { RequestsFilesContext } from '../context/requestsFilesContext';
import { useState,useEffect } from "react"; 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Draggable from 'react-draggable';
import Divider from '@mui/material/Divider';
import Carousel from 'react-material-ui-carousel';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';

function OpenedFiles(){
    const {opendFilesList,setOpendFilesList}=useContext(RequestsFilesContext);
    const [minimizedRequests,setMinimizedRequests]=useState([]);
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    useEffect(() => {
        setOpen(opendFilesList.name?true:false)
      },[opendFilesList,minimizedRequests]);

      const handleClose = () => {
        setOpen(false);
        setOpendFilesList({});
      };
      const handleMaxWidthChange = (event) => {
        setMaxWidth(
          // @ts-expect-error autofill of arbitrary value is not handled.
          event.target.value,
        );
      };
      function openMenimizedFile(item){
        setOpendFilesList(item);
    
      }
      function removeMinimizedItem(e,item){
        e.stopPropagation();
        let itemsList=[...minimizedRequests];
        for(var i=0; i < itemsList.length; i++) {
            if(itemsList[i].name == item.name)
            {
                itemsList.splice(i,1);
            }
         }
         setMinimizedRequests(itemsList);
      }
      const shallowEqualityCheck=(obj1, obj2) =>{
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (const key of keys1) {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
        }
        return true;
      }
      const handleMinimizedClick=()=>{
        if(!minimizedRequests.some((item) => shallowEqualityCheck(item, opendFilesList))){
                    setMinimizedRequests([...minimizedRequests,opendFilesList])
        }
        setOpendFilesList({});
      }

    return(
      <>
      <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Dialog
      style={{width: 'fit-content',margin: '0 auto' }}
        hideBackdrop={true}
        disableEnforceFocus
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
      >
        <DialogTitle>{opendFilesList?opendFilesList.name:''}
        <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              float: 'right',
              alignItems:'center',
              gap:'10px'
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="sm">Small</MenuItem>
                <MenuItem value="md">Medium</MenuItem>
                <MenuItem value="lg">Large</MenuItem>
              </Select>
            </FormControl>
            <MinimizeIcon onClick={handleMinimizedClick} style={{cursor:'pointer'}} />
           <CloseIcon  style={{cursor:'pointer'}} onClick={handleClose}/>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent style={{height:"65vh"}}>
        {
            opendFilesList.files&&(           
                 opendFilesList.files[0]?.length>1?
                 <Carousel autoPlay={false}>
                 {
                     opendFilesList.files[0].map( (item, i) =>             
                     opendFilesList.filesType=="image"?<img  key={i}
                        style={{width:'100%',height:'63vh'}}
                        src={`${process.env.PUBLIC_URL+item}`}
                         alt={opendFilesList.name}
                        loading="lazy"
                      />:<iframe style={{width:"100%",height:"100%"}} key={i} src={`${process.env.PUBLIC_URL+item}`}></iframe> )
                 }
                  </Carousel>  
                :              
                opendFilesList.filesType=="image"?<img 
                  style={{width:'100%'}}
                src={`${process.env.PUBLIC_URL+opendFilesList.files[0][0]}`}
                alt={opendFilesList.name}
                loading="lazy"
              />:<iframe style={{width:"100%",height:"100%"}} src={`${process.env.PUBLIC_URL+opendFilesList.files[0][0]}`}></iframe>)

            
        }

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </Draggable>
      {minimizedRequests[0]&&(
        <div style={{position:'fixed'
                    ,bottom:'0px',
                    width:'100%',
                    backgroundColor:'#fff',
                    height:'50px',
                    zIndex:'10000',
                    boxShadow:'1px -2px 8px rgb(197 197 197)',
                    padding:'7px',
                    textAlign:'left'
                    }}>
            {minimizedRequests.map((item, i) =>
               
                <Button  style={{marginLeft:'10px'}}  key={i} onClick={()=>setOpendFilesList(item)} variant="outlined">
                    {item.name}
                    <CloseIcon  style={{cursor:'pointer',marginLeft:'10px'}} onClick={(e)=>removeMinimizedItem(e,item)}/>

                    </Button>
                
            )}
        </div>
      )}
      </>
  );
}
export default OpenedFiles;