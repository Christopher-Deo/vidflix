import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Box sx={{
                    // bgcolor: '#39445a',
                    backgroundImage: 'url(./assets/images/movies background.jpg)',
                    height: '100vh',
                    width: '100%',
                }} />
            </Container>
        </>
    );
}