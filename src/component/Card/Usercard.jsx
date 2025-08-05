/* eslint-disable react/prop-types */
import { FaQuoteLeft } from 'react-icons/fa';

const Usercard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
      <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
      <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
      <div>
        <p className="font-bold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  );
};

export default Usercard;