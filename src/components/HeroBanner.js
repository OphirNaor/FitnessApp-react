import { Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import HeroBannerImage from '../assets/images/HeroBanner.jpg';

const useStyles = makeStyles()(theme => ({
    hero: {
        background: `url(${HeroBannerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        width: '100%',
        padding: '3rem 0',
        backgroundPosition: '50% 68%',
        height: 'clamp(20rem,55vw,40rem)',
        textAlign: 'center'
    },
    // videoPlayer: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0
    // }
}));

const HeroBanner = () => {
    const { classes } = useStyles();

    return (
        <Stack justifyContent='center' alignItems='center' className={classes.hero}>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '55px', xs: '40px' } }} mb='23px' mt='30px' color='#e74848'>
                Unleash Your Inner Athlete!
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4} color='#e74848'>
                check out the most effective exercises
            </Typography>
            {/* <Stack direction='row' justifyContent='center' className={classes.videoPlayer}>
                <video width="220" height="220" style={{ borderRadius: '50%', background: '#0C0D10' }}>
                    <source src={SpeakingAvatar} type="video/mp4" />
                </video>
            </Stack> */}
            <Stack>
                <a href="#exercises" style={{
                    marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#e74848', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#000000', borderRadius: '4px'
                }}>Explore Exercises</a>
            </Stack>
        </Stack >
    )
}

export default HeroBanner