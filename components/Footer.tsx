
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <a href="#" className="text-2xl font-bold text-teal-600">
                            DirectGoed
                        </a>
                        <p className="text-gray-500 text-base">
                            Direct donations for essential appliances. Real impact, delivered.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Browse Requests</a></li>
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Impact Stories</a></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact Us</a></li>
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} DirectGoed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
