import './App.css';
import {  Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Header from './components/haeder';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SystemMenu from './components/manu';
import Home from './components/pages/home';
import UnderConstraction from './components/pages/underConstrationPage';
import DailyExpencess from './components/pages/dailyExpencess';
import OpenedFiles from './components/opendFiles/openedFiles';
import { RequestsFilesContext } from './components/context/requestsFilesContext';
import { useState } from "react"; 

/*---create theme to change main color to green to match logo*/
const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});

function App() {
  const [opendFilesList, setOpendFilesList] = useState({});
  return (
    <div className="App">
       {/*----theme provider apply custome theme in all system-----*/}
     <ThemeProvider theme={theme}>  
     {/*context provider contained opened files data and minimized list data*/}
     <RequestsFilesContext.Provider value={{ opendFilesList, setOpendFilesList}}>
  
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
        <Grid item xs={2} >
          <SystemMenu/>
        </Grid>
        <Grid item xs={10} style={{paddingLeft:'0px'}}>
        <Header/>{/*system header component */}
      <Routes>
          <Route path="/DailyExpencess" element={<DailyExpencess />} />
          <Route path="/UnderConstraction" element={<UnderConstraction />} />
          <Route path="*" element={<Home />} />

      </Routes>

        </Grid>
      </Grid>
      <OpenedFiles/>

      </Box>
      </RequestsFilesContext.Provider>

    </ThemeProvider>
    </div>
  );
}

export default App;
