import React from 'react';
import { useBusiness } from '../context/BusinessContext';

const DisplayCard = () => {
  const { businessData, regenerateHeadline } = useBusiness();

  if (!businessData) return null;

  return (
    <div className="mt-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Business Insights</h2>
      <p><strong>Rating:</strong> {businessData.rating}</p>
      <p><strong>Reviews:</strong> {businessData.reviews}</p>
      <p><strong>SEO Headline:</strong></p>
      <p className="italic text-gray-700 mb-4">"{businessData.headline}"</p>

      <button
        onClick={regenerateHeadline}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default DisplayCard;
