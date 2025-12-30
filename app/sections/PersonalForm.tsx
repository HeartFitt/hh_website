import React, { useState } from 'react';
import Button from '~/hkit/Button';
import { Check } from 'lucide-react';
import { createLead, type LeadCreate } from "~/utils/api";
import { Link } from 'react-router';

const TextAreaField = ({ label, name, value, onChange, error, rows = 4 }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-neutral-100'} focus:outline-none focus:ring-2 resize-none`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const TextInput = ({ label, name, type = 'text', value, onChange, error }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium w-full">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-neutral-100'} focus:outline-none focus:ring-2`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const Dropdown = ({ label, name, value, onChange, options, error }: any) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-neutral-100'} focus:outline-none focus:ring-2`}
    >
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const RadioGroup = ({ label, name, value, onChange, error }: any) => (
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
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const Checkbox = ({ label, name, checked, onChange, error }: any) => (
  <div className="mb-4">
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-sm">{label}</span>
    </label>
  </div>
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d{10,15}$/; // Accepts 10-15 digits, optional +

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    goals: '',
    docApproved: false,
    ownsStrap: false,
    optOutSMS: false,
    optOutEmail: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    goals: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'firstName':
        return value.trim() ? '' : 'First name is required.';
      case 'lastName':
        return value.trim() ? '' : 'Last name is required.';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!emailRegex.test(value)) return 'Invalid email format.';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone is required.';
        if (!phoneRegex.test(value)) return 'Invalid phone format. Use digits only, e.g. +1234567890';
        return '';
      case 'goals':
        return value.trim() ? '' : 'Please describe your goals.';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
    const { name } = e.target;
    const value = isCheckbox ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData(prev => ({ ...prev, [name]: value }));
    if (typeof value === 'string') {
      setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const validateForm = () => {
    const errors: typeof formErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      goals: validateField('goals', formData.goals),
    };
    setFormErrors(errors);
    return Object.values(errors).every(err => !err);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload: LeadCreate = {
      First_Name: formData.firstName,
      Last_Name: formData.lastName,
      Email: formData.email || undefined,
      Phone: formData.phone || undefined,
      Lead_Source: 'Website',
      Lead_Type: 'Personal',
      Description: JSON.stringify({
        docApproved: formData.docApproved,
        ownsStrap: formData.ownsStrap,
        goals: formData.goals,
      }) as string,
      Opt_Out_SMS: formData.optOutSMS,
      Opt_Out_Email: formData.optOutEmail,
    };

    setSubmitting(true);
    try {
      await createLead(payload);
      alert('Thanks! Your information was submitted.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', goals: '', docApproved: false, ownsStrap: false, optOutSMS: false, optOutEmail: false });
      setFormErrors({ firstName: '', lastName: '', email: '', phone: '', goals: ''});
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

  const isFormValid = Object.values(formErrors).every(err => !err) &&
    Object.values(formData).every(val =>
      typeof val === 'string' ? val.trim() !== '' : true
    );

  return (
    <form onSubmit={handleSubmit} className="max-w-[50rem] mx-auto lg:p-6 p-2 text-neutral-100">
      <h2 className="text-2xl font-semibold mb-1 text-center">Join the Waitlist</h2>
      <p className="text-sm text-center mb-6">Help us personalize your fitness journey by answering a few questions</p>

      <div className='grid grid-cols-2 gap-2 justify-stretch'>
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={formErrors.firstName}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={formErrors.lastName}
        />
      </div>
      <TextInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <TextInput
        type="phone"
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={formErrors.phone}
      />

      <Checkbox
        label="Doctor has approved me to workout"
        name="docApproved"
        checked={formData.docApproved}
        onChange={handleChange}
      />
      <Checkbox
        label="I own a Bluetooth HR strap"
        name="ownsStrap"
        checked={formData.ownsStrap}
        onChange={handleChange}
      />

      <TextAreaField
        label="Goals"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
        error={formErrors.goals}
      />

      <div className="my-4">
        <span className='flex gap-1'>
          <p className="text-sm text-center">By submitting this form, you agree to our </p>
          <Link to="/privacy-policy" target='_blank' className='underline '>Privacy Policy.</Link>
        </span>
      </div>

      <Checkbox
        label="Opt-out of SMS notifications"
        name="optOutSMS"
        checked={formData.optOutSMS}
        onChange={handleChange}
      />

      <Checkbox
        label="Opt-out of Email notifications"
        name="optOutEmail"
        checked={formData.optOutEmail}
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
