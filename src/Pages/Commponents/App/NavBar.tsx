// AppNavBar.tsx
import { useAtom } from "jotai";
import { pageType } from "../../../Atoms";  // Import the atom to manage page state

export const AppNavBar = () => {
    const [page, setPage] = useAtom(pageType); // Get and set the current page using Jotai

    return (
        <nav className="bg-indigo-600 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo or Brand */}
                <a
                    href="#"
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => setPage('Conv')} // Clicking on the logo will take you to the home page
                >
                    UnitConverter
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {/* Home Link */}
                    <a
                        href="#"
                        className="hover:text-indigo-200 cursor-pointer"
                        onClick={() => setPage('Conv')}
                    >
                        Converter
                    </a>
                    {/* About Link */}
                    <a
                        href="#"
                        className="hover:text-indigo-200 cursor-pointer"
                        onClick={() => setPage('About')}
                    >
                        About
                    </a>
                    {/* Contact Link */}
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
