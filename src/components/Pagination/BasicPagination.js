import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


// creating a custom dark theme for the pagination component
const darkTheme = createTheme({
    palette: {
        type: 'dark',   
    },
});

const BasicPagination = ({ setResultsPage, numberOfPages=20}) => {
    
    const handlePageChange = (resultsPage) => {
        setResultsPage(resultsPage);
        console.log(resultsPage);
        window.scroll(0, 0);
    }

    return (
        <div
        style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
                paddingBottom: 10,
        }}
        >
            <Stack spacing={2}>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numberOfPages}
                    color = 'primary' />
            </ThemeProvider>
            </Stack>
        </div>
    )
}
export default BasicPagination