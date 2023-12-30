import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Header from './components/haeder';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SystemMenu from './components/manu';
/*---create theme to change main color to green to match logo*/
const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
  },
});
function App() {
  return (
    <div className="App">
       {/*----theme provider apply custome theme in all system-----*/}
     <ThemeProvider theme={theme}>    
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
        <Grid item xs={2}>
          <SystemMenu/>
        </Grid>
        <Grid item xs={10}>
        <Header/>{/*system header component */}
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
    </div>
  );
}

export default App;
