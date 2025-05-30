const PopularCourse1 = () => {
    const cardInfo = [
      {
        imgUrl: "/assets/images/monster.jpg",
        title: "Dress",
        descrition: "Create 3D With Blender",
      },
      {
        imgUrl: "/assets/images/marketing.jpg",
        title: "Business",
        descrition: "Digital Marketin",
      },
      {
        imgUrl: "/assets/images/ui.jpg",
        title: "CODE",
        descrition: "Slicing Ui With Tailwindcss",
      },
      {
        imgUrl: "/assets/images/monster.jpg",
        title: "Design",
        descrition: "Create 3D With Blender",
      },
      {
        imgUrl: "/assets/images/image2.png",
        title: "Business",
        descrition: "Digital Marketin",
      },
    ];
    return (
      <div className="flex flex-row gap-2 ml-3 overflow-x-auto hide-scrollbar">
        {cardInfo.map((card) => (
          <div
            className="flex flex-col gap-2 border border-gray-300 p-2 rounded-[10px] w-52 bg-white flex-shrink-0"
            key={card.title}
          >
            <div className="flex justify-center items-center">
              <img
                src={card.imgUrl}
                alt={card.title}
                className="h-40 w-40 rounded-[10px]"
              />
            </div>
            <p className="font-medium text-[15px] text-blue-500 ml-5">
              {card.title}
            </p>
            <p className="font-semibold text-[18px] text-black ml-5">
              {card.descrition}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PopularCourse1;
  