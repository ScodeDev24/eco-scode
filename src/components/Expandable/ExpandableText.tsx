'use client'
import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  limit: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-4">
      <p>
        {isExpanded ? text : `${text.substring(0, limit)}...`}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isExpanded ? 'Leer menos' : 'Leer más'}
      </button>
    </div>
  );
};

export default ExpandableText;
