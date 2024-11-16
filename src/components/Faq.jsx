import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";
import faqdata from "../constants/faqdata"


function Faq() {

  const [faqs,setfaqs]=useState([]);
  useEffect(()=>{
    async function getdata(){
        setfaqs(faqdata)
    }
    getdata()
  })
 
  return (
    <div id='faq' className="h-full pt-3 bg-black min-h-screen w-full flex flex-col justify-center items-center p-1">
      <div className="flex flex-col w-11/12  justify-center items-center">

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
     
    </div>
  );
}
function Accordion({question,answer}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div  onClick={()=>{ toggleAccordion()}} className="flex justify-between border border-[#58ff1638] text-white cursor-pointer w-full bg-black mt-5 p-3" >
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="text-xl">{question}</p>
                    <div className="text-3xl cursor-pointer ">
                        {!isOpen?<MdOutlineKeyboardArrowDown />:<MdOutlineKeyboardArrowUp />} 
                  </div>
                  </div>
                    <p  className={`transition-all tracking-tighter    text-center text-lg mx-2 duration-500 overflow-hidden ${
                      isOpen ? 'max-h-fit opacity-100 mt-3 font-bold sm:font-normal' : 'max-h-0 opacity-0'
                    }`}>{answer}</p>
                </div>
    </div>
  )
}

export default Faq;
