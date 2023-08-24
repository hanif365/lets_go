const FareDetails = ({
  adultCount,
  childCount,
  filteredEvents,
  onConfirmSeats,
}) => {
  const adultFare = adultCount * filteredEvents[0].cost;
  const childFare = childCount * filteredEvents[0].costOfChild;

  const totalFare = adultFare + childFare;
  console.log(totalFare);

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
          <button className="mt-40 text-green-500" onClick={onConfirmSeats}>
            Confirm Seats
          </button>
        </div>
      )}
    </div>
  );
};

export default FareDetails;
