import React from "react";


export default function Date (props) {
  
    let months = [
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
    let month = months[props.date.getMonth()];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];

    let year = props.date.getFullYear();
    let date = props.date.getDate();

    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
        <div>
       {day} {date} {month} {year} | Last Updated: {hours}: {minutes}
        </div>
      );
}