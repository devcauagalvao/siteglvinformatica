import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role} {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
}