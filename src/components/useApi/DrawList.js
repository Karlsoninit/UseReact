import React from "react";

const DrawList = ({ data }) => (
  <ul>
    {data.map(({ objectID, title, url }) => (
      <li key={objectID}>
        <a href={url} target="_blank">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default DrawList;
