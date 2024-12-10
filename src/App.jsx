import React from 'react';
import InvoiceGenerator from './components/InvoiceGenerator';
import { AuthProvider } from './components/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <InvoiceGenerator />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;