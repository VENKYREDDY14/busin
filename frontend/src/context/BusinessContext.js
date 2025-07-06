import React, { createContext, useContext, useState } from 'react';

const BusinessContext = createContext();

export const useBusiness = () => useContext(BusinessContext);

export const BusinessProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', location: '' });
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  const fetchBusinessData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}api/business-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setBusinessData(data);
    } catch (err) {
      console.error('Error fetching business data:', err);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    try {
      const response = await fetch(
        `${backendUrl}api/regenerate-headline?name=${formData.name}&location=${formData.location}`
      );
      const data = await response.json();
      setBusinessData(prev => ({ ...prev, headline: data.headline }));
    } catch (err) {
      console.error('Error regenerating headline:', err);
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        formData,
        setFormData,
        businessData,
        loading,
        fetchBusinessData,
        regenerateHeadline,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
