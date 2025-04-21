import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const kcpeResults = [
  { year: 2004, meanScore: 265 },
  { year: 2005, meanScore: 278 },
  { year: 2006, meanScore: 281 },
  { year: 2007, meanScore: 290 },
  { year: 2008, meanScore: 295 },
  { year: 2009, meanScore: 300 },
  { year: 2010, meanScore: 310 },
  { year: 2011, meanScore: 320 },
  { year: 2012, meanScore: 325 },
  { year: 2013, meanScore: 330 },
  { year: 2014, meanScore: 338 },
  { year: 2015, meanScore: 340 },
  { year: 2016, meanScore: 345 },
  { year: 2017, meanScore: 350 },
  { year: 2018, meanScore: 360 },
  { year: 2019, meanScore: 368 },
  { year: 2020, meanScore: 370 },
  { year: 2021, meanScore: 375 },
  { year: 2022, meanScore: 379 },
  { year: 2023, meanScore: 384 },
  { year: 2024, meanScore: 392 },
];

const ResultsPage: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">📊  Academic Results (KCPE)</h1>
      <p className="text-gray-600 mt-2 mb-6 md:text-lg ">
        A year-by-year overview of our KCPE academic performance, showcasing consistent growth and commitment to excellence from 2004 to 2024.
      </p>
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-700">KCPE Mean Score Trend (2004–2024)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={kcpeResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[250, 400]} />
            <Tooltip />
            <Line type="monotone" dataKey="meanScore" stroke="#0C834E" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-green-700">KCPE Results Summary</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {kcpeResults.map((item) => (
            <li key={item.year} className="bg-[#F6FFF9] p-3 rounded border border-[#0C834E]">
              <p className="font-semibold text-green-500">Year: {item.year}</p>
              <p>Mean Score: {item.meanScore}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;
