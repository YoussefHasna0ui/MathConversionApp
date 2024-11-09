// Contact.tsx
import { useState } from "react";

export function ContactPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false); // Flag to show success message

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Simulate email sending here
        setTimeout(() => {
            // You can integrate actual email API or service like EmailJS or SendGrid here
            console.log("Email sent:", { name, email, subject, message });
            setIsSent(true); // Show success message
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, 1000);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
                Contact Us
            </h2>
            {isSent && (
                <div className="mb-4 p-4 text-green-600 bg-green-100 border border-green-300 rounded-md">
                    <p className="text-center font-medium">Your message has been sent!</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Subject:
                    </label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Message:
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

