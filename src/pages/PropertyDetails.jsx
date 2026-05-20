import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";

function PropertyDetails() {

  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {

    fetch(`https://property-backend-of4t.onrender.com/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.property);
      });

  }, [id]);

  if (!property) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-container">

      <img
        src={property.image}
        alt=""
        className="details-image"
      />

      <h1>{property.title}</h1>

      <p>{property.location}</p>

      <h2>₹ {property.price}</h2>
      <p>{property.description}</p>

    </div>
  );
}

export default PropertyDetails;