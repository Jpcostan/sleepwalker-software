import React, { useState } from "react";

export default function LeadMagnetCalculator() {
  const [tasksPerDay, setTasksPerDay] = useState(5);
  const [minutesPerTask, setMinutesPerTask] = useState(10);
  const [hoursLost, setHoursLost] = useState(0);
  const [moneyLost, setMoneyLost] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleCalculate = () => {
    const totalMinutesPerMonth = tasksPerDay * minutesPerTask * 30;
    const hours = totalMinutesPerMonth / 60;
    const costEstimate = hours * 30; // assume $30/hr
    setHoursLost(hours);
    setMoneyLost(costEstimate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mvgkwqdw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message: businessType,
      }),
    })
      .then(() => alert("Thanks! We'll be in touch soon."))
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section className="bg-black py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">How Much Is Manual Work Costing Your Business?</h1>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl mb-8">
          <p className="mb-6 text-center text-lg">Use this quick calculator to see how much time and money you might be losing to manual tasks each month:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Average number of repetitive tasks per day</label>
              <input
                type="number"
                value={tasksPerDay}
                onChange={(e) => setTasksPerDay(Number(e.target.value))}
                placeholder="e.g. 5"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Average minutes spent per task</label>
              <input
                type="number"
                value={minutesPerTask}
                onChange={(e) => setMinutesPerTask(Number(e.target.value))}
                placeholder="e.g. 10"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>
          </div>

          <button
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
            onClick={handleCalculate}
          >
            Calculate
          </button>

          {hoursLost > 0 && (
            <div className="mt-6">
              <p className="text-lg">⏱️ ~{hoursLost.toFixed(1)} hours/month lost</p>
              <p className="text-lg">💸 Estimated cost: ${moneyLost.toFixed(2)}/month</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
          <p className="font-semibold text-lg text-center">Want a free automation idea for your business?</p>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Business Type / Comments"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Send My Ideas
          </button>
        </form>
      </div>
    </section>
  );
}
