import React from "react";
import "./styles.css";

import about1_1 from "../../media/about-1-1.jpg";
import about1_2 from "../../media/about-1-2.jpg";
import about1_3 from "../../media/about-1-3.jpg";
// import about2_1 from "../../media/about-2-1.jpg";
// import about2_2 from "../../media/about-2-2.jpg";
// import abo ut2_3 from "../../media/about-2-3.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-inner">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={about1_1}
                className="img-thumbnail d-block w-100"
                alt="profile01"
              />
            </div>
            <div className="carousel-item">
              <img
                src={about1_2}
                className="img-thumbnail d-block w-100"
                alt="profile02"
              />
            </div>
            <div className="carousel-item">
              <img
                src={about1_3}
                className="img-thumbnail d-block w-100"
                alt="profile03"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Who
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              What
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Why
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Where
            </a>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade description left show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              esse quas aut deserunt est quasi fuga magni, porro tenetur. Dolor
              laudantium consequuntur nihil asperiores, repellendus vel?
              Adipisci nobis quos voluptates?
            </div>
            <div
              className="tab-pane fade description right"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              Ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
              est corporis ea inventore quos omnis asperiores expedita atque id
              quisquam quaerat vero porro harum doloremque tempora, debitis
              nihil libero quae?
            </div>
            <div
              className="tab-pane fade description center"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              Dolor sit amet consectetur adipisicing elit. Provident quae,
              voluptate eum saepe nam iusto aliquid explicabo. Accusantium dolor
              incidunt blanditiis eligendi ratione obcaecati repellendus commodi
              rem labore porro. Dolore!
            </div>
            <div
              className="tab-pane fade description justify"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              Sit amet consectetur adipisicing elit. Maiores rerum nihil
              repellat sequi accusamus similique voluptatem ratione, nesciunt
              beatae exercitationem eligendi excepturi. Explicabo quas provident
              delectus suscipit enim, ratione aut!
            </div>
          </div>
        </div>
        {/* <div className="personal-overview">
          <p className="left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus, officiis veritatis deleniti nostrum doloremque odio
            ducimus, eligendi voluptates aut iure fuga temporibus quam
            recusandae minus est sed saepe voluptas?
          </p>
          <p className="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus, officiis veritatis deleniti nostrum doloremque odio
            ducimus, eligendi voluptates aut iure fuga temporibus quam
            recusandae minus est sed saepe voluptas?
          </p>
          <p className="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus, officiis veritatis deleniti nostrum doloremque odio
            ducimus, eligendi voluptates aut iure fuga temporibus quam
            recusandae minus est sed saepe voluptas?
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
