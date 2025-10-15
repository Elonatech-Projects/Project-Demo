// src/components/ContactForm.js

'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [statusMessage, setStatusMessage] = useState('');
  const [showTopError, setShowTopError] = useState(false);

  const [form, setForm] = useState({
    // Step 1
    surname: '',
    otherNames: '',
    email: '',
    number: '',
    company: '',
    // Step 2
    requestType: '',
    product: '',
    description: '',
    quantity: '',
    date: '',
    contactMethods: {
      email: false,
      phone: false,
      mail: false,
      whatsapp: false,
    },
    // Step 3
    receiveUpdates: '',
    interestedProducts: '',
  });

  const [errors, setErrors] = useState({});

  const progressForStep = (s) => {
    if (s === 1) return 33;
    if (s === 2) return 66;
    return 100;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('contactMethods.')) {
      const key = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        contactMethods: { ...prev.contactMethods, [key]: checked },
      }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (s) => {
    const newErrors = {};
    if (s === 1) {
      if (!form.surname.trim()) newErrors.surname = 'Surname is required.';
      if (!form.otherNames.trim()) newErrors.otherNames = 'Other Names are required.';
      if (!form.email.trim()) newErrors.email = 'Email is required.';
      // naive phone validation
      if (!form.number.trim()) newErrors.number = 'Phone number is required.';
      if (!form.company.trim()) newErrors.company = 'Company name is required.';
    }
    if (s === 2) {
      if (!form.requestType.trim()) newErrors.requestType = 'Request type is required.';
      if (!form.product.trim()) newErrors.product = 'Please select a product/service.';
      if (!form.description.trim()) newErrors.description = 'Please provide a description.';
    }
    if (s === 3) {
      if (!form.receiveUpdates) newErrors.receiveUpdates = 'Please choose yes or no.';
      if (!form.interestedProducts) newErrors.interestedProducts = 'Please choose yes or no.';
    }
    return newErrors;
  };

  const goNext = () => {
    const validation = validateStep(step);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setShowTopError(true);
      setStatusMessage('There was a problem with your submission. Please review the fields below.');
      return;
    }
    setErrors({});
    setShowTopError(false);
    setStatusMessage('');
    setStep((s) => Math.min(3, s + 1));
  };

  const goPrevious = () => {
    setErrors({});
    setShowTopError(false);
    setStatusMessage('');
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateStep(step);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setShowTopError(true);
      setStatusMessage('There was a problem with your submission. Please review the fields below.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatusMessage('Message sent successfully!');
        setShowTopError(false);
        setForm({
          surname: '',
          otherNames: '',
          email: '',
          number: '',
          company: '',
          requestType: '',
          product: '',
          description: '',
          quantity: '',
          date: '',
          contactMethods: { email: false, phone: false, mail: false, whatsapp: false },
          receiveUpdates: '',
          interestedProducts: '',
        });
        setStep(1);
      } else {
        setStatusMessage('Something went wrong. Please try again.');
        setShowTopError(true);
      }
    } catch (err) {
      setStatusMessage('Network error. Please try again.');
      setShowTopError(true);
    }
  };

  return (
    <section className="max-w-2xl mx-auto bg-white p-6 rounded shadow-lg">
  <h2 className="text-xl font-semibold mb-4">Fill out the form below, and we&apos;ll get back to you promptly.</h2>

      {/* Top error banner */}
      {showTopError && (
        <div className="mb-4 border rounded p-3 bg-red-50 border-red-300 text-red-800">
          {statusMessage}
        </div>
      )}

      {/* Progress */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">Step {step} of 3 - {step === 1 ? 'Basic Information' : step === 2 ? 'Request Details' : 'Follow-UP'}</div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div className="h-3 bg-blue-600" style={{ width: `${progressForStep(step)}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <div>
            <label className="block font-medium">Full Name <span className="text-red-500">(Required)</span></label>
            <div className="flex gap-4 mt-2">
              <div className="flex-1">
                <input name="surname" value={form.surname} onChange={handleChange} placeholder="Surname" className={`w-full border rounded p-3 ${errors.surname ? 'border-red-500' : 'border-gray-200'}`} />
                <div className="text-sm text-gray-500 mt-1">Surname</div>
              </div>
              <div className="flex-1">
                <input name="otherNames" value={form.otherNames} onChange={handleChange} placeholder="Other names" className={`w-full border rounded p-3 ${errors.otherNames ? 'border-red-500' : 'border-gray-200'}`} />
                <div className="text-sm text-gray-500 mt-1">Other Names</div>
                {errors.otherNames && (
                  <div className="mt-3 p-3 border rounded bg-red-50 border-red-200 text-red-700">This field is required. Please complete the following fields: Other Names.</div>
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Email <span className="text-red-500">(Required)</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email Address" className={`w-full border rounded p-3 mt-2 ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />
                {errors.email && <div className="text-sm text-red-600 mt-2">{errors.email}</div>}
              </div>
              <div>
                <label className="block font-medium">Number <span className="text-red-500">(Required)</span></label>
                <input name="number" value={form.number} onChange={handleChange} placeholder="Phone Number" className={`w-full border rounded p-3 mt-2 ${errors.number ? 'border-red-500' : 'border-gray-200'}`} />
                {errors.number && <div className="text-sm text-red-600 mt-2">{errors.number}</div>}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium">Company Name <span className="text-red-500">(Required)</span></label>
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={`w-full border rounded p-3 mt-2 ${errors.company ? 'border-red-500' : 'border-gray-200'}`} />
              {errors.company && <div className="text-sm text-red-600 mt-2">{errors.company}</div>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div>
              <label className="block font-medium">Request type: <span className="text-red-500">(Required)</span></label>
              <select name="requestType" value={form.requestType} onChange={handleChange} className={`w-full border rounded p-3 mt-2 ${errors.requestType ? 'border-red-500' : 'border-gray-200'}`}>
                <option value="">Request type:</option>
                <option>Request for Quote</option>
                <option>Support Request</option>
                <option>General Enquiry</option>
              </select>
              {errors.requestType && <div className="text-sm text-red-600 mt-2">{errors.requestType}</div>}
            </div>

            <div className="mt-4">
              <label className="block font-medium">Product/Service of Interest <span className="text-red-500">(Required)</span></label>
              <select name="product" value={form.product} onChange={handleChange} className={`w-full border rounded p-3 mt-2 ${errors.product ? 'border-red-500' : 'border-gray-200'}`}>
                <option value="">Select Product/Service of Interest</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>IT Consultancy</option>
              </select>
              {errors.product && <div className="text-sm text-red-600 mt-2">{errors.product}</div>}
            </div>

            <div className="mt-4">
              <label className="block font-medium">Detailed description of the request <span className="text-red-500">(Required)</span></label>
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Detailed description of the request" className={`w-full border rounded p-3 mt-2 h-28 ${errors.description ? 'border-red-500' : 'border-gray-200'}`} />
              {errors.description && <div className="text-sm text-red-600 mt-2">{errors.description}</div>}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Quantity required (If applicable)</label>
                <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity required (If applicable)" className="w-full border rounded p-3 mt-2 border-gray-200" />
              </div>
              <div>
                <label className="block font-medium">Desired Completion/ Delivery Date</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full border rounded p-3 mt-2 border-gray-200" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium">Preferred Contact Method <span className="text-red-500">(Required)</span></label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2"><input type="checkbox" name="contactMethods.email" checked={form.contactMethods.email} onChange={handleChange} /> Email</label>
                <label className="flex items-center gap-2"><input type="checkbox" name="contactMethods.phone" checked={form.contactMethods.phone} onChange={handleChange} /> Phone</label>
                <label className="flex items-center gap-2"><input type="checkbox" name="contactMethods.mail" checked={form.contactMethods.mail} onChange={handleChange} /> Mail</label>
                <label className="flex items-center gap-2"><input type="checkbox" name="contactMethods.whatsapp" checked={form.contactMethods.whatsapp} onChange={handleChange} /> WhatsApp</label>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div>
              <label className="block font-medium">Would you like to receive updates on your request? <span className="text-red-500">(Required)</span></label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2"><input type="radio" name="receiveUpdates" value="yes" checked={form.receiveUpdates === 'yes'} onChange={handleChange} /> Yes</label>
                <label className="flex items-center gap-2"><input type="radio" name="receiveUpdates" value="no" checked={form.receiveUpdates === 'no'} onChange={handleChange} /> No</label>
              </div>
              {errors.receiveUpdates && <div className="text-sm text-red-600 mt-2">{errors.receiveUpdates}</div>}
            </div>

            <div className="mt-4">
              <label className="block font-medium">Are you interested in hearing about our other products/services? <span className="text-red-500">(Required)</span></label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2"><input type="radio" name="interestedProducts" value="yes" checked={form.interestedProducts === 'yes'} onChange={handleChange} /> Yes</label>
                <label className="flex items-center gap-2"><input type="radio" name="interestedProducts" value="no" checked={form.interestedProducts === 'no'} onChange={handleChange} /> No</label>
              </div>
              {errors.interestedProducts && <div className="text-sm text-red-600 mt-2">{errors.interestedProducts}</div>}
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div>
            {step > 1 && (
              <button type="button" onClick={goPrevious} className="px-4 py-2 rounded border">Previous</button>
            )}
          </div>

          <div>
            {step < 3 && (
              <button type="button" onClick={goNext} className="bg-red-600 text-white px-4 py-2 rounded">Next</button>
            )}
            {step === 3 && (
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
            )}
          </div>
        </div>
      </form>

      {statusMessage && !showTopError && (
        <div className="mt-4 p-3 rounded bg-green-50 border border-green-200 text-green-800">{statusMessage}</div>
      )}
    </section>
  );
}
