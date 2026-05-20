function Property() {
  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "orange",
          marginBottom: "20px",
        }}
      >
        Our Properties
      </h1>

      <p
        style={{
          color: "#ccc",
          maxWidth: "800px",
          lineHeight: "30px",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Explore our premium collection of luxury villas, modern apartments,
        commercial offices, and dream homes available in top locations across
        India.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* CARD 1 */}
        <div
          style={{
            width: "300px",
            background: "#1a1a1a",
            border: "1px solid orange",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=600"
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "orange" }}>Luxury Villa</h2>
            <p>Panipat</p>
            <h3>₹90 Lac</h3>

          <button
  onClick={() => {
    alert(
      "Luxury Villa\n\nLocation: Panipat\nPrice: ₹90 Lac"
    );
  }}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "orange",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    position: "relative",
    zIndex: "10"
  }}
>
  View Details
</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            width: "300px",
            background: "#1a1a1a",
            border: "1px solid orange",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "orange" }}>Modern Flat</h2>
            <p>Delhi</p>
            <h3>₹45 Lac</h3>

            <button
  onClick={() => {
    alert(
      "Modern Flat\n\nLocation: Delhi\nPrice: ₹45 Lac\n2 Bedrooms\n1 Bathroom"
    );
  }}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "orange",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  View Details
</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            width: "300px",
            background: "#1a1a1a",
            border: "1px solid orange",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "orange" }}>Office Space</h2>
            <p>Gurgaon</p>
            <h3>₹1.2 Cr</h3>

     <button
  onClick={() => {
    alert(
      "Office Space\n\nLocation: Gurgaon\nPrice: ₹1.2 Cr\nFully Furnished Office\nParking Available"
    );
  }}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "orange",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  View Details
</button>
          </div>
        </div>

        {/* CARD 4 */}
        <div
          style={{
            width: "300px",
            background: "#1a1a1a",
            border: "1px solid orange",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600"
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "orange" }}>Dream House</h2>
            <p>Mumbai</p>
            <h3>₹2.5 Cr</h3>

        <button
  onClick={() => {
    alert(
      "Dream House\n\nLocation: Mumbai\nPrice: ₹2.5 Cr\n3 Bedrooms\n2 Bathrooms\nLuxury Interior"
    );
  }}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "orange",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  View Details
</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Property;