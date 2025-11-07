import React, { useState } from 'react';

interface HeaderProps {
    onNavigate: (view: 'home' | 'browse') => void;
    onNavigateToCharity: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onNavigateToCharity }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-teal-600">
                            DirectGoed
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('browse'); }} className="text-gray-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Browse Requests</a>
                            <a href="#" className="text-gray-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToCharity(); }} className="text-gray-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">For Charities</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-2">
                             <a href="#" className="text-gray-500 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Log in</a>
                            <a href="#" className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition duration-300">
                                Sign up
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMenuOpen(false); }} className="text-gray-500 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('browse'); setIsMenuOpen(false); }} className="text-gray-500 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Browse Requests</a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToCharity(); setIsMenuOpen(false); }} className="text-gray-500 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">For Charities</a>
                        <a href="#" className="text-gray-500 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Log in</a>
                        <a href="#" className="bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition duration-300">Sign up</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
