import React, { useState } from "react";
import "./style.css";
const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 400) +
    '<span style="color:var(--grey)" > Read More...</span>';
  const longDesc =
    desc + '<span style="color:var(--grey)" > Read Less...</span>';

  const [flag, setFlag] = useState(false);

  function ReadMore() {
    setFlag(!flag);
  }
  return (
    <div className="coinpage-wrapper">
      <h1 className="coinpage-heading">{heading} </h1>
      {desc.length > 200 ? (
        <p
          className="coinpage-para"
          onClick={ReadMore}
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p
          className="coinpage-para"

          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}

    </div>
  );
};

export default CoinInfo;
