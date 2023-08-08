import React from 'react'

const ReasonsToVisit = ({eventData}) => {
    console.log("AMi Hanif ******************************************", eventData)
  return (
    <div><h1 className="text-[#071952] text-2xl lg:text-8xl 2xl:text-9xl font-bold ">
    {eventData[0].title}
  </h1></div>
  )
}

export default ReasonsToVisit