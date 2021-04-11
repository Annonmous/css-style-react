import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const link="https://www.w3schools.com/tags/ref_standardattributes.asp";
const name="Muhammad Huzaifah Khan";
const img1="https://picsum.photos/199/300";
const img2="https://picsum.photos/200/300";
ReactDom.render(
<>

<h1 className="heading">Best Images Ever</h1>

<p1 className="para">My Name Is {name}</p1>

<div classNmae="ima_div">
<img src={img1}/>
<a href={link}>
  <img src={img2}/>
</a>
</div>

</>,
  document.getElementById('root')
);