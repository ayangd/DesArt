import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import Logo from "../DesArt.png";
import LoginService from "../service/login";

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#5c99fa',
        padding: '8px 24px',
        display: 'flex',
    },
    headerLogo: {
        width: '64px',
        marginRight: '12px',
    },
    headerTitle: {
        fontSize: '1.5em',
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: '0',
    },
    headerMenu:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& > li': {
            listStyle: 'none',
            borderBottom: '2px solid transparent',
            transition: '0.5s',
            '&:hover': {
                borderBottom: '2px solid black',
            },
            marginLeft: '24px',
            cursor: 'pointer',
        }
    },
});

function HeaderAdmin() {
    const classes = useStyles();
    const history = useHistory();
    const loginService = LoginService.getInstance();

    function logout() {
        (async function() {
            await loginService.logout();
            history.go(0);
        })();
    }

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <img className={classes.headerLogo} src={Logo} alt="" />
                <div className={classes.headerTitle}>Admin</div>
            </div>
            <ul className={classes.headerMenu}>
                <li>Article</li>
                <li>Contact Us</li>
                <li onClick={logout}>Log Out</li>
            </ul>
        </div>
    );
}

export default HeaderAdmin;