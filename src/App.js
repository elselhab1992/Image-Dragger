import "./App.css";
import { motion } from "framer-motion";
import images from "./images";
import { useEffect, useRef, useState } from "react";

function App() {
  const [image, setImage] = useState(0);

  const ref = useRef();

  useEffect(() => {
    setImage(ref.current.scrollWidth - ref.current.offsetWidth);
  }, [image]);

  return (
    <div className="app">
      <h1>Our Menu</h1>
      <motion.div className="container" ref={ref}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -image }}
        >
          {images.map((image) => {
            return (
              <div key={image}>
                <img src={image} alt="food" />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
