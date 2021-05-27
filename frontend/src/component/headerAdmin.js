import { createUseStyles } from "react-jss";
import Logo from "../DesArt.png";

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
        }
    },
});

function HeaderAdmin() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <img className={classes.headerLogo} src={Logo} alt="" />
                <div className={classes.headerTitle}>Admin</div>
            </div>
            <ul className={classes.headerMenu}>
                <li>Dashboard</li>
                <li>Article</li>
                <li>Contact</li>
                <li>Log Out</li>
            </ul>
        </div>
    );
}

export default HeaderAdmin;