import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeScreen from "./components/HomeScreen";
import StudentList from "./components/StudentList";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import StudentDetails from "./components/StudentDetails";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Submitted by: Aiman Sartaj
    </Typography>
  );
}

const theme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar style={ {backgroundColor: 'purple', height: '56px'}} position="relative">
          <Toolbar>
            <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          CQ Technologies Lead Test Assignment - Submitted By Aiman Sartaj
        </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="students" element={<StudentList />} />
            <Route path="books" element={<BooksList />} />
            <Route path="books/:id" element={<BookDetails />} />
            <Route path="students/:id" element={<StudentDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
  
    
    </ThemeProvider>
  );
};

export default App;
