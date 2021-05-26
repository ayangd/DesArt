import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
    testionyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#5eabe6',
        padding: '20px 0',
    },
    testimonyTitle: {
        fontSize: '3em',
        marginBottom: '40px',
    },
    testimonyContent: {
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        marginBottom: '20px',
        '& > div': {
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'black',
            margin: '0 16px',
            maxWidth: '200px',
            '& > div': {
                width: '80px',
                height: '80px',
                background: 'white',
                borderRadius: '50%',
                marginBottom: '16px',
            },
        },
    },
    testimonyPagination: {
        '& > .selected': {
            color: 'white',
        },
        '& > svg': {
            margin: '0 4px',
        },
    },
});

function Testimony() {
    const classes = useStyles();

    return (
        <div className={classes.testionyContainer}>
            <div className={classes.testimonyTitle}>Testimony</div>
            <div className={classes.testimonyContent}>
                <div>
                    <div></div>
                    Lorem ipsum dolor sit amet
                </div>
                <div>
                    <div></div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <div>
                    <div></div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className={classes.testimonyPagination}>
                <FontAwesomeIcon className="selected" icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
            </div>
        </div>
    );
}

export default Testimony;