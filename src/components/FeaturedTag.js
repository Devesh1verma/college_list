import React from "react";

const FeaturedTag = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderWidth: "17px 0 17px 20px",
          borderColor: "red red red transparent",
          marginTop: "-2.3%",
        }}
      />
      <div
        style={{
          color: "#ffffff",
          backgroundColor: "red",
          padding: "1% 5% 1% 5%",
          marginTop: "-2.3%",
        }}
      >
        Featured
      </div>
    </div>
  );
};

export default FeaturedTag;

