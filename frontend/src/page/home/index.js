import Footer from '../../component/footer';
import Header from '../../component/header';
import Article from './article';
import ContactUs from './contactUs';
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
            <Footer />
        </div>
    );
}

export default Home;