import React from 'react';
import BusinessForm from './components/BusinessForm';
import DisplayCard from './components/DisplayCard';
import { BusinessProvider } from './context/BusinessContext';

function App() {
  return (
    <BusinessProvider>
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center font-roboto">
        <h1 className="text-2xl font-bold mb-6 text-center">Local Business Dashboard</h1>
        <BusinessForm />
        <DisplayCard />
      </div>
    </BusinessProvider>
  );
}

export default App;
