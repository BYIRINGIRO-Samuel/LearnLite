const AdminCards = () => {
  const carddata = [
    {
      text: "Total Teachers",
      count: 20,
      bgcolor: "bg-blue-400",
    },
    {
      text: "Total Students",
      count: 20,
      bgcolor: "bg-indigo-700",
    },
    {
      text: "Total Classes",
      count: 20,
      bgcolor: "bg-blue-500",
    },
    {
      text: "Total Courses",
      count: 20,
      bgcolor: "bg-rose-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {carddata.map((card, index) => (
        <div
          className={`flex flex-col gap-3 border border-blue-200 rounded-[15px] py-6 px-4 ${card.bgcolor} w-52 m-2 flex-shrink-0`}
          key={index}
        >
          <p className="text-white font-bold">{card.text}</p>
          <p className="text-white text-[25px]">{card.count}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminCards;
