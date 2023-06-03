import { markdownify } from "@lib/utils/textConverter";
import { Collapse, Text } from "@nextui-org/react";
import { useState } from "react";

function Faq({ data }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { title, faqs } = data;

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="accordion-item rounded-lg mb-4"
        >
          <button
            className="accordion-header flex items-center justify-between px-6 py-4 text-left w-full"
            onClick={() => handleClick(index)}
          >
            <span className="text-lg text-black font-bold">{faq.title}</span>
            {activeIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform rotate-180 transition-transform duration-500 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform duration-500 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeIndex === index && (
            <div className="accordion-body px-6 py-4 text-gray-700">
              {markdownify(faq.answer, "p", "faq-body mt-4")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
