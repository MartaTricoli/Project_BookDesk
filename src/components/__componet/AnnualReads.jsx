import React, { useState, useEffect } from "react";
import 'chart.js/auto'
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const [dataValues, setDataValues] = useState([2, 5, 7]);
  const [newNumber, setNewNumber] = useState("");
  const [yearToRemove, setYearToRemove] = useState("");
  const [backgroundColors, setBackgroundColors] = useState([]);

  useEffect(() => {
    // Genera i colori casuali solo quando il componente si monta
    const colors = dataValues.map(() => generateRandomColor());
    setBackgroundColors(colors);
  }, []);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addDataPoint = () => {
    if (newNumber) {
      setDataValues((prevValues) => [...prevValues, parseInt(newNumber)]);
      setNewNumber("");
      setBackgroundColors((prevColors) => [...prevColors, generateRandomColor()]);
    }
  };

  const removeDataPointByYear = () => {
    const yearToRemoveInt = parseInt(yearToRemove);
    setDataValues((prevValues) => {
      const indexToRemove = prevValues.findIndex((_, index) => (index + 2021) === yearToRemoveInt);
      if (indexToRemove !== -1) {
        const updatedDataValues = [...prevValues];
        updatedDataValues.splice(indexToRemove, 1);
        return updatedDataValues;
      }
      return prevValues;
    });
    setYearToRemove("");
  };

  useEffect(() => {
    setBackgroundColors(dataValues.map(() => generateRandomColor()));
  }, [dataValues]);

  const labels = dataValues.map((_, index) => String(2020+index+1));

  return (
    <div className="flex justify-between max-[700px]:flex-col">
      <div className="">
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: 'Books',
                data: dataValues,
                backgroundColor: backgroundColors,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Anni',
                },
              },
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex">
          <input
            type="number"
            placeholder=""
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            className="mx-2 px-2 py-1 border border-gray-300 w-[50px]"
          />
          <button onClick={addDataPoint} className="px-2 py-1 bg-blue-500 text-white">Aggiungi</button>
        </div>
        <div className="mb-4 flex">
          <input
            type="number"
            placeholder="Anno da rimuovere"
            value={yearToRemove}
            onChange={(e) => setYearToRemove(e.target.value)}
            className="mx-2 px-2 py-1 border border-gray-300 w-[100px]"
          />
          <button onClick={removeDataPointByYear} className="px-2 py-1 bg-red-500 text-white">Rimuovi per anno</button>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
