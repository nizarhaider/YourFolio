import { useState } from "react";
import Image from 'next/image';
import { Button } from "@nextui-org/react";

export const TemplatePreview = (templates) => {

  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);
  const [confirmedNext, setConfirmedNext] = useState(false);

  const onOptionChange = e => {
    setSelectedTemplate(e.target.value)
    setConfirmedNext(true)
    console.log("Selected Template:", e.target.value)
  }

  return (
    <div className="border-sky-500 container mx-auto border-2 border-solid ">
      {selectedOption === 1 && (
        <div>
          {/* <div className="mb-2">
          <h5>
            Pick your Template
          </h5>
        </div> */}
          <div className="border-sky-500 grid lg:grid-cols-2 justify-items-center gap-4 border-2 border-solid p-4">
            {templates.templates.map((template) => (
              <div
                className={`group relative h-full w-full overflow-hidden rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  ${
                  selectedTemplate === template.name
                    ? "border-4 border-solid border-teal-700 "
                    : ""
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center gap-3 opacity-0 transition duration-300 ease-in group-hover:opacity-100 ${
                    selectedTemplate === template.name ? "opacity-100" : ""
                  }`}
                >
                  <button
                    type="button"
                    h
                    class={`mb-2 mr-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 ${
                      selectedTemplate === template.name ? "hidden" : ""
                    }`}
                  >
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  </button>
                  {/* <button
                type="button"
                className={`mb-2 mr-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl  ${
                  selectedTemplate === template.name ? "" : ""
                }`}
                value={template.name}
                
                onClick={onOptionChange}
              >
                {selectedTemplate === template.name ? "Selected":"Select Template"}
              </button> */}
                  <input
                    id="medium"
                    name="topping"
                    type="radio"
                    value={template.name}
                    className="hidden"
                    checked={selectedTemplate === template.name}
                    onChange={() => {}}
                  />
                </div>
                <div
                  class={`absolute bottom-0 left-0 right-0 top-0 z-10  overflow-hidden rounded-lg bg-teal-700 opacity-0 transition duration-300 ease-in group-hover:opacity-60 ${
                    selectedTemplate === template.name ? "opacity-60" : ""
                  }`}
                ></div>
                <Image
                  className=" h-full w-full transform object-fill transition duration-500 group-hover:scale-110 "
                  src={template.image}
                  width={400}
                  height={200}
                  alt="website image"
                />
              </div>
            ))}
            ;
          </div>
        </div>
      )}
      {/* {selectedOption === 2 && (
        <div>
        <div className="mb-2">
          <h5>
            Upload your Resume
          </h5>
        </div>
          <div>
            <div class="mb-3">
              <input
                class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-teal-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-teal-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-white focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:file:bg-teal-500 dark:file:text-white dark:focus:border-primary"
                id="formFileLg"
                type="file" 
                />
            </div>
          </div>
          </div>
          
        )} */}
      {/* {selectedOption === 3 && (
          <div>
            
          </div>
        )} */}
      {/* <div className="flex w-full justify-items-center justify-center mt-4 gap-4">
          <button type="button" 
          class={`text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800 ${selectedOption < 2 ? "hidden":""}`}
          onClick={() => {
                      if (selectedOption > 1) {
                        setSelectedOption(selectedOption - 1);
                      }
                    }}
          >
              <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L3.414 9H15a1 1 0 110 2H3.414l4.293 4.293a1 1 0 01-1.414 1.414z" clip-rule="evenodd"></path></svg>
              Previous
          </button>

          <button type="button" 
          class={`text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800 ${confirmedNext ? "":"hidden"}`}
          onClick={() => {
                      if (selectedOption < 4) {
                        setSelectedOption(selectedOption + 1);
                      setConfirmedNext(false)
                      }
                    }}
          >
              Next
              <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div> */}
    </div>
  );
};  