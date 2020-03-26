// import React, { Component } from "react";
// import {Datatable} from "@o2xp/react-datatable";
// import { chunk } from "lodash";
// import { storyOptionsSample } from "./data";

// const refreshRows = () => {
//   const { rows } = storyOptionsSample.data;
//   const randomRows = Math.floor(Math.random() * rows.length) + 1;
//   const randomTime = Math.floor(Math.random() * 4000) + 1000;
//   const randomResolve = Math.floor(Math.random() * 10) + 1;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (randomResolve > 3) {
//         resolve(chunk(rows, randomRows)[0]);
//       }
//       reject(new Error("err"));
//     }, randomTime);
//   });
// };

// const defaultStory = () => {
//   return (
//     <Datatable
//       options={storyOptionsSample}
//       refreshRows={refreshRows}
//       forceRerender
//     />
//   );
// };


// export default refreshRows;

import React from "react";
import { chunk } from "lodash";
import { Datatable } from "@o2xp/react-datatable";
import { storyOptionsSample } from "./data";

const refreshRows = () => {
  const { rows } = storyOptionsSample.data;
  const randomRows = Math.floor(Math.random() * rows.length) + 1;
  const randomTime = Math.floor(Math.random() * 4000) + 1000;
  const randomResolve = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomResolve > 3) {
        resolve(chunk(rows, randomRows)[0]);
      }
      reject(new Error("err"));
    }, randomTime);
  });
};

const defaultStory = () => {
  return (
    <Datatable
      options={storyOptionsSample}
      refreshRows={refreshRows}
      forceRerender
    />
  );
};

export default defaultStory;