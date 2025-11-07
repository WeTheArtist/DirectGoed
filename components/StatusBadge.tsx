import React from 'react';
import { RequestStatus } from '../types';

interface StatusBadgeProps {
  status: RequestStatus;
}

const statusColors: Record<RequestStatus, string> = {
  [RequestStatus.Pending]: 'bg-yellow-100 text-yellow-800',
  [RequestStatus.Approved]: 'bg-blue-100 text-blue-800',
  [RequestStatus.Funded]: 'bg-green-100 text-green-800',
  [RequestStatus.Delivered]: 'bg-purple-100 text-purple-800',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <span
    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}
  >
    {status}
  </span>
);

export default StatusBadge;
