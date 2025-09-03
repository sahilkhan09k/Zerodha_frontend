import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  linkName,
  linkUrl,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5" style={{ marginTop: "10rem" }}>
          <h1>{productName}</h1>
          <p className="fs-4 text-muted mt-3">{productDescription}</p>
          <a className="mt-3 fs-5" style={{ textDecoration: "none" }} href={linkUrl}>{linkName} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col">
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
