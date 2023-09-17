import Laptop from "../assets/laptop.webp";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOAR</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytic
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            rerum facilis, tempore iure quibusdam voluptate quaerat maxime
            impedit, magnam veritatis consectetur ullam fugit minus incidunt,
            sunt distinctio culpa corporis odio.
          </p>
          <button className="bg-black w-[200px] rounded-md text-[#00df9a] font-medium my-6 md:mx-0 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
