import "./FareDetails.css";

const FareDetails = ({
  adultCount,
  childCount,
  filteredEvents,
  onConfirmSeats,
  passengerData,
}) => {
  const adultFare = adultCount * filteredEvents[0].cost;
  const childFare = childCount * filteredEvents[0].costOfChild;

  const totalFare = adultFare + childFare;
  console.log(totalFare);

  const isPassengerDetailsComplete = passengerData.every(
    (passenger) => passenger.name && passenger.gender && passenger.passengerType
  );

  return (
    <div className="w-[50%] mx-auto">
      {totalFare > 0 && (
        <div>
          <h4 className="text-xl">Fare Details</h4>
          <hr />
          <div>
            <p>Ticket Price:</p>
            {adultCount > 0 && (
              <p>
                {adultCount} adult * {filteredEvents[0].cost} = {adultFare}
              </p>
            )}
            {childCount > 0 && (
              <p>
                {childCount} child * {filteredEvents[0].costOfChild} ={" "}
                {childFare}
              </p>
            )}
            {totalFare > 0 && <p>Total Fare: {totalFare}</p>}
          </div>

          <div className="group">
            <button
              type="submit"
              className={`mt-32 text-[14px] lg:text-[16px]  w-full flex justify-center items-center px-10 py-8 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden  rounded-md text-white  ${
                isPassengerDetailsComplete
                  ? "cursor-pointer bg-[#070B39] confirmSeats_btn"
                  : "cursor-not-allowed bg-[#070b39ad]"
              }`}
              onClick={onConfirmSeats}
              disabled={!isPassengerDetailsComplete}
            >
              <span className="absolute inset-0 bg-yellow-400 rounded"></span>
              <span className="absolute inset-0 flex justify-center items-center font-bold">
                Confirm Seats
              </span>
            </button>
            {isPassengerDetailsComplete ? null : (
              <p className="text-red-500 invisible group-hover:visible">
                Please give all of Passenger information
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FareDetails;
