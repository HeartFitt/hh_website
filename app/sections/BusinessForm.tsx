import React, { useState } from 'react';
import Button from '~/hkit/Button';
import { CheckIcon } from '@phosphor-icons/react';

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
    contactName: '',
    clubName: '',
    clubAddress: '',
    memberCount: '0 - 50',
    offersCycling: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  formData.contactName.trim() !== '' &&
  formData.clubName.trim() !== '' &&
  formData.clubAddress.trim() !== '' &&
  formData.offersCycling !== '';

  return (
    <form onSubmit={handleSubmit} className="max-w-[50rem] mx-auto lg:p-6 p-2 text-neutral-100">
      <h2 className="text-2xl font-semibold mb-1 text-center">Let’s Chat.</h2>
      <p className="text-sm text-center mb-6">Interested in becoming a HeartHero Hub?</p>

      <TextInput
        label="Contact Name"
        name="contactName"
        value={formData.contactName}
        onChange={handleChange}
      />
      <TextInput
        label="Club Name"
        name="clubName"
        value={formData.clubName}
        onChange={handleChange}
      />
      <TextInput
        label="Club Address"
        name="clubAddress"
        value={formData.clubAddress}
        onChange={handleChange}
      />
      <Dropdown
        label="Member Count"
        name="memberCount"
        value={formData.memberCount}
        onChange={handleChange}
        options={[
          '0 - 50',
          '51 - 100',
          '101 - 250',
          '251 - 500',
          '500+',
        ]}
      />
      <RadioGroup
        label="We offer spinning / indoor cycling / cardio theatre classes"
        name="offersCycling"
        value={formData.offersCycling}
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
