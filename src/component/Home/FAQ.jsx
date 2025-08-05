import { useState } from 'react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all our products. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please ensure the product is in its original packaging and condition.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location. Standard shipping within the country typically takes 3-5 business days. International shipping can take up to 15 business days. We also offer expedited shipping options at checkout.",
  },
  {
    question: "Are your products covered by a warranty?",
    answer: "Yes, all our products come with a one-year manufacturer's warranty. This covers any defects in material or workmanship. For more details, please visit our warranty page.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Absolutely! Our expert support team is available 24/7 to help you with any technical issues. You can reach us via email, phone, or live chat. We're always here to help you get the most out of your gadgets.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a wide range of payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment platforms. Your transaction is always safe and secure with us.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-gray-800"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-6 pt-0 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;