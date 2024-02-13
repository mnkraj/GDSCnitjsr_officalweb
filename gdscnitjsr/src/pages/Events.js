import React, { useState } from "react";

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    title: "",
    category: "workhop",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:3080/api/v1/addevents", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const result = await response.json();

    if (!result.success) {
      alert(result.message);
      setLoading(false);
    } else {
      setLoading(false);
      alert("Event Added");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-black dark:text-black mb-6">
          Add Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              onChange={handleChange}
              name="category"
              className="form-select mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="workshop">Workshop</option>
              <option value="hackathon">Hackathon</option>
              <option value="seminar">Seminar</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium">
              Choose Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              id="date"
              className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="starttime">
              <label htmlFor="starttime" className="block text-sm font-medium">
                Start time
              </label>
              <input
                type="time"
                id="starttime"
                name="startTime"
                onChange={handleChange}
                className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
            <div className="endtime">
              <label htmlFor="endtime" className="block text-sm font-medium">
                End time
              </label>
              <input
                type="time"
                name="endTime"
                onChange={handleChange}
                id="endtime"
                className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              rows="7"
              className="form-textarea mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Description..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium">
              Thumbnail
            </label>
            <input
              className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              aria-describedby="user_avatar_help"
              onChange={handleChange}
              id="thumbnail"
              name="thumbnail"
              type="file"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Add Event
          </button>
        </form>
      </div>
    </section>
  )
}
export default Events;