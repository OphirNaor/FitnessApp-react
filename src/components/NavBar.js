import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { clsx } from 'clsx';

// filter: 'blur(5px)',
// transformOrigin: '50% 50%'

const useStyles = makeStyles()(theme => ({
    mainNavbar: {
        position: 'fixed',
        fontWeight: '550',
        padding: '1rem 1.5rem',
        width: '100%',
        zIndex: 1,
        opacity: 1,
        transition: 'all .3s',
        gap: 50
    },
    scrollNavbar: {
        position: 'fixed',
        fontWeight: '550',
        width: '100%',
        zIndex: 1,
        opacity: 1,
        gap: 50,
        background: 'linear-gradient(0deg, rgba(166, 169, 176, 1) 0%, rgba(73, 72, 72, 1) 100%)',
        transition: 'all .3s',
        padding: '0.5rem 1.5rem',
        boxShadow: '0 0 10px #0000001a'

    },
    navbarLink: {
        textDecoration: 'none',
        color: '#e74848',
        fontSize: 24,
        '&:hover': {
            color: '#e96e6e'
        }
    },
    logoText: {
        fontWeight: 700,
        fontSize: 28
    }
}))

const NavBar = () => {
    const { classes } = useStyles();
    const [scrollNavbar, setScrollNavbar] = useState(false);


    const changeBGWhenScroll = () => {
        if (window.scrollY >= 66) {
            setScrollNavbar(true)
        } else {
            setScrollNavbar(false)
        }
    }

    useEffect(() => {
        changeBGWhenScroll();
        window.addEventListener("scroll", changeBGWhenScroll);
    })

    return (
        <Stack direction='row' justifyContent='flex-start' alignItems='center' className={scrollNavbar ? classes.scrollNavbar : classes.mainNavbar}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography className={clsx(classes.navbarLink, classes.logoText)} fontWeight='600' fontSize='26px' color='#e74848'>
                    TrainWise
                </Typography>
            </Link>
            <Link to='/' className={classes.navbarLink}>
                Home
            </Link>
            <a href='#exercises' className={classes.navbarLink}>
                Exercise
            </a>
            <Link to='/workoutPlans' className={classes.navbarLink}>
                Workout Plans
            </Link>
        </Stack>
    )
}

export default NavBar