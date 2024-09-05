"use client";

import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-[1440px] h-[440px] bg-[#000000]">
      <footer className="w-[1170px] h-[236px] footer text-base-100 gap-[87px] mt-[80px] mx-[135px]">
        <nav className="w-[217px] h-[188px] gap-4">
          <h6 className="footer-title">Exclusive</h6>
          <a className="link link-hover">Subscribe</a>
          <a className="link link-hover">Get 10% off your first order</a>
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered input-info w-[217px] h-[48px] rounded-[4px] gap-8 text-[#FAFAFA]"
          />
        </nav>
        <nav className="w-[175px] h-[180px]">
          <h6 className="footer-title">Support</h6>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </nav>
        <nav className="w-[123px] h-[236px]">
          <h6 className="footer-title">Account</h6>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </nav>
        <nav className="w-[109px] h-[196px]">
          <h6 className="footer-title">Quick Link</h6>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </nav>
        <nav className="w-[198px] h-[210px] gap-6">
          <div className="gap-6">
            <div className="w-[198px] h-[162px] gap-6">
              <h6 className="footer-title">Download App</h6>
              <div>
                <p className="text-[12px]">Save $3 with App New User Only</p>
                <div class="w-[198px] h-[110px] gap-2 flex">
                  <div class="w-[80px] h-[80px]">
                    <img src="/Qrcode 1.svg" alt="" srcset="" />
                  </div>
                  <div class="w-[110px] h-[84px] gap-1">
                    <div class="w-[110px] h-[40px]">
                      <img src="/google-play-store.svg" alt="" srcset="" />
                    </div>
                    <div class="w-[110px] h-[40px]">
                      <img src="/Appstore.svg" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-accent-content text-base-100 w-[168px] h-[24px]">
              <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-6">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <FaInstagramSquare className="text-2xl" />
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <FaLinkedin className="text-2xl" />
                    </svg>
                  </a>
                </div>
              </nav>
            </footer>
          </div>
        </nav>
      </footer>
      <aside className="flex justify-center items-end w-[1440px] h-[40px] gap-4 text-[16px] text-[#FAFAFA] opacity-[50%] mt-[60px]">
        <p>@Copyright Rimel 2022. All right reserved</p>
      </aside>
    </div>
  );
};
