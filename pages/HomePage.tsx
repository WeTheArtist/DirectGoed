
import React from 'react';
import { Request } from '../types';
import RequestCard from '../components/RequestCard';

interface HomePageProps {
    requests: Request[];
    onNavigateToBrowse: () => void;
    onViewDetails: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ requests, onNavigateToBrowse, onViewDetails }) => {
    const featuredRequests = requests.filter(r => r.status === 'Approved').slice(0, 3);
    
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 py-16 sm:py-24 lg:py-32">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Direct Donations.</span>
                            <span className="block text-teal-600">Real, Tangible Impact.</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Fund essential items for families in need. See exactly where your donation goes and the difference it makes.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <button
                                    onClick={onNavigateToBrowse}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Browse Requests
                                </button>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Requests Section */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Families You Can Help Today
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            These requests are verified and ready for your support.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredRequests.map(request => (
                            <RequestCard key={request.id} request={request} onViewDetails={onViewDetails} />
                        ))}
                    </div>
                     <div className="mt-12 text-center">
                        <button
                            onClick={onNavigateToBrowse}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200"
                        >
                            View All Requests
                        </button>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Transparent Giving in 3 Easy Steps
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-10 md:grid-cols-3">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white font-bold text-xl mx-auto">1</div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Choose a Request</h3>
                            <p className="mt-2 text-base text-gray-500">Browse verified needs from families, submitted by our trusted charity partners.</p>
                        </div>
                         <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white font-bold text-xl mx-auto">2</div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Fund an Item</h3>
                            <p className="mt-2 text-base text-gray-500">Make a secure donation. 100% of your gift goes towards purchasing the item.</p>
                        </div>
                         <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white font-bold text-xl mx-auto">3</div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">See Your Impact</h3>
                            <p className="mt-2 text-base text-gray-500">Receive a delivery confirmation, photos, and a thank you note from the family you helped.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;