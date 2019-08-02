import React from "react";

const reRender = NewComponent => props => {
  console.log(`${NewComponent.name}, re-render`);
  return <NewComponent {...props} />;
};

export default reRender;
