import React from "react";

import { booksItems } from "../data";

import "../styles/styles.css";

const Content = () => {
  return (
    <div className="itemOptions">
      {booksItems.map((item, index) => (
        <div className="itemDescription">
          <img src={item.img} alt="book image" className="itemImage" />
          <p className="itemTitle">{item.title}</p>
          <p className="itemAuthor">- {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
