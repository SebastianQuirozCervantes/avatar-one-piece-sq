import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Movies from "./app/pages/Movies";
import Characters from "./app/pages/Characters";
import NotFound from "./app/pages/NotFound";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import OnePieceLogo from "./assets/One-Piece-Logo.png"
import './App.css';

function App() {
  return (
    <Grid container>
      <AppBar position="static" style={{backgroundColor: '#C6BE24'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={OnePieceLogo} alt="One piece" style={{height: '7rem'}}/>
            <Box sx={{ flexGrow: 1 }}>
                <a href="/">
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Movies
                  </Button>
                </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/movie/:id/characters" element={<Characters />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
