import React, { useState } from 'react';
import Button from '~/hkit/Button';
import { Check } from 'lucide-react';
import { createLead, type LeadCreate } from "~/utils/api";

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
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const [first, ...rest] = formData.contactName.trim().split(' ').filter(Boolean);
    const First_Name = first || undefined;
    const Last_Name = rest.length ? rest.join(' ') : first || 'Unknown';

    const payload: LeadCreate = {
      First_Name,
      Last_Name,
      Company: formData.clubName || undefined,
      Street: formData.clubAddress || undefined,
      Lead_Source: 'Website',
      Lead_Type: 'Business',
      Description: `Member count: ${formData.memberCount}\nOffers cycling: ${formData.offersCycling}`,
    };

    setSubmitting(true);
    try {
      await createLead(payload);
      alert('Thanks! Your information was submitted.');
      setFormData({ contactName: '', clubName: '', clubAddress: '', memberCount: '0 - 50', offersCycling: '' });
    } catch (err: any) {
      const status = err?.status as number | undefined;
      if (status === 400) {
        alert(`Please check your info: ${err.message || 'Validation failed.'}`);
      } else if (status === 502) {
        alert('Sorry, our CRM is unavailable right now. Please try again later.');
      } else {
        alert('Unexpected error. Please try again.');
      }
      console.error(err);
    } finally {
      setSubmitting(false);
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

      <Button
        label={submitting ? 'Submitting…' : 'Submit'}
        onClick={handleSubmit}
        icon={<Check />}
        disabled={!isFormValid || submitting}
        fillWidth
        />
    </form>
  );
};

export default ContactForm;
