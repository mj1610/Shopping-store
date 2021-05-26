import React, { useState } from "react";

const Slides = ({ item }) => {
  const [flag, setFlag] = useState(true);

  const showItems = () => {
    setFlag(!flag);
  };

  return (
    <div className="window" onClick={showItems}>
      {item.name}
      <p className="para">{item.img.length} Accessories</p>
      {!flag ? <div className="images">{item.img}</div> : ""}
    </div>
  );
};
export default Slides;
