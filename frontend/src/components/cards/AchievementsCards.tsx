const AchievementsCards = () => {
  const Info = [
    {
      title: "Lessons completed",
      number: 40,
      percent: "97.56%",
    },
    {
      title: "Quizes completed",
      number: 20,
      percent: "97.56%",
    },
    {
      title: "Assignments completed",
      number: 90,
      percent: "97.56%",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-10">
      {Info.map((card) => (
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between" key={card.title}>
          <div>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-2xl font-bold">{card.number}</p>
          </div>
          <div className="text-green-500 text-sm">~{card.percent}</div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsCards;
