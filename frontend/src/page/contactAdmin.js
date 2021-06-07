import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router";
import HeaderAdmin from "../component/headerAdmin"
import ContactUsService from "../service/contactus";

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
    const { id } = useParams();
    const contactUsService = ContactUsService.getInstance();
    const [contactUs, setContactUs] = useState(null);

    useEffect(() => {
        let mounted = true;

        (async function() {
            const responseData = await contactUsService.get(id);
            if (mounted) {
                setContactUs(responseData);
            }
        })();

        return () => {
            mounted = false;
        };
    });

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
                        <span className="contentContent">{contactUs?.name}</span>
                    </div>
                    <div>
                        <span className="contentTitle">Email:</span>
                        <span className="contentContent">{contactUs?.email}</span>
                    </div>
                    <div>
                        <span className="contentTitle">Message:</span>
                        <span className="contentContent">{contactUs?.message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactAdmin;