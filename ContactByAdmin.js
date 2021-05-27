import { createUseStyles } from "react-jss";
import HeaderAdmin from "../component/headerAdmin"

const useStyles = createUseStyles ({

    containAll:{

        backgroundColor: 'white',
        paddingLeft: '20px'
    },

    teksContact: {

        padding: '50px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        fontSize: '50px'
        

    },

    PreCus: {

        
        
        padding: '50px',
        
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        '& > div': {
            '& > label': {
                fontSize: '1.5em',
            },
        },
        '& > *': {
            margin: '16px 0',
        },
        borderBlockColor: 'black',
        borderStyle: 'solid'
    }

})



function ContactAdmin (){
    const classes = useStyles();
    return(

        <div>
        <HeaderAdmin></HeaderAdmin>
        <div className={classes.containAll}>
        <div className={classes.teksContact}>

        <label>Contact</label>
        </div>

        <div className={classes.PreCus}>
        

            <label>Name : Toni</label>
            <label>Email : Toni@gmail.com</label>
            <label>Message : Lorem ipsum</label>
            

            </div>
        </div>

        </div>
       
       

    );
}


export default ContactAdmin