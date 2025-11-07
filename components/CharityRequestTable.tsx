import React from 'react';
import { Request } from '../types';
import StatusBadge from './StatusBadge';
import { EditIcon, ArchiveIcon } from './icons';

interface CharityRequestTableProps {
  requests: Request[];
}

const CharityRequestTable: React.FC<CharityRequestTableProps> = ({ requests }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Family</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funding</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.length > 0 ? requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{request.familyName}</div>
                  <div className="text-sm text-gray-500">{request.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.itemType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">€{request.fundedAmount.toLocaleString()} / €{request.cost.toLocaleString()}</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: `${(request.fundedAmount / request.cost) * 100}%` }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={request.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <button className="text-teal-600 hover:text-teal-900 mr-4" aria-label={`Edit request for ${request.familyName}`}><EditIcon className="w-5 h-5"/></button>
                   <button className="text-red-600 hover:text-red-900" aria-label={`Archive request for ${request.familyName}`}><ArchiveIcon className="w-5 h-5"/></button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-500">
                  You haven't submitted any requests yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CharityRequestTable;