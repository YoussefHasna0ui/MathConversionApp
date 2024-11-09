// PageSwitcher.tsx
import { useAtom } from "jotai";
import { pageType } from "../../../Atoms";
import { UnitConverter } from "../Conv/index"; // Assuming the UnitConverter component
import { ContactPage } from "../../ContactPage";
import { AboutPage } from "../../AboutPage";

export function PageSwitcher() {
    const [page] = useAtom(pageType); // Get the current page type from Jotai

    const renderPage = () => {
        switch (page) {
            case 'Conv':
                return <UnitConverter />;
            case 'About':
                return <AboutPage/>
            case 'Contact':
                return <ContactPage/>
            default:
                return <UnitConverter />; // Default to converter if no page is selected
        }
    };

    return (
        <div>
            <main className="py-10">
                {renderPage()} {/* This will render the page based on `pageType` */}
            </main>
        </div>
    );
}
