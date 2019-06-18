import React, { useState } from "react";
import Link from "./link";

const title = "Webpack 4 with react starter!";
export default () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link text="React" address="reactjs.orgu" />
        </li>
        <li>Webpack</li>
        <li>Jest and Enzyme</li>
      </ul>
      <br />
      <button
        onClick={() => {
          setLike(!like);
        }}
      >
        Like it!
      </button>
      {like && <div className="liked">&hearts;</div>}
    </div>
  );
};
