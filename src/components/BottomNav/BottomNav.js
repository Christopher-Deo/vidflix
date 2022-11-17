import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import "./BottomNav.css";


export default function BottomNav() {
    const [value, setValue] = useState(0);
    const history = useNavigate()
    
    useEffect(() => {
        if (value === 0) history('/');
        else if (value === 1) history('/movies');
        else if (value === 2) history('/series');
        else if (value === 3) history('/search');
    }, [value, history]
    )

    return (
        <Box sx={{
            width: '100%',
            position: 'fixed',
            zIndex: 100,
        }}>
            
            <BottomNavigation
                className='bottom-nav'
                style={{ backgroundColor: '#2d313a' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                    
                    
                <BottomNavigationAction
                    style={{ color: 'whitesmoke' }}
                    label="Trending" icon={<WhatshotIcon />} />

                <BottomNavigationAction
                    style={{ color: 'whitesmoke' }}
                    label="Movies" icon={<MovieIcon />} />

                <BottomNavigationAction
                    style={{
                        color: 'whitesmoke'
                    }}
                    label="TV Series" icon={<TvIcon />} />

                <BottomNavigationAction
                    style={{ color: 'whitesmoke' }}
                    label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}

