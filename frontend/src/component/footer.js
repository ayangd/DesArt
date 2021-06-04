import { createUseStyles } from "react-jss";
import FacebookLogo from '../icons/facebook.svg';
import InstagramLogo from '../icons/instagram.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import TwitterLogo from '../icons/twitter.svg';

const useStyles = createUseStyles({
    footerContainer: {
        display: 'flex',
        background: '#a66f30',
        flexDirection: 'column',
        padding: '30px',
    },
    copyright: {
        textAlign: 'center',
        marginBottom: '8px',
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            margin: '0 16px',
            '& > img': {
                maxHeight: '1em',
                maxWidth: '1em',
                marginRight: '8px',
            },
        },
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.copyright}>
                Copyright © DesArt 2021
            </div>
            <div className={classes.socialMedia}>
                <div><img src={FacebookLogo} alt="facebook" />DesArt</div>
                <div><img src={InstagramLogo} alt="instagram" />DesArt</div>
                <div><img src={LinkedInLogo} alt="linkedIn" />DesArt</div>
                <div><img src={TwitterLogo} alt="Twitter" />DesArt</div>
            </div>
        </div>
    );
}

export default Footer;