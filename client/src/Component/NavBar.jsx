
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #e91d40;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
               <a href="http://localhost:3000/"><Tabs to="" exact>BUS</Tabs></a> 
                <Tabs to="all" exact>Total Bookings</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;