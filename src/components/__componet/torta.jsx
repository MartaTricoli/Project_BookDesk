import React, { useState } from "react";
import 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";

const Torta = () => {
  const [dataValues, setDataValues] = useState([2, 3, 4]);
  const labels = ["Libri Letti", "Libri da Leggere", "Libri in lettura"];

  const handleChange = (index, value) => {
    setDataValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleIncrement = (index) => {
    handleChange(index, dataValues[index] + 1);
  };

  const handleDecrement = (index) => {
    handleChange(index, dataValues[index] - 1);
  };

  return (
    <div className="flex justify-between max-w-[700px] flex-col mb-20">
      <div className="w-[300px] mb-10">
        <Doughnut
          data={{
            labels: labels,
            datasets: [
              {
                data: dataValues,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              },
            ],
          }}
          options={{
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  const currentValue = data.datasets[0].data[tooltipItem.index];
                  return `${labels[tooltipItem.index]}: ${currentValue}`;
                },
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        {dataValues.map((value, index) => (
          <div key={index} className="mb-4 flex">
            <label className="mr-2">{`${labels[index]}:`}</label>
            <button onClick={() => handleDecrement(index)} className="px-2 py-1 bg-blue-500 text-white">-</button>
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(index, parseInt(e.target.value))}
              className="mx-2 px-2 py-1 border border-gray-300 w-auto max-w-[50px]"
            />
            <button onClick={() => handleIncrement(index)} className="px-2 py-1 bg-blue-500 text-white">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Torta;
