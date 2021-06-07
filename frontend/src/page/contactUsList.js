import { Fragment, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import HeaderAdmin from "../component/headerAdmin";
import ContactUsService from "../service/contactus";

const useStyles = createUseStyles({
    listContainer: {
        padding: '64px',
    },
    listTitle: {
        fontSize: '2em',
    },
    table: {
        borderSpacing: '16px',
        width: '100%',
        boxSizing: 'border-box',
        '& > thead > tr > td': {
            borderBottom: '1px solid black',
        },
    },
});

function ContactUsList() {
    const classes = useStyles();
    const history = useHistory();
    const contactUsService = ContactUsService.getInstance();
    const [contactUs, setContactUs] = useState([]);

    useEffect(() => {
        let mounted = true;

        (async function() {
            const responseData = await contactUsService.getAll();
            if (mounted) {
                setContactUs(responseData);
            }
        })();

        return () => {
            mounted = false;
        };
    }, [contactUsService]);

    function remove(id) {
        (async function() {
            await contactUsService.remove(id);
            const responseData = await contactUsService.getAll();
            setContactUs(responseData);
        })();
    }

    return (
        <Fragment>
            <HeaderAdmin />
            <div className={classes.listContainer}>
                <div>
                    <div className={classes.listTitle}>Contact Us</div>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Message</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {contactUs?.map(c => (
                                <tr>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.message}</td>
                                    <td>
                                        <button onClick={() => history.push(`/admin/contactus/${c.id}`)}>Preview</button>
                                        <button onClick={() => remove(c.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactUsList;