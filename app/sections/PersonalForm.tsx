import React, { useState } from 'react';
import Button from '~/hkit/Button';
import { CheckIcon } from '@phosphor-icons/react';
import { createLead, type LeadCreate } from "~/utils/api";

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

const TextInput = ({ label, name, type = 'text', value, onChange }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
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
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Map UI fields to API model
    const [first, ...rest] = formData.name.trim().split(' ').filter(Boolean);
    const First_Name = first || undefined;
    const Last_Name = rest.length ? rest.join(' ') : first || 'Unknown'; // Zoho requires Last_Name

    const payload: LeadCreate = {
      First_Name,
      Last_Name,
      Email: formData.email || undefined,
      Phone: formData.phone || undefined,
      Lead_Source: 'Website',
      Lead_Type: 'Personal',
      Description: `Goals: ${formData.goals}\nDoctor approved: ${formData.docApproved}\nOwns HR strap: ${formData.ownsStrap}`,
    };

    setSubmitting(true);
    try {
      const res = await createLead(payload);
      alert('Thanks! Your information was submitted.');
      // Optional: reset form
      setFormData({ name: '', email: '', phone: '', goals: '', docApproved: '', ownsStrap: '' });
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
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.goals.trim() !== '' &&
    formData.docApproved !== '' &&
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
        type="phone"
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

      <Button
        label={submitting ? 'Submitting…' : 'Submit'}
        onClick={handleSubmit}
        icon={<CheckIcon />}
        disabled={!isFormValid || submitting}
        fillWidth
        />
    </form>
  );
};

export default ContactForm;
