import React from "react";
import "../styles/trips.css";
import TripData from "./TripData";

const Trips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="trip-card">
        <TripData
          image="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          heading="Trip to Malaysia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum beatae accusantium dolore saepe veniam quidem eaque, quos qui laboriosam."
        />

        <TripData
          image="https://images.unsplash.com/photo-1549944850-84e00be4203b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RGVzZXJ0JTIwU2FmYXJpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          heading="Trip to Dubai"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum beatae accusantium dolore saepe veniam quidem eaque, quos qui laboriosam."
        />

        <TripData
          image="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          heading="Trip to Manali"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum beatae accusantium dolore saepe veniam quidem eaque, quos qui laboriosam."
        />
      </div>
    </div>
  );
};

export default Trips;
