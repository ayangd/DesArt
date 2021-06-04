import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Logo from "../DesArt.png";

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#5c99fa',
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerLogo: {
        width: '64px',
    },
    headerMenu: {
        display: 'flex',
        '& > li': {
            listStyle: 'none',
            marginLeft: '16px',
            borderBottom: '2px solid transparent',
            transition: '0.5s',
            cursor: 'pointer',
            '&:hover': {
                borderBottom: '2px solid black',
            },
        },
    },
});

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <Link to="/home"><img className={classes.headerLogo} src={Logo} alt="Logo" /></Link>
            </div>
            <ul className={classes.headerMenu}>
                <li>About Us</li>
                <li>Article</li>
            </ul>
        </div>
    );
}

export default Header;