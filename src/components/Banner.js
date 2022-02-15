import '../styles/Banner.css';
import Recommandation  from '../components/Recommandation';
import logo from '../assets/logo.png';

function Banner() {
    const title = 'la maison jungle';
 
    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommandation/>
        </div>
    );
}

export default Banner;