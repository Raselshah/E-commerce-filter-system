import React from "react";
import logo from "../../Assests/Logo.png";
import "../Style/Style.css";
import facebook from "../../Assests/Group (5).png";
import linkedine from "../../Assests/Group (6).png";
import twitter from "../../Assests/Group (7).png";
import youtube from "../../Assests/Group (8).png";
import email from "../../Assests/Group (9).png";
import watch from "../../Assests/Group (10).png";
import phone from "../../Assests/Vector (1).png";

const Footer = () => {
  return (
    <div>
      <div className="background-footer">
        <footer class="footer p-10 gap-24 max-w-screen-2xl mx-auto text-white mt-12">
          <div className="mt-8 mx-auto">
            <img src={logo} alt="" />
            <p className="footer-font mt-6">
              Lorem Ipsum is simply dummy text of <br /> the printing and
              typesetting industry.
              <br /> Lorem Ipsum has been the
            </p>

            <div className="grid grid-flow-col gap-12 mt-4">
              <a>
                <img src={facebook} alt="" />
              </a>
              <a>
                <img src={linkedine} alt="" />
              </a>
              <a>
                <img src={twitter} alt="" />
              </a>
              <a>
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
          <div className="mt-8">
            <span class="text-xl footer-title">Company</span>

            <div className="mt-3 flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col  gap-3">
                <a class="footer-font text-md cursor-pointer">About Us</a>
                <a class="footer-font text-md cursor-pointer">Contact Us</a>
                <a class="footer-font text-md cursor-pointer">Career</a>
                <a class="footer-font text-md cursor-pointer">
                  Terms & Conditions
                </a>
                <a class="footer-font text-md cursor-pointer">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <span class="text-xl  footer-title">Explore</span>

            <div className="mt-3 flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col  gap-3">
                <a class="footer-font text-md cursor-pointer">
                  Appartment in whitefield
                </a>
                <a class="footer-font text-md cursor-pointer">
                  Villa in sarjapura
                </a>
                <a class="footer-font text-md cursor-pointer">
                  Apartment in electronic city
                </a>
                <a class="footer-font text-md cursor-pointer">
                  Apartment in Banglore South
                </a>
                <a class="footer-font text-md cursor-pointer">
                  Apartment in Banglore East
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <span class="text-xl  footer-title ">Keep in touch</span>

            <div className="mt-3 flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col  gap-y-5">
                <a class="footer-font flex justify-start items-center gap-2 text-md cursor-pointer">
                  <img src={email} alt="" />
                  <span className="footer-contact">info@metroghar.com</span>
                </a>
                <a class="footer-font flex justify-start items-center gap-2 text-md cursor-pointer">
                  <img src={phone} alt="" />
                  <span className="footer-contact">78291 14400</span>
                </a>
                <a class="footer-font flex justify-start items-center gap-2 text-md cursor-pointer">
                  <img src={watch} alt="" />
                  <span className="footer-contact">10:00 am - 6:00 pm</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="footer-bg">
        <footer class="py-6 px-24 text-neutral-content max-w-screen-2xl text-center">
          <p>Copyright 2022 metroghar.com - All rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
