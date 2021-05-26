import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    sloganContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#003775',
        color: 'white',
        padding: '75px',
    },
    sloganTitle: {
        marginBottom: '40px',
        fontSize: '3em',
    },
});

function Slogan() {
    const classes = useStyle();

    return (
        <div className={classes.sloganContainer}>
            <div className={classes.sloganTitle}>Slogan</div>
            <div>Subslogan</div>
        </div>
    );
}

export default Slogan;