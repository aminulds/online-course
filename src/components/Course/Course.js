import React from "react";
import "./course.css";

const Course = (props) => {
  const { course, img, author, price } = props.course;
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{course}</h5>
          <p className="card-text">
            by <em>{author}</em>
          </p>
          <h5 className="price">${price}</h5>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button
            onClick={() => props.handleCart(props.course)}
            className="buy-button bg-info"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
