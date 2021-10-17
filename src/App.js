import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Course from "./components/Course/Course";
import data from "./Data/Data.json";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => setCourses(data), []);
  // course cart handler
  const [cart, setCart] = useState([]);
  const handleCart = (course) => setCart([...cart, course]);

  return (
    <div className="container my-5">
      <h2 className="text-center p-3 text-warning">
        Image and Price info are demo.
      </h2>
      <div className="cart-course mb-4 fixed-top ">
        <div className="d-flex justify-content-end">
          <Cart cart={cart}></Cart>
        </div>
      </div>
      <div className="course">
        <div className="row g-4">
          {courses.map((course) => (
            <Course
              course={course}
              key={course.id}
              handleCart={handleCart}
            ></Course>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
