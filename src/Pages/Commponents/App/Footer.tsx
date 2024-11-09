import { FaGithub } from "react-icons/fa";
export const AppFooter = () => {
    return (
        <footer className="bg-indigo-600 text-white text-center py-4 mt-10">
            <div className="max-w-screen-xl mx-auto">
                <p className="text-sm">&copy; 2024 UnitConverter. All rights reserved.</p>
                <div className="mt-2 flex justify-center items-center space-x-4">
                    <a
                        href="https://github.com/YoussefHasna0ui/MathConversionApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-indigo-200"
                    >
                        <FaGithub className="w-6 h-6 inline-block" /> Sourcecode
                    </a>
                </div>
            </div>
        </footer>
    );
};
