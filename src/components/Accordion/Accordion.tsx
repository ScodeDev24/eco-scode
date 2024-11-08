'use client'
import { useState } from 'react';
import Image from 'next/image';
interface DataItem {
  topic: string;
  description: string[];
}
interface DataProps {
  generalData: DataItem[];
  isList:boolean;

}


export default function Accordion({ generalData, isList }: DataProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Cierra la pregunta si ya está abierta
    } else {
      setOpenQuestion(index); // Abre la pregunta seleccionada
    }
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">

      <div className="lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
        {generalData.map((value, index) => (
          <div key={index}>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
            <div className="w-full md:px-6">
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="flex justify-center items-center dark:text-darkBlue font-medium text-base leading-6 text-gray-800">
                    <span className="lg:mr-6 mr-4 dark:text-darkBlue lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      {index + 1}.
                    </span>
                    {value.topic}
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  onClick={() => toggleQuestion(index)}
                >
                <Image
                  className={`transform ${openQuestion === index ? 'rotate-180' : ''}`}
                  src="/up_arrow.svg"
                  alt="toggler"
                  width={20}  
                  height={20}
                />
                </button>
              </div>
              <div className={`${openQuestion === index ? 'block' : 'hidden'} mt-6 w-full`}>
                <div className="text-base leading-6 text-gray-600 dark:text-darkBlue font-normal">
                  {isList ? (
                    <ul>
                    {value.description.map((desc, descIndex) => (
                      <li key={descIndex}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  ) :
                  value.description.map((desc, descIndex) => (
                    <p key={descIndex}>
                      {desc}
                    </p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}