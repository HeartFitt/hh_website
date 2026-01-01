import React from "react";

type TextInputProps = {
  label: React.ReactNode;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">
      {required && <span className="text-red-500 mr-1">*</span>}
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-700 focus:ring-neutral-100"} focus:outline-none focus:ring-2`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

type DropdownProps = {
  label: React.ReactNode;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  error?: string;
  required?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">
      {required && <span className="text-red-500 mr-1">*</span>}
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-700 focus:ring-neutral-100"} focus:outline-none focus:ring-2`}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

type CheckboxProps = {
  label: React.ReactNode;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  error,
  required,
}) => (
  <div className="mb-4">
    <label className="inline-flex items-start">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 text-blue-600"
      />
      <span className="ml-2 text-sm">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </span>
    </label>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

type TextAreaProps = {
  label: React.ReactNode;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  rows?: number;
  required?: boolean;
};

export const TextAreaField: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  rows = 4,
  required,
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">
      {required && <span className="text-red-500 mr-1">*</span>}
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full rounded-md bg-neutral-800 text-neutral-100 p-2 border ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-700 focus:ring-neutral-100"} focus:outline-none focus:ring-2 resize-none`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);
