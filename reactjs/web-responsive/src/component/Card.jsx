import { AiFillAlert } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300">
          <AiFillAlert
            className="mx-auto mt-[-3rem] text-[#00df9a]"
            size={30}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <h2 className="font-bold text-center text-4xl">$149</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md text-[#00df9a] font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300">
          <AiFillAlert
            className="mx-auto mt-[-3rem] text-[#00df9a]"
            size={30}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <h2 className="font-bold text-center text-4xl">$149</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md text-[#00df9a] font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300">
          <AiFillAlert
            className="mx-auto mt-[-3rem] text-[#00df9a]"
            size={30}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <h2 className="font-bold text-center text-4xl">$149</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md text-[#00df9a] font-medium my-6 mx-auto py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
