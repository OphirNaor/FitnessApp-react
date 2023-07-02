import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
// import HeroBannerImage from '../assets/images/banner.jpg';
import HeroBannerImage from '../assets/images/HeroBanner.jpg';

const HeroBanner = () => {
    return (
        <Stack alignItems='center' className='hero'>
            <Typography color='#F1C796' fontWeight='600' fontSize='26px' className='hero-text'>
                Fitness Club
            </Typography>
            <Typography color='#F1C796' fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px' className='hero-text'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4} className='hero-text'>
                check out the most effective exercises
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#F1C796', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#000000', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            {/* <Typography fontWeight={600} color='#6592FD' sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}
                fontSize='200px'>
                Exercises
            </Typography> */}
            {/* < img src={HeroBannerImage} alt='banner' className='hero-banner-img' /> */}
        </Stack >
    )
}

export default HeroBanner