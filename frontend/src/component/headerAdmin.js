import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#5c99fa',
        padding: '8px 24px',
        display: 'flex',
    },
    headerMenu:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap:'50px',
    },
    menuLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 'auto',
        '& img':{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'black',
        },
        '& h3':{
            marginLeft:'30px',
        },

    },
    menuRight:{
        listStyle: 'none',
        borderBottom: '2px solid transparent',
        transition: '0.5s',
        '&:hover': {
            borderBottom: '2px solid black',
        },
        
    }
    
});

function HeaderAdmin() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <ul className={classes.headerMenu}>
                <li className={classes.menuLeft}><img></img><h3>NamaAdmin</h3></li>
                <li className={classes.menuRight}>Dashboard</li>
                <li className={classes.menuRight}>Article</li>
                <li className={classes.menuRight}>Contact</li>
            </ul>
        </div>
    );
}

export default HeaderAdmin;