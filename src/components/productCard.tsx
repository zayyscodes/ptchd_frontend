"use client";

import React, { useState } from "react";

type Props = {
  title: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<Props> = ({ title, price, image }) => {
  const [count, setCount] = useState(1);

  return (
    <div
      style={{
        backgroundColor: "#F3EEE8",
        borderRadius: "22px",
        width: "230px",
        padding: "14px",
        boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
        textAlign: "left",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Counter */}
      <div
        style={{
          position: "absolute",
          top: "220px",
          right: "12px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E9E4DD",
          borderRadius: "999px",
          padding: "4px 6px",
          gap: "6px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        }}
      >
        <button
          onClick={() => setCount((c) => Math.max(1, c - 1))}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#D6D1CA",
            cursor: "pointer",
            fontSize: "12px",
            lineHeight: "18px",
            textAlign: "center",
          }}
        >
          −
        </button>

        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            minWidth: "10px",
            textAlign: "center",
            color: "#2D2D2D",
          }}
        >
          {count}
        </span>

        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#D6D1CA",
            cursor: "pointer",
            fontSize: "12px",
            lineHeight: "18px",
            textAlign: "center",
          }}
        >
          +
        </button>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "16px",
          marginBottom: "12px",
        }}
      />

      {/* Title */}
      <h3
        style={{
          fontSize: "13px",
          fontWeight: 900,
          color: "#2D2D2D",
          fontFamily: "Nunito"
        }}
      >
        {title}
      </h3>

      {/* Price */}
      <p
        style={{
          fontSize: "25px",
          fontWeight: 900,
          color: "#2D2D2D",
          fontFamily: "Nunito"
        }}
      >
        ${price}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "13px",
          color: "#6B6B6B",
          lineHeight: "1.4",
          fontFamily: "Sarabun"
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae.
      </p>

      {/* Stars */}
      <div
        style={{
          color: "#FF8A00",
          fontSize: "19px",
          marginBottom: "12px",
          letterSpacing: "1px",
        }}
      >
        ★★★★★
      </div>

      {/* Button */}
      <button
        style={{
          width: "100%",
          backgroundColor: "#2F3A52",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "10px",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontFamily: "Nunito"
        }}
      >
        <img
          src="/assets/cart.png"
          alt="cart"
          style={{
            width: "14px",
            height: "14px",
            objectFit: "contain",
          }}
        />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;