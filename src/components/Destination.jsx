import React from "react";
import "../styles/destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give the best opportunity to explore</p>
      
      <DestinationData 
      cName = "first"
      heading ="Paris, France"
      text =" Lorem ipsum, dolor sit amet consectetur adipisicing elit. In vitae
      iusto repellat. Dicta in voluptatem aut eum ipsa blanditiis
      reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Ab, rerum quaerat. Corporis saepe explicabo suscipit quia in
      eveniet similique nostrum? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae doloremque aliquid rem, consectetur sunt
      nam adipisci consequatur possimus accusamus enim?"

      img1 = "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     
      img2 ="https://images.pexels.com/photos/941416/pexels-photo-941416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <DestinationData 
      cName = "second"
      heading ="Visit India"
      text =" Lorem ipsum, dolor sit amet consectetur adipisicing elit. In vitae
      iusto repellat. Dicta in voluptatem aut eum ipsa blanditiis
      reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Ab, rerum quaerat. Corporis saepe explicabo suscipit quia in
      eveniet similique nostrum? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Molestiae doloremque aliquid rem, consectetur sunt
      nam adipisci consequatur possimus accusamus enim?"

      img1 = "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8ODI3MDQyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
     
      img2 ="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4MjcwNDJ8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
      />
    </div>
  );
};

export default Destination;
