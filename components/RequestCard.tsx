
import React from 'react';
import { Request } from '../types';
import { VerifiedIcon, LocationIcon } from './icons';

interface RequestCardProps {
    request: Request;
    onViewDetails: (id: string) => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ request, onViewDetails }) => {
    const fundedPercentage = (request.fundedAmount / request.cost) * 100;
    const isFunded = request.fundedAmount >= request.cost;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="relative">
                <img className="h-48 w-full object-cover" src={request.imageUrl} alt={request.itemType} />
                {request.urgency === 'High' && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">URGENT</span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 h-14">{request.itemType} for {request.familyName}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <LocationIcon className="h-4 w-4 mr-1"/>
                    <span>{request.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-teal-600 mt-2 font-medium">
                    <span>by {request.charity.name}</span>
                    {request.charity.verified && <VerifiedIcon className="h-5 w-5 ml-1 text-teal-500" />}
                </div>

                <div className="mt-4 flex-grow">
                     <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-gray-700">€{request.fundedAmount.toLocaleString()} raised</span>
                        <span className="text-gray-500">€{request.cost.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${fundedPercentage}%` }}></div>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={() => onViewDetails(request.id)}
                        className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300"
                    >
                        {isFunded ? 'View Impact' : 'View Details'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;