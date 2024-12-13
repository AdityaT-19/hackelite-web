const Modal = ({ title, message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-8 flex justify-center items-center z-50 ">
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 rounded-lg  p-6 shadow-lg w-[50rem] h-[25vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-500 mb-4">{title}</h2>
          <p className="text-white text-xl mb-4">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
