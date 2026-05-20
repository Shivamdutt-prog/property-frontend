function Office() {
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
        Commercial Office
      </h1>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "30px",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        Premium commercial office space with modern architecture,
        spacious cabins, meeting rooms, smart security,
        and prime business location.
      </p>

      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
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
          <h3>Meeting Rooms</h3>
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

        <div
          style={{
            background: "#1a1a1a",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            border: "1px solid orange",
          }}
        >
          <h3>Prime Location</h3>
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

export default Office;