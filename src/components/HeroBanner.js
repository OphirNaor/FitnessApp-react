import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px'>
            <Typography color='#6592FD' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                check out the most effective exercises
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#6592FD', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color='#6592FD' sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}
                fontSize='200px'>
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

        </Box>
    )
}

export default HeroBanner