import React, { createContext } from 'react';
import axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
  axios.defaults.baseURL = 'http://localhost:3000';

  const apiCall = async (method, url, data = null) => {
    try {
      const response = await axios({
        method,
        url,
        data,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AxiosContext.Provider value={{ apiCall }}>
      {children}
    </AxiosContext.Provider>
  );
}
