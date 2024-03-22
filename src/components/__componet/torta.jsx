import React, { useState, useEffect } from "react";
import 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";

const Torta = () => {
  const [libriLetiCount, setLibriLetiCount] = useState(() => {
    return parseInt(localStorage.getItem('libriLetiCount')) || 0;
  });
  const [libriDaLeggereCount, setLibriDaLeggereCount] = useState(() => {
    return parseInt(localStorage.getItem('libriDaLeggereCount')) || 0;
  });
  const [libriInLetturaCount, setLibriInLetturaCount] = useState(() => {
    return parseInt(localStorage.getItem('libriInLetturaCount')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('libriLetiCount', libriLetiCount.toString());
  }, [libriLetiCount]);

  useEffect(() => {
    localStorage.setItem('libriDaLeggereCount', libriDaLeggereCount.toString());
  }, [libriDaLeggereCount]);

  useEffect(() => {
    localStorage.setItem('libriInLetturaCount', libriInLetturaCount.toString());
  }, [libriInLetturaCount]);

  const labels = ["Libri Letti", "Libri da Leggere", "Libri in lettura"];

  const handleChange = (index, value) => {
    switch(index) {
      case 0:
        setLibriLetiCount(value);
        break;
      case 1:
        setLibriDaLeggereCount(value);
        break;
      case 2:
        setLibriInLetturaCount(value);
        break;
      default:
        break;
    }
  };

  const handleIncrement = (index) => {
    handleChange(index, getValue(index) + 1);
  };

  const handleDecrement = (index) => {
    handleChange(index, getValue(index) - 1);
  };

  const getValue = (index) => {
    switch(index) {
      case 0:
        return libriLetiCount;
      case 1:
        return libriDaLeggereCount;
      case 2:
        return libriInLetturaCount;
      default:
        return 0;
    }
  };

  return (
    <div className="flex justify-between max-w-[700px] flex-col mb-20">
      <div className="w-[300px] mb-10">
        <Doughnut
          data={{
            labels: labels,
            datasets: [
              {
                data: [libriLetiCount, libriDaLeggereCount, libriInLetturaCount],
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
        {[0, 1, 2].map((index) => (
          <div key={index} className="mb-4 flex">
            <label className="mr-2">{`${labels[index]}:`}</label>
            <button onClick={() => handleDecrement(index)} className="px-2 py-1 bg-blue-500 text-white">-</button>
            <input
              type="number"
              value={getValue(index)}
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
