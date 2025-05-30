import { Link } from "react-router-dom";

const OverviewCards1 = () => {
  const cardInfo = [
   
    {
      color: "bg-green-600",
      text: "Lessons completed",
      count: 20,
      barcolor: "bg-green-600",
    },
    {
      color: "bg-green-600",
      text: "Quizes Provided",
      count: 20,
      barcolor: "bg-green-600",
    },
    {
      color: "bg-green-600",
      text: "Assignments uploaded",
      count: 20,
      barcolor: "bg-green-600",
    },
  ];

  return (
    <div className="flex gap-4 ml-3 overflow-x-auto hide-scrollbar pb-4">
      {cardInfo.map((card) => (
        <Link to="/teacherdashboard" key={card.text}>
          <div
            className="flex flex-col border border-blue-200 rounded-[10px] p-4 cursor-pointer bg-white hover:bg-sky-100 w-60 flex-shrink-0"
          >
            <div className="flex flex-row gap-2 items-center">
              <div className={`w-3 h-3 ${card.color} rounded-[2px]`} />
              <p className="text-gray-400 text-sm">{card.text}</p>
            </div>
            <p className="mt-10 text-4xl font-semibold">{card.count}</p>
            <div className={`h-[2px] w-12 mt-2 ${card.barcolor}`} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OverviewCards1;
