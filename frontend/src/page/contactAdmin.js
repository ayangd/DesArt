import { createUseStyles } from "react-jss";
import HeaderAdmin from "../component/headerAdmin"

const useStyles = createUseStyles ({
    contactContainer:{
        backgroundColor: 'white',
        padding: '24px 45px',
    },
    contactTitle: {
        fontSize: '2em',
        marginBottom: '8px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        padding: '8px',
        '& > div': {
            marginBottom: '24px',
        },
        '& .contentTitle': {
            color: 'gray',
            fontSize: '0.9em',
        },
        '& .contentContent':{
            display: 'block',
        },
    },
});

function ContactAdmin() {
    const classes = useStyles();

    return(
        <div>
            <HeaderAdmin />
            <div className={classes.contactContainer}>
                <div className={classes.contactTitle}>
                    Contact
                </div>
                <div className={classes.content}>
                    <div>
                        <span className="contentTitle">Name:</span>
                        <span className="contentContent">Toni</span>
                    </div>
                    <div>
                        <span className="contentTitle">Email:</span>
                        <span className="contentContent">Toni@gmail.com</span>
                    </div>
                    <div>
                        <span className="contentTitle">Message:</span>
                        <span className="contentContent">Lorem ipsum</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactAdmin;