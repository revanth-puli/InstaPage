import React from "react";
import Post from "./components/Post";
import "./App.css";

import Amma1 from "./assets/Amma1 - Copy.jpg";
import Amma2 from "./assets/Amma2 - Copy.jpg";
import Amma3 from "./assets/Amma3.jpg";
import Amma4 from "./assets/Amma4.jpg";
import Amma5 from "./assets/Amma5.jpg";

const App = () => {
  return (
    <div className="Posts">
      <h3>Mini Image Feed</h3>

      <Post image={Amma1} name="Amma1" />
      <Post image={Amma2} name="Amma2" />
      <Post image={Amma3} name="Amma3" />
      <Post image={Amma4} name="Amma4" />
      <Post image={Amma5} name="Amma5" />
    </div>
  );
};

export default App;