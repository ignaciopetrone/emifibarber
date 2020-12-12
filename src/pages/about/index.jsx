import React from "react";
import "./styles.css";

// import about1_1 from "../../media/about-1-1.jpg";
// import about1_2 from "../../media/about-1-2.jpg";
// import about1_3 from "../../media/about-1-3.jpg";
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
                // src={about2_1}
                src="https://scontent-ham3-1.cdninstagram.com/v/t51.2885-15/e35/43817451_183487909247512_1658788781682253524_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=cYDKa9C3cjsAX_36Rb5&tp=1&oh=400968d11a73ddab7259c097e051085b&oe=5FFD0D44"
                className="img-thumbnail d-block w-100"
                alt="profile01"
              />
            </div>
            <div className="carousel-item">
              <img
                // src={about2_2}
                src="https://scontent-ham3-1.cdninstagram.com/v/t51.2885-15/e35/43913793_257728498220645_1813124946078935968_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=a-SDYgM-TjMAX_3VAwN&tp=1&oh=aa6ed4629938fbf674804b7aedf34506&oe=5FFF2F13"
                className="img-thumbnail d-block w-100"
                alt="profile02"
              />
            </div>
            <div className="carousel-item">
              <img
                // src={about2_3}
                src="https://scontent-ham3-1.cdninstagram.com/v/t51.2885-15/e35/25017315_382248878901496_5261215842451849216_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=F8Yqfxmsmu0AX9XDYxi&tp=1&oh=18317bed2d6380a921a9efbc25df2d1c&oe=5FFF29B4"
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
              Home
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
              Profile
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
              Messages
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
              Settings
            </a>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
        {/* <div className="personal-overview">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus, officiis veritatis deleniti nostrum doloremque odio
            ducimus, eligendi voluptates aut iure fuga temporibus quam
            recusandae minus est sed saepe voluptas?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus, officiis veritatis deleniti nostrum doloremque odio
            ducimus, eligendi voluptates aut iure fuga temporibus quam
            recusandae minus est sed saepe voluptas?
          </p>
          <p>
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
