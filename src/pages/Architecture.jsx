function Architecture() {
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
        Modern Architectural Designs
      </h1>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "30px",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        We provide luxury architectural solutions with modern planning,
        premium villa designs, smart space management, and elegant exterior
        concepts for dream homes.
      </p>

      <img
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200"
        alt="Architecture"
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "20px",
          marginBottom: "50px",
        }}
      />

      <h2
        style={{
          color: "orange",
          marginBottom: "20px",
        }}
      >
        Our Architecture Services
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
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
          <h3>2D Floor Planning</h3>
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
          <h3>3D House Design</h3>
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
          <h3>Luxury Villa Design</h3>
        </div>
      </div>
  <a
  href="https://wa.me/919034021217"
  target="_blank"
>
     <button
        style={{
          marginTop: "50px",
          padding: "15px 30px",
          background: "orange",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Book Consultation
      </button>
</a>
     
    </div>
  );
}

export default Architecture;