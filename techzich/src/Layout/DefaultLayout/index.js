import Footer from "./Footer/footer";
import HeaderUser from "./Header/header";

function DefaultLayout({children}){
    
    return(
        <div className="">
            <header className=" header-wapper">
                <HeaderUser/>
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
export default DefaultLayout;