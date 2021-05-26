import Header from '../../component/header';
import Article from './article';
import ContactUs from './contact-us';
import Slogan from './slogan';
import Testimony from './testimony';

function Home() {
    return (
        <div>
            <Header />
            <Slogan />
            <Article />
            <Testimony />
            <ContactUs />
        </div>
    );
}

export default Home;