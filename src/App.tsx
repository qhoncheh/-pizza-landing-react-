import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

export default function App() {

    return (
        <div className="bg-[#060606] w-full flex flex-col gap-2 justify-center min-h-screen">
            <Menu />
            <Footer />
        </div>
    );
}

