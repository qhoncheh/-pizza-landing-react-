import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

export default function App() {

    return (
        <div className="flex flex-col gap-2 justify-center">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

