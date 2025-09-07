import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

export default function App() {

    return (
        <div className="bg-[#060606] w-full flex flex-col gap-2 justify-center min-h-screen">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

