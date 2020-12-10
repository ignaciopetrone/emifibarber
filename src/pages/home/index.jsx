import React from "react";
import "./styles.css";
// import ReactPlayer from "react-player";

// Render a YouTube video player
{
  /* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */
}
const Home = () => {
  return (
    <div className='home-container'>
      <div className='section first' style={{ backgroundColor: "bisque" }}>
        <div>FIRST SECTION</div>
      </div>
      <div className='section second' style={{ backgroundColor: "red" }}>
        <div>SECOND SECTION</div>
      </div>
      <div className='section third' style={{ backgroundColor: "gray" }}>
        <div>THIRD SECTION</div>
      </div>
      <div className='section fourth' style={{ backgroundColor: "green" }}>
        <div>FOURTH SECTION</div>
      </div>
    </div>
  );
};

export default Home;
