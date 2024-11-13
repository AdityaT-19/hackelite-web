import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";
import Contact from "./Contact"
import faqdata from "../../public/data/faq-data";
function Faq() {
  const [faqs, setFaqs] = React.useState([]);
  useEffect(()=>{
    setFaqs(faqdata)
  })
 
  return (
    <div className="h-full pt-3 bg-black min-h-screen w-full flex flex-col justify-center items-center p-1">
      <div className="flex flex-col w-11/12 justify-center items-center">

            <div className="text-2xl flex  items-baseline gap-0   w-full justify-between font-bold">
                <div className="outside flex items-baseline   ">
                  <div className="inside text-purple bg-faq border-r-0 border border-[#58ff1638] text-xl items-center pl-3  flex">FAQ</div>
                </div>
                <div className="w-full border  bg-faq border-[#58ff1638] border-l-0 right-1 relative bottom-1  h-2"></div>
            </div>
            <div className="w-full justify-center  items-center flex flex-col">
                  {faqs.map((faq,idx)=>{
                    return <Accordion key={idx} question={faq.question} answer={faq.answer}></Accordion>
                  })}
            </div>
      </div>
      <br />
    <Contact></Contact>
    </div>
  );
}
function Accordion({question,answer}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="flex justify-between border border-[#58ff1638] text-white w-full bg-black mt-5 p-3" >
                <div className="w-11/12">
                    <p className="text-xl">{question}</p>
                    <p  className={`transition-all    sm:text-center text-lg mx-2 duration-500 overflow-hidden ${
                      isOpen ? 'max-h-fit opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>{answer}</p>
                </div>
                <div className="text-3xl cursor-pointer " onClick={()=>{
                  toggleAccordion()
                }}>
                    {!isOpen?<MdOutlineKeyboardArrowDown />:<MdOutlineKeyboardArrowUp />} 
               </div>
    </div>
  )
}

export default Faq;
