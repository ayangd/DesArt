import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#5c99fa',
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: '2em',
        margin: '0',
    },
    headerMenu: {
        display: 'flex',
        '& > li': {
            listStyle: 'none',
            marginLeft: '16px',
        },
    },
});

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <h4 className={classes.headerTitle}>DesArt</h4>
            <ul className={classes.headerMenu}>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </div>
    );
}

export default Header;