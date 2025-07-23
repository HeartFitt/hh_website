import React, { useState } from 'react';
import Button from '~/hkit/Button';
import { CheckIcon } from '@phosphor-icons/react';

const TextAreaField = ({ label, name, value, onChange, rows = 4 }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100 resize-none"
    />
  </div>
);

const TextInput = ({ label, name, value, onChange }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
    />
  </div>
);

const Dropdown = ({ label, name, value, onChange, options }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
    >
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, name, value, onChange }: any) => (
  <div className="mb-6">
    <p className="mb-2 text-sm font-medium">{label}</p>
    <label className="mr-4">
      <input
        type="radio"
        name={name}
        value="Yes"
        checked={value === 'Yes'}
        onChange={onChange}
        className="mr-1"
      />
      Yes
    </label>
    <label>
      <input
        type="radio"
        name={name}
        value="No"
        checked={value === 'No'}
        onChange={onChange}
        className="mr-1"
      />
      No
    </label>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    docApproved: '',
    ownsStrap: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form.');
    }
  };

  const isFormValid =
  formData.name.trim() !== '' &&
  formData.email.trim() !== '' &&
  formData.phone.trim() !== '' &&
  formData.goals.trim() !== '' &&
  formData.docApproved !== '';
  formData.ownsStrap !== '';

  return (
    <form onSubmit={handleSubmit} className="max-w-[50rem] mx-auto lg:p-6 p-2 text-neutral-100">
      <h2 className="text-2xl font-semibold mb-1 text-center">Join the Waitlist</h2>
      <p className="text-sm text-center mb-6">Help us personalize your fitness journey by answering a few questions</p>

      <TextInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextInput
        label="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <TextAreaField
        label="Goals"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
      />
      <RadioGroup
        label="Doctor has approved me to workout"
        name="docApproved"
        value={formData.docApproved}
        onChange={handleChange}
      />
      <RadioGroup
        label="I own a Bluetooth HR strap"
        name="ownsStrap"
        value={formData.ownsStrap}
        onChange={handleChange}
      />

      {/* 🔁 Use your Button component here */}
      <Button
        label="Submit"
        onClick={handleSubmit}
        icon={<CheckIcon />}
        disabled={!isFormValid}
        fillWidth
        />
    </form>
  );
};

export default ContactForm;
