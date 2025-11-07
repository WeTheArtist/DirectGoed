import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BrowseRequestsPage from './pages/BrowseRequestsPage';
import RequestDetailPage from './pages/RequestDetailPage';
import CharityDashboardPage from './pages/CharityDashboardPage';
import { useMockData } from './hooks/useMockData';
import { NewRequestData } from './types';

type View = 'home' | 'browse' | 'detail' | 'charityDashboard';

const App: React.FC = () => {
    const [view, setView] = useState<View>('home');
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

    const { requests, charities, findRequestById, locations, itemTypes, addRequest } = useMockData();
    
    // Simulate a logged-in charity for the dashboard
    const currentCharity = useMemo(() => charities[1], [charities]); // Gemeenschap Zorgproject
    
    const charityRequests = useMemo(() => {
        return requests.filter(req => req.charity.id === currentCharity.id);
    }, [requests, currentCharity.id]);

    const handleNavigate = (newView: 'home' | 'browse') => {
        setView(newView);
        setSelectedRequestId(null);
        window.scrollTo(0, 0);
    };

    const handleNavigateToCharity = () => {
        setView('charityDashboard');
        setSelectedRequestId(null);
        window.scrollTo(0, 0);
    };

    const handleViewDetails = (id: string) => {
        setSelectedRequestId(id);
        setView('detail');
        window.scrollTo(0, 0);
    };

    const handleBackToBrowse = () => {
        setView('browse');
        setSelectedRequestId(null);
        window.scrollTo(0, 0);
    };

    const handleAddRequest = (data: NewRequestData) => {
        addRequest(data, currentCharity);
    };
    
    const selectedRequest = useMemo(() => {
        return findRequestById(selectedRequestId);
    }, [selectedRequestId, findRequestById]);

    const renderContent = () => {
        switch (view) {
            case 'home':
                return <HomePage requests={requests} onNavigateToBrowse={() => handleNavigate('browse')} onViewDetails={handleViewDetails} />;
            case 'browse':
                return <BrowseRequestsPage requests={requests} locations={locations} itemTypes={itemTypes} onViewDetails={handleViewDetails} />;
            case 'detail':
                if (selectedRequest) {
                    return <RequestDetailPage request={selectedRequest} onBack={handleBackToBrowse} />;
                }
                handleNavigate('browse');
                return null;
            case 'charityDashboard':
                return <CharityDashboardPage 
                            charity={currentCharity}
                            requests={charityRequests}
                            itemTypes={itemTypes}
                            onAddRequest={handleAddRequest}
                        />;
            default:
                return <HomePage requests={requests} onNavigateToBrowse={() => handleNavigate('browse')} onViewDetails={handleViewDetails} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header onNavigate={handleNavigate} onNavigateToCharity={handleNavigateToCharity} />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;