import React, { useState } from 'react';
import { Request, Charity, ItemType, NewRequestData } from '../types';
import CharityRequestTable from '../components/CharityRequestTable';
import AddRequestModal from '../components/AddRequestModal';

interface CharityDashboardPageProps {
  charity: Charity;
  requests: Request[];
  itemTypes: ItemType[];
  onAddRequest: (data: NewRequestData) => void;
}

const CharityDashboardPage: React.FC<CharityDashboardPageProps> = ({ charity, requests, itemTypes, onAddRequest }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            <AddRequestModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={onAddRequest}
                itemTypes={itemTypes}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="md:flex md:items-center md:justify-between mb-8">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            {charity.name} Dashboard
                        </h1>
                        <p className="mt-1 text-md text-gray-500">Manage your submitted requests.</p>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                         <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Add New Request
                        </button>
                    </div>
                </div>

                <CharityRequestTable requests={requests} />
            </div>
        </div>
    );
};

export default CharityDashboardPage;