import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const HomeScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="purple"
              gutterBottom
            >
              Students Library
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
    

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Button style={ {backgroundColor: 'purple', height: '56px'}} variant="contained" component={Link} to={"/students"}>
                List of Students
              </Button>
              <Button style={ {backgroundColor: 'purple', height: '56px'}} variant="contained" component={Link} to={"/books"}>
                List of Books
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default HomeScreen;
