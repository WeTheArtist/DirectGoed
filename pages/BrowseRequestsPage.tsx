
import React, { useState, useMemo } from 'react';
import { Request, ItemType } from '../types';
import RequestCard from '../components/RequestCard';
import { ChevronDownIcon, SearchIcon } from '../components/icons';


interface FilterBarProps {
    locations: string[];
    itemTypes: ItemType[];
    onFilterChange: (filters: { location: string; itemType: string; cost: number, searchTerm: string }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ locations, itemTypes, onFilterChange }) => {
    const [location, setLocation] = useState('all');
    const [itemType, setItemType] = useState('all');
    const [cost, setCost] = useState(1000);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();
        onFilterChange({ location, itemType, cost, searchTerm });
    };

    return (
        <form onSubmit={handleFilter} className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-16 z-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                <div className="lg:col-span-2">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <SearchIcon className="h-5 w-5 text-gray-400"/>
                        </div>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="e.g., 'bed' or 'family name'"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <select id="location" value={location} onChange={e => setLocation(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                        <option value="all">All Locations</option>
                        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="item" className="block text-sm font-medium text-gray-700">Item Type</label>
                    <select id="item" value={itemType} onChange={e => setItemType(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                        <option value="all">All Items</option>
                        {itemTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
                <div className="lg:col-span-1">
                    <button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">Apply Filters</button>
                </div>
            </div>
        </form>
    );
}

interface BrowseRequestsPageProps {
    requests: Request[];
    locations: string[];
    itemTypes: ItemType[];
    onViewDetails: (id: string) => void;
}

const BrowseRequestsPage: React.FC<BrowseRequestsPageProps> = ({ requests, locations, itemTypes, onViewDetails }) => {
    const [filters, setFilters] = useState<{ location: string; itemType: string; cost: number, searchTerm: string }>({
        location: 'all',
        itemType: 'all',
        cost: 1000,
        searchTerm: ''
    });

    const filteredRequests = useMemo(() => {
        return requests.filter(req => {
            const searchLower = filters.searchTerm.toLowerCase();
            const searchMatch = !filters.searchTerm || 
                                req.familyName.toLowerCase().includes(searchLower) ||
                                req.itemType.toLowerCase().includes(searchLower) ||
                                req.description.toLowerCase().includes(searchLower) ||
                                req.story.toLowerCase().includes(searchLower);

            const locationMatch = filters.location === 'all' || req.location === filters.location;
            const itemMatch = filters.itemType === 'all' || req.itemType === filters.itemType;
            
            return searchMatch && locationMatch && itemMatch;
        });
    }, [requests, filters]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Find a Family to Support</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Every donation provides a tangible, life-changing item for someone in need.
                    </p>
                </div>

                <FilterBar
                    locations={locations}
                    itemTypes={itemTypes}
                    onFilterChange={setFilters}
                />
                
                {filteredRequests.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredRequests.map(request => (
                            <RequestCard key={request.id} request={request} onViewDetails={onViewDetails} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-gray-700">No requests match your filters.</h2>
                        <p className="mt-2 text-gray-500">Try adjusting your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseRequestsPage;