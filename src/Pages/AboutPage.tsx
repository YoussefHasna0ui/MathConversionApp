// AboutPage.tsx
import { useAtom } from "jotai";
import { pageType } from "../Atoms";

export function AboutPage() {
  const [, setPage] = useAtom(pageType);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
        About Us
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our Unit Converter app! We are a team of developers
        passionate about building useful tools that make life easier. Our goal
        is to provide simple and intuitive applications that help people save
        time and effort.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This app allows you to easily convert between different units of
        measurement, whether it’s length, mass, or volume. We believe that by
        providing a clean interface and powerful functionality, users will be
        able to complete their tasks quickly and efficiently.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions, suggestions, or feedback, feel free to reach
        out via the{" "}
        <a
          href="#"
          onClick={() => setPage("Contact")}
          className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-800"
        >
          Contact page.
        </a>
      </p>
    </div>
  );
}

export default AboutPage;
