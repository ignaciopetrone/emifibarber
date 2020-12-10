import React from "react";
import "./styles.css";

import facebook from "../../media/icons/facebook.png";
import instagram from "../../media/icons/instagram.png";
import whatsapp from "../../media/icons/whatsapp.png";
import youtube from "../../media/icons/youtube.png";

const networks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/EmfiBarbershop",
    icon: facebook,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/emfibarber/",
    icon: instagram,
  },
  {
    name: "whatsapp",
    url: "https://api.whatsapp.com/message/ATR2RHJN6TODB1",
    icon: whatsapp,
  },
  {
    // TODO: Add youtube channel url
    name: "youtube",
    url: "https://www.youtube.com",
    icon: youtube,
  },
];

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Footer</p>
      <div className='social-network-container'>
        <span className='line' />
        <ul className='icons-container'>
          {networks.map((network) => (
            <a
              href={network.url}
              target='_blank'
              className={`social-network ${network.name}`}
            >
              <img src={network.icon} alt={network.name} />
            </a>
          ))}
        </ul>
        <span className='line' />
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur </p>
      <p>© 2020 emifibarber All rights reserved.</p>
    </div>
  );
};

export default Footer;
