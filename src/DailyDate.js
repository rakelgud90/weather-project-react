import React from "react";


export default function DailyDate (props) {


    let monthsD = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let monthD = monthsD[props.date.getMonth()];
    let daysD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayD = daysD[props.date.getDay()];

    
    let dateD = props.date.getDate();

   
    return (
        <div>
       {dayD} {dateD} | {monthD}
        </div>
      );
}