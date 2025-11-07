import React, { useState } from 'react';
import { ItemType, NewRequestData } from '../types';

interface AddRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewRequestData) => void;
  itemTypes: ItemType[];
}

const AddRequestModal: React.FC<AddRequestModalProps> = ({ isOpen, onClose, onSubmit, itemTypes }) => {
  const [familyName, setFamilyName] = useState('');
  const [itemType, setItemType] = useState(itemTypes[0]);
  const [cost, setCost] = useState(0);
  const [story, setStory] = useState('');
  const [location, setLocation] = useState('');

  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!familyName || cost <= 0 || !story || !location) {
        alert("Please fill out all fields.");
        return;
    }
    onSubmit({ familyName, itemType, cost, story, location });
    onClose();
    // Reset form
    setFamilyName('');
    setItemType(itemTypes[0]);
    setCost(0);
    setStory('');
    setLocation('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" role="dialog" aria-modal="true" aria-labelledby="add-request-title">
      <div className="bg-white rounded-lg p-6 sm:p-8 m-4 max-w-2xl w-full max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h2 id="add-request-title" className="text-2xl font-bold text-gray-800">Add a New Request</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">Family Name</label>
              <input type="text" id="familyName" value={familyName} onChange={e => setFamilyName(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required />
            </div>
             <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="location" value={location} placeholder="e.g., Amsterdam, NL" onChange={e => setLocation(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="item" className="block text-sm font-medium text-gray-700">Item Type</label>
              <select id="item" value={itemType} onChange={e => setItemType(e.target.value as ItemType)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required>
                {itemTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Item Cost (€)</label>
              <input type="number" id="cost" value={cost} onChange={e => setCost(Number(e.target.value))} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" min="1" required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="story" className="block text-sm font-medium text-gray-700">Family's Story</label>
              <textarea id="story" value={story} onChange={e => setStory(e.target.value)} rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Describe the family's situation and need for this item." required></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Cancel
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRequestModal;