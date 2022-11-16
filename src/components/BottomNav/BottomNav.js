
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import "./BottomNav.css";


export default function bottomNav(){
    // const [value, setValue] = React.useState(0);
   
    return (
        <Box sx={{
            backgroundColor: '#32d313a',
            color: '#fff',
            width: '90%',
            position: 'fixed',
            zIndex: 100,
            
        }}>
            <BottomNavigation
                className='bottom-nav'
                showLabels
                // value={value}
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    style={{color: 'black'}}
                    label="Trending" icon={<WhatshotIcon />} />
                
                <BottomNavigationAction
                    style={{ color: 'black' }}
                    label="Movies" icon={<MovieIcon />} />
                
                <BottomNavigationAction
                    style={{ color: 'black' }}
                    label="TV Series" icon={<TvIcon />} />
                
                <BottomNavigationAction
                    style={{ color: 'black' }}
                    label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}

