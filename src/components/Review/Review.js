import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function reviewValue(props) {
    let review = props.voteAverage;
    let stars = Math.ceil(review / 2);
    return stars;
}


export default function Review(prop) {
    const [value, setValue] = React.useState(0);
        
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend"></Typography>
            <Rating
                name="half-rating"
                value={reviewValue(prop)}
                precision={0.5}
                // max={10}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            {/* <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} /> */}
        </Box>
    );
}