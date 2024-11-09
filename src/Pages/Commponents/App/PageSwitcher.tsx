// PageSwitcher.tsx
import { useAtom } from "jotai";
import { pageType } from "../../../Atoms";
import { UnitConverter } from "../Conv/index"; 
import { ContactPage } from "../../ContactPage";
import { AboutPage } from "../../AboutPage";

export function PageSwitcher() {
    const [page] = useAtom(pageType); 

    const renderPage = () => {
        switch (page) {
            case 'Conv':
                return <UnitConverter />;
            case 'About':
                return <AboutPage/>
            case 'Contact':
                return <ContactPage/>
            default:
                return <UnitConverter />; 
        }
    };

    return (
        <div>
            <main className="py-10">
                {renderPage()}
            </main>
        </div>
    );
}
