"use client";
import React from "react";

import { FaLeftLong, FaRightLong, FaSquareGithub } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
// import Image from "next/image";
import "./h.css";
import "./s.css";
import { IoServerSharp } from "react-icons/io5";
import { PinContainer } from "../../ui/PinContainer";
import Image from "next/image";
export function Project01() {
  return (
    <div className="">
      <div className="h-[29rem] w-full flex items-center justify-center mb-16">
        <PinContainer
          title="Details Project"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28.5rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Garments Industry Monitoring Software
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This project is an inventory and monitoring software for the
                {/* garments industry... */}
              </span>
            </div>
            <div className="py-5">
              {/* <h2 className="text-center">Image Scroll on Hover</h2> */}
              <div className="col-md-4 col-md-offset-4 contents2">
                <div className="screens2 relative">
                  <Image
                    fill
                    src="https://md-sujon-mia-portfolio.vercel.app/111.png"
                    alt="Scrollable Content"
                  />
                </div>
              </div>
            </div>
            <div />

            <div className="flex justify-between items-center mb-2">
              <FaLeftLong className="text-4xl text-[#1da1f2]" />
              <div className="flex gap-2 justify-center">
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="text-white font-mono">
                        GitHub Clink Site
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <a
                      className="icon"
                      href="https://github.com/sujon-258549/inventory-management"
                    >
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin">
                          <div style={{ marginLeft: "4px", marginTop: "4px" }}>
                            <FaSquareGithub className="text-[#1da1f2]" />
                          </div>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="text-white font-mono">Server Link</div>
                    </div>
                  </div>
                  <div className="text">
                    <a
                      className="icon"
                      href="https://github.com/sujon-258549/inventory-management-service"
                    >
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin">
                          <div style={{ marginLeft: "4px", marginTop: "4px" }}>
                            <IoServerSharp className="text-[#1da1f2]" />
                          </div>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="text-white font-mono">Live Link</div>
                    </div>
                  </div>
                  <div className="text">
                    <a
                      className="icon"
                      href="https://inventory-management-354ce.web.app/"
                    >
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin">
                          <div style={{ marginLeft: "4px", marginTop: "4px" }}>
                            <CgMediaLive className="text-[#1da1f2]" />
                          </div>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <FaRightLong className="text-4xl text-[#1da1f2]" />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
