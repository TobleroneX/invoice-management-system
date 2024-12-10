import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InvoiceGenerator = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    invoiceNumber: '',
    amount: ''
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Rechnung erstellen</h1>
      <div className="space-y-2">
        <Label>Kundenname</Label>
        <Input
          value={formData.customerName}
          onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
        />
      </div>
      <Button>Erstellen</Button>
    </div>
  );
};

export default InvoiceGenerator;