import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  metrics: string[];
  image: string;
}

export default function CaseStudyCard({
  title,
  description,
  metrics,
  image,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-blue-600"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}