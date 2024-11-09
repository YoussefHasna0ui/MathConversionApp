import { AppFooter } from "./Commponents/App/Footer";
import { AppNavBar } from "./Commponents/App/NavBar";
import { PageSwitcher } from "./Commponents/App/PageSwitcher";

export function App() {
    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            <AppNavBar />

            <main className="flex-grow overflow-auto">
                <PageSwitcher />
            </main>

            <AppFooter />
        </div>
    );
}
