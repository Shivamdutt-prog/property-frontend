function Interior() {
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
          color: "orange",
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        Interior Design
      </h1>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "30px",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        We create luxury interior spaces with premium furniture, modern lighting,
        elegant wall designs, modular kitchens, and stylish bedroom concepts
        for dream homes.
      </p>

      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
        alt=""
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "20px",
        }}
      />

      <div style={{ width: "700px" }}>
     <a
  href="https://wa.me/919034021217"
  target="_blank"
>
  <button
    style={{
      marginTop: "20px",
      padding: "15px 30px",
      background: "orange",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 0 15px rgba(255,165,0,0.4)",
    }}
  >
    Contact Expert
  </button>
</a>
      </div>
    </div>
  );
}

export default Interior;