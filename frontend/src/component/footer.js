import { createUseStyles } from "react-jss";
import FacebookLogo from '../icons/facebook.svg';
import InstagramLogo from '../icons/instagram.svg';

const useStyles = createUseStyles({
    footerContainer: {
        display: 'flex',
        background: '#a66f30',
        flexDirection: 'column',
        padding: '30px',
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'column',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            '& > img': {
                maxHeight: '1em',
                maxWidth: '1em',
                marginRight: '8px',
            },
        },
    },
    copyright: {
        textAlign: 'right',
        color: 'lightgray',
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.socialMedia}>
                <div><img src={FacebookLogo} alt="facebook" />DesArt</div>
                <div><img src={InstagramLogo} alt="instagram" />@DesArt</div>
            </div>
            <div className={classes.copyright}>
                © 2021 DesArt
            </div>
        </div>
    );
}

export default Footer;