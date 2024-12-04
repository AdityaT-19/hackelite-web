import React from "react";
import ConfettiExplosion from "react-confetti-explosion";
import SIData from "../assets/fss.json";
import BPData from "../assets/fsb.json";

import { Modal, ModalTrigger, ModalBody, ModalContent } from "./animated-modal";
function ResultsPopover({ domain }) {
  return (
    <div className="relative rounded-lg sm:p-6 z-30">
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 border-r-2 border-[#4ade4a]/30 flex flex-col items-center py-6 gap-4 sm:gap-6 max-lg:hidden">
        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#4ade4a]/40 transform rotate-45"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4ade4a]/40 flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-[#4ade4a]/40"></div>
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4ade4a]/40 rounded-full"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#4ade4a]/40 transform rotate-45"></div>
      </div>

      <div className="lg:pl-12">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-50 dark:text-white">
              {domain.buttonTitle} (Results)
            </h2>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-white/90">
          <div>
            <h3 className="text-[#4ade4a] font-bold mb-1 sm:text-xl text-[.9rem]">
              • Focus Area:{" "}
              <span className="text-zinc-50 dark:text-white font-semibold">
                {domain.focusArea}
              </span>
            </h3>
          </div>
          <ResultTable domain={domain} />
        </div>
      </div>
    </div>
  );
}

const ResultsModal = ({ domain }) => (
  <Modal>
    <ModalTrigger className="w-full">
      <div
        className="bg-[#b880df] h-20 sm:w-96 w-64 text-xl sm:text-3xl font-semibold text-white text-center flex items-center justify-center rounded-lg"
        style={{
          clipPath:
            "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
        }}
      >
        Results for {domain.buttonTitle}
      </div>
    </ModalTrigger>
    <ModalBody className={"overflow-y-scroll no-scrollbar"}>
      <ModalContent className="w-full max-w-[100vw] h-full">
        <ConfettiExplosion
          force={0.5}
          duration={5000}
          particleCount={250}
          zIndex={100}
          width={1600}
          className="w-screen h-screen fixed left-[50%]"
        />
        <ResultsPopover domain={domain} />
      </ModalContent>
    </ModalBody>
  </Modal>
);

// there are 2 domains social innovation and business product

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 lg:pt-6 lg:flex-row z-50">
      <ResultsModal
        domain={{
          title: "Social Innovation with Healthcare",
          focusArea: "Healthcare",
          buttonTitle: "Social Innovation",
        }}
      />
      <ResultsModal
        domain={{
          title: "Business Product with Smart Infrastructure",
          focusArea: "Smart Infrastructure",
          buttonTitle: "Business Product",
        }}
      />
    </div>
  );
};

export default Results;

const ResultTable = ({ domain }) => {
  // need to display a table with the following columns:
  // Sl No. | Team name | College

  const columns = [
    {
      Header: "SL No.",
      accessor: "SL No.",
    },
    {
      Header: "Team Name",
      accessor: "Team Name",
    },
    {
      Header: "University / College Name",
      accessor: "University / College Name",
    },
  ];

  const data = domain.buttonTitle === "Social Innovation" ? SIData : BPData;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-[#4ade4a]/30 rounded-lg">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.Header}
                className="border border-[#4ade4a]/30 bg-[#4ade4a]/20 text-[#4ade4a] font-bold text-center"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row["SL No."]} className="hover:bg-[#4ade4a]/10">
              {columns.map((column) => (
                <td
                  key={column.Header}
                  className="border border-[#4ade4a]/30 text-center"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
