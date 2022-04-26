import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Code from '@mui/icons-material/Code';
import Links from './Links.jsx'
const theme = createTheme();
const Rooms = ({ rooms }) => {
    return (<>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{
                backgroundColor: "#2300a3",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/blizzard.png")`,
            }}>
                <Toolbar>
                    <Code sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" fontWeight="bold" fontFamily='Lobster, cursive' noWrap>
                        PeerCode
                    </Typography>
                    <Typography sx={{ ml: 'auto' }} variant="h6" color="inherit" fontWeight="bold" fontFamily='Lobster, cursive' noWrap style={{ cursor: "pointer" }}

                    >
                        Peer Code Editor
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                        minHeight: "80vh"
                    }}
                    style={{ backgroundColor: '#0c23f5', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}
                >
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        fontWeight="bold" fontFamily='Lobster, cursive'
                        gutterBottom
                    >
                        Your Rooms

                    </Typography>
                    <Links rooms={rooms} />
                </Box>

            </main>
            <Box sx={{ bgcolor: 'background.paper', p: 2, height: '4' }} component="footer" style={{
                backgroundColor: "darkblue",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/blizzard.png")`,
                color: "white"
            }}>
                <Typography variant="h6" align="center" gutterBottom>
                    © {new Date().getFullYear()} - Site created by Noob Coders
                </Typography>
            </Box>
        </ThemeProvider>

    </>
    )
}

export default Rooms