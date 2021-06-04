import { useEffect, useState } from 'react';
import Footer from '../../component/footer';
import Header from '../../component/header';
import HeaderAdmin from '../../component/headerAdmin';
import LoginService from '../../service/login';
import Article from './article';
import ContactUs from './contactUs';
import Slogan from './slogan';
import Testimony from './testimony';

function Home() {
    const loginService = LoginService.getInstance();
    const [header, setHeader] = useState(<Header />);

    useEffect(() => {
        let mounted = true;
        (async function() {
            const response = await loginService.checkUser();
            if (mounted) {
                if (response) {
                    setHeader(<HeaderAdmin />);
                }
            }
        })();

        return () => {
            mounted = false;
        };
    });

    return (
        <div>
            {header}
            <Slogan />
            <Article />
            <Testimony />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Home;