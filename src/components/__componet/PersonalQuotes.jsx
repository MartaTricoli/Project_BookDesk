// CitationsForm.js

import React, { useState } from 'react';

const CitationsForm = () => {
  const [citations, setCitations] = useState([]);
  const [newCitation, setNewCitation] = useState('');

  const handleInputChange = (event) => {
    setNewCitation(event.target.value);
  };

  const handleSave = () => {
    if (newCitation.trim() !== '') {
      setCitations((prevCitations) => [...prevCitations, newCitation]);
      setNewCitation('');
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newCitation}
          onChange={handleInputChange}
          placeholder="Inserisci una citazione"
          className="p-3 border border-new_light_blue rounded-md focus:outline-none focus:ring focus:border-blue-500 flex-grow max-w-[250px]"
        />
        <button
          onClick={handleSave}
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Salva
        </button>
      </div>

      <div>
        {citations.map((citation, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={citation}
              readOnly
              className="p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none"
            />
            {/* Puoi aggiungere ulteriori opzioni o bottoni qui */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitationsForm;
