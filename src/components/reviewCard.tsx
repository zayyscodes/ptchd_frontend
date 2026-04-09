import React from "react";

type Props = {
  name: string;
  image: string;
};

const TestimonialCard: React.FC<Props> = ({ name, image }) => {
  return (
    <div
      style={{
        backgroundColor: "#F3EEE8",
        borderRadius: "28px",
        width: "260px",
        height: "390px",
        padding: "16px",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        style={{
          width: "98%",
          height: "230px",
          objectFit: "cover",
          borderRadius: "20px",
          marginBottom: "14px",
        }}
      />

      {/* Name */}
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#2F3A52",
          marginBottom: "10px",
        }}
      >
        {name}
      </h3>

      {/* Stars */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2F3A52",
          borderRadius: "10px",
          padding: "6px 10px",
          gap: "4px",
          marginBottom: "10px",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/assets/ratingStar.png"
            alt="star"
            style={{ width: "12px", height: "12px" }}
          />
        ))}
      </div>

      {/* Text */}
      <p
        style={{
          fontSize: "12px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae.
      </p>
    </div>
  );
};

export default TestimonialCard;