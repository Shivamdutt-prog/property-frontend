function Apartment() {
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
          fontSize: "55px",
          color: "orange",
          marginBottom: "20px",
        }}
      >
        Smart Apartment
      </h1>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "30px",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        Enjoy modern apartment living with premium interiors,
        smart security, beautiful balcony view, and luxury comfort
        in the heart of the city.
      </p>

      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
        alt=""
        style={{
          height: "400px",
          objectFit: "cover",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            border: "1px solid orange",
          }}
        >
          <h3>3 Bedrooms</h3>
        </div>

        <div
          style={{
            background: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            border: "1px solid orange",
          }}
        >
          <h3>Balcony View</h3>
        </div>

        <div
          style={{
            background: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            border: "1px solid orange",
          }}
        >
          <h3>Smart Security</h3>
        </div>
      </div>

      <a
        href="https://wa.me/919034021217"
        target="_blank"
      >
        <button
          style={{
            padding: "15px 35px",
            background: "orange",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Contact on WhatsApp
        </button>
      </a>
    </div>
  );
}

export default Apartment;