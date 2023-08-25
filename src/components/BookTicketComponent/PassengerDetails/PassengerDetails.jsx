import React from "react";

const PassengerDetails = ({
  passenger,
  onChange,
  passengerNumber,
  seatName,
  completed,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...passenger, [name]: value });
  };

  console.log(seatName);

  console.log("Passenger number: *******************: ", passengerNumber);
  console.log("Passenger: *******************: ", passenger);

  return (
    <div className="">
      <form className="max-w-md p-4 mx-auto  border rounded shadow">
        <div className="flex justify-between">
          <p className="mb-2 text-xl font-bold">
            Passenger {passengerNumber} Details:
          </p>
          <p>Seat Name: {seatName}</p>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Passenger Name:</label>
          <input
            type="text"
            name="name"
            value={passenger.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Gender:</label>
          <select
            name="gender"
            value={passenger.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Passenger Type:</label>
          <select
            name="passengerType"
            value={passenger.passengerType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetails;
