import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금 뜨는 콘텐츠</h3>
      <ul>
        {imgs.map((img, i) => {
          return (
            <li key={i}>
              <img src={img} alt="img2" />
              <p>영화제목</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poster;

const img1 =
  "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_640.jpg";

const img2 =
  "https://cdn.pixabay.com/photo/2023/03/27/19/18/herons-7881512_640.png";

const img3 =
  "https://cdn.pixabay.com/photo/2023/11/17/19/07/cookies-8394894_640.jpg";

const imgs = [img1, img2, img3];
