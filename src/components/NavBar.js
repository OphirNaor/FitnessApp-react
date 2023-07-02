import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/Logo.png';

const NavBar = () => {
    return (
        <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px' }, justifyContent: 'none', background: 'linear-gradient(2deg, rgba(255, 255, 0, 1) 0%, rgba(253, 254, 246, 1) 0%, rgba(237, 208, 128, 1) 100%)' }} px='20px'>
            <Link to='/'>
                <img src={Logo} alt='logo' style={{
                    width: 48, height: 48, margin: '0 20px'
                }} />
            </Link>
            <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
                <Link to='/' style={{
                    textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #F1C796'
                }}>Home</Link>
                <a href='#exercises' style={{
                    textDecoration: 'none', color: '#3A1212'
                }}>Exercise</a>
            </Stack>
        </Stack>
    )
}

export default NavBar