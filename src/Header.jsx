import React from "react";
import instalogo from "./—Pngtree—instagram icon_8704817.png";
import Linkedin from "./icons8-linkedin-48.png";
import Youtube from "./icons8-youtube-96-removebg-preview.png";
import Cloudtellix from "./cloudtellix-logo.png";

export default function Box() {
  return (
    <>
      <div class="mainBox">
        {" "}
        <></>
        <div class="cloud_logo">
          <img src={Cloudtellix} width="60" height="60" />
          <p className="Cloudtellix">Cloudtellix</p>
        </div>
        <div class="box1">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          quibusdam quos architecto amet, illum numquam fugit beatae libero
          voluptatum laudantium sunt eligendi odit, hic optio maiores rem quo ab
          tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit dolorum sed assumenda laborum excepturi ab et? Impedit animi
          necessitatibus cupiditate ullam dicta atque consectetur, veniam iste.
          Molestias quae delectus deleniti. Veniam maiores accusantium assumenda
          ea adipisci ab, a dolores explicabo placeat esse molestiae dignissimos
          vitae obcaecati eos! Laboriosam explicabo quod suscipit, at quae
          libero voluptates cum aliquid labore dolore laudantium? Id deserunt
          sapiente non, pariatur nam odio cum molestias soluta architecto optio
          similique! Qui, aliquid ipsa? Enim aliquid ut officiis reiciendis
          cumque. Doloribus, rerum natus minus cumque doloremque nesciunt vitae?
          <button>Verify Email</button>
        </div>
        <div class="box2">
          <div class="ess_box">Want updates through more plateform? </div>
          <div class="ess_box">
            <div class="instagram">
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src={instalogo}
                  alt="insta to click"
                  width="40"
                  height="40"
                  background="none"
                />
              </a>
            </div>
            <div class="linkedin">
              <a href="https://in.linkedin.com/" target="_blank">
                <img
                  src={Linkedin}
                  alt="insta to click"
                  width="50"
                  height="50"
                />
              </a>
            </div>
            <div class="youtube">
              <a href="https://www.youtube.com/" target="_blank">
                <img
                  src={Youtube}
                  alt="insta to click"
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
          <br />
          <div class="ess_box"></div>
          <hr />
          {/* <Table /> */}
          <div class="ess_box2">
            <ul className="Footer">
              <li>
                <a href="https://www.google.com/">Unsubscribe</a>
              </li>
              <li>
                <a href="https://www.google.com/">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.google.com/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
