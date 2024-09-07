import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';

function App() {

  const [allData, setAllData] = useState([]);
  console.log(allData);
  useEffect(() => {
    // Load saved form data array from localStorage if available
    const savedData = localStorage.getItem('formDataArray');
    if (savedData) {
      setAllData(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const password = e.target.password.value;
    const newEntry = { name, email, contact, password };


    const updatedData = [...allData, newEntry];
    setAllData(updatedData);


    localStorage.setItem('formDataArray', JSON.stringify(updatedData));
    console.log('Form Data Submitted and Saved to Local Storage:', updatedData);
  };

  return (
    <div className="flex flex-col items-center  justify-center  container mx-auto mt-5">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-300 shadow-md rounded-md">
        <h2 className="text-4xl font-bold text-center text-green-700"> Get Data </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-600">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className="mb-1 text-sm font-medium text-gray-600">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter 10 digit number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="ml-5 ">
        <h2 className="text-3xl font-bold  mt-4">Submitted Data :</h2>
        <div className='grid grid-cols-4 gap-5'>
          {allData.length === 0 ? (
            <p className="text-gray-500">No data submitted yet.</p>
          ) : (
            allData.map((data, index) => (
              <div key={index} className="mt-4 p-5 ">
                <div
                  
                  className="block w-[300px] p-6   border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700"
                >
                  <h5 className="mb-2 text-4xl  font-semibold tracking-tight ">
                     {data.name}
                  </h5>
                   <h1  className='text-xl font-semibold text-yellow-800 gap-2 flex items-center'> <MdEmail className='text-yellow-500'></MdEmail> {data.email} </h1>
                   <h1 className='text-purple-700 text-xl font-bold'> Contact : {data.contact} </h1>
                   <h1 className='text-xl font-bold text-orange-700'> Password :  {data.password} </h1>
                </div>

                <hr className="mt-2 mb-2" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
