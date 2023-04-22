
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function DefaultLayout({children}) {
    return <>
        <Header/>
        <div className="container">
            {children}
        </div>
        <Footer/>
    </>
}

export default DefaultLayout;