import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 font-body">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {/* Logo, Contact Info, and About Us */}
                <div>
                    <h2 className="text-2xl font-header font-bold mb-4">Grocery Hub</h2>
                    <p className="italic">Freshness Delivered to Your Doorstep!</p>
                    <div className="mt-4 text-sm">
                        <p>5678 Fresh Street, Green City,</p>
                        <p>Grocery Town, State, 123456</p>
                        <p className="mt-2">
                            Email:{" "}
                            <a
                                href="mailto:contact@groceryhub.com"
                                className="text-gray-400 hover:text-gray-200 transition duration-300"
                            >
                                contact@groceryhub.com
                            </a>
                        </p>
                        <p>
                            Phone:{" "}
                            <a
                                href="tel:+1234567890"
                                className="hover:text-gray-200 transition duration-300"
                            >
                                +123-456-7890
                            </a>
                        </p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">About Grocery Hub</h3>
                        <p className="text-sm">
                            Founded in 2020, Grocery Hub is your go-to destination for fresh and quality produce. We provide a seamless shopping experience with timely delivery.
                        </p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div>
                    <h2 className="text-2xl font-header font-bold mb-4">Get in Touch</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white focus:outline-none focus:border-gray-400 text-sm py-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white focus:outline-none focus:border-gray-400 text-sm py-1"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email *</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-gray-400 text-sm py-1"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">Phone</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white focus:outline-none focus:border-gray-400 text-sm py-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Address</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white focus:outline-none focus:border-gray-400 text-sm py-1"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full border border-white text-sm py-2 mt-4 hover:bg-white hover:text-black transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Links */}
                <div className="ml-4">
                    <h2 className="text-2xl font-header font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-gray-200 hover:underline transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-gray-200 hover:underline transition duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                className="hover:text-gray-200 hover:underline transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-gray-200 hover:underline transition duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 text-gray-300 pt-6 text-center px-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Grocery Hub. All Rights Reserved.</p>
                <p className="text-xs mt-2">
                    Disclaimer: The information provided on this website is for general informational purposes only. We do not offer legal, financial, or professional advice.
                </p>
            </div>
        </footer>
    );
}
