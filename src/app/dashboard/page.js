import React from "react";

const page= () => {
  // Sample data for the four cards
  const cards = [
    { name: "Card 1", prize: "$100" },
    { name: "Card 2", prize: "$200" },
    { name: "Card 3", prize: "$300" },
    { name: "Card 4", prize: "$400" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
     
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow-md rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {card.name}
              </h2>
              <p className="mt-2 text-gray-600">Prize: {card.prize}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
