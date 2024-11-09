import { useAtom } from "jotai";
import { pageType } from "../../../Atoms";  

export const AppNavBar = () => {
    const [, setPage] = useAtom(pageType); 

    return (
        <nav className="bg-indigo-600 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <a
                    href="#"
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => setPage('Conv')} 
                >
                    UnitConverter
                </a>

                <div className="hidden md:flex space-x-6">
                    <a
                        href="#"
                        className="hover:text-indigo-200 cursor-pointer"
                        onClick={() => setPage('Conv')}
                    >
                        Converter
                    </a>
                    <a
                        href="#"
                        className="hover:text-indigo-200 cursor-pointer"
                        onClick={() => setPage('About')}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="hover:text-indigo-200 cursor-pointer"
                        onClick={() => setPage('Contact')}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};
