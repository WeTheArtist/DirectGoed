
import React, { useState } from 'react';
import { Request } from '../types';
import { VerifiedIcon, LocationIcon } from '../components/icons';

interface RequestDetailPageProps {
    request: Request;
    onBack: () => void;
}

const DonationModal: React.FC<{ isOpen: boolean; onClose: () => void; request: Request }> = ({ isOpen, onClose, request }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 m-4 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">Bedankt!</h2>
                <p className="text-gray-600 mb-6">
                    U doneert een <strong>{request.itemType}</strong> voor <strong>{request.familyName}</strong>.
                    Dit is een simulatie. In een echte applicatie zou u worden doorgestuurd naar een betalingsprovider.
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                    Sluiten
                </button>
            </div>
        </div>
    );
};

const RequestDetailPage: React.FC<RequestDetailPageProps> = ({ request, onBack }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fundedPercentage = (request.fundedAmount / request.cost) * 100;
    const isFunded = request.fundedAmount >= request.cost;
    const donorCount = Math.floor(request.fundedAmount / 45) + 1; // Simulated donor count

    return (
        <div className="bg-gray-50 py-8 md:py-12">
             <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} request={request} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="mb-6 text-teal-600 hover:text-teal-800 font-medium">
                    &larr; Terug naar alle verzoeken
                </button>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <img src={request.imageUrl} alt={request.itemType} className="h-64 w-full object-cover lg:h-full" />
                        </div>
                        <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col">
                            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                {request.itemType}
                            </h2>
                            <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                                Help de {request.familyName}
                            </h1>
                            <div className="mt-4 flex items-center text-gray-500">
                                <LocationIcon className="h-5 w-5 mr-2" />
                                <span className="text-base">{request.location}</span>
                            </div>

                            <div className="mt-6 border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-medium text-gray-900">Hun Verhaal</h3>
                                <p className="mt-2 text-gray-600">{request.story}</p>
                            </div>
                            
                            <div className="mt-6">
                                <div className="flex items-center">
                                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-teal-600">
                                        Geverifieerde Partner
                                    </h4>
                                    <div className="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <div className="mt-3 flex items-center space-x-2">
                                    <p className="text-lg font-medium text-gray-800">{request.charity.name}</p>
                                    {request.charity.verified && <VerifiedIcon className="h-6 w-6 text-teal-500" />}
                                </div>
                            </div>
                            
                            <div className="mt-auto pt-8">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Financieringsvoortgang</h3>
                                    <div className="flex justify-between items-end text-3xl font-bold">
                                        <span className="text-teal-600">€{request.fundedAmount.toLocaleString('nl-NL')}</span>
                                        <span className="text-gray-500 text-xl font-medium">/ €{request.cost.toLocaleString('nl-NL')}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                                        <div className="bg-teal-500 h-4 rounded-full" style={{ width: `${fundedPercentage}%` }}></div>
                                    </div>
                                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                                        <span>{Math.round(fundedPercentage)}% gefinancierd</span>
                                        <span>{donorCount} donateur{donorCount !== 1 && 's'}</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        disabled={isFunded}
                                        className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-teal-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isFunded ? 'Volledig Gefinancierd!' : `Doneer deze ${request.itemType}`}
                                    </button>
                                    {isFunded && (
                                        <p className="text-center mt-4 text-green-600 font-semibold">Bedankt! Dit verzoek is vervuld. Uw vrijgevigheid heeft een verschil gemaakt.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDetailPage;