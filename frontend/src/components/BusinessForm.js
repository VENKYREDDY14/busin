import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import Spinner from './Spinner';

const BusinessForm = () => {
  const { formData, setFormData, loading, fetchBusinessData } = useBusiness();
  const [errors, setErrors] = useState({ name: '', location: '' });

  const validate = () => {
    const tempErrors = { name: '', location: '' };
    let valid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Business name is required';
      valid = false;
    }
    if (!formData.location.trim()) {
      tempErrors.location = 'Location is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) fetchBusinessData();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Business Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Cake & Co"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Mumbai"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {loading && <Spinner />}
    </>
  );
};

export default BusinessForm;
