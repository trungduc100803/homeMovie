
import './Footer.scss'
import bg from '../../assest/footer-bg.jpg';
import logo from '../../assest/tmovie.png'


function Footer() {
    return (
        <div className="footer">
            <div className="bg-footer" style={{backgroundImage: `url(${bg})`}}>
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                    <p>dMovies</p>
                </div>
                <div className="footer-list">
                    <ul className="list">
                        <li className="item">Home</li>
                        <li className="item">Contact</li>
                        <li className="item">Term of services</li>
                        <li className="item">About US</li>
                    </ul>

                    <ul className="list">
                        <li className="item">Live</li>
                        <li className="item">FAQ</li>
                        <li className="item">Premium</li>
                        <li className="item">Pravacy Policy</li>
                    </ul>

                    <ul className="list">
                        <li className="item">You must watch</li>
                        <li className="item">Recent release</li>
                        <li className="item">Top IMDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;