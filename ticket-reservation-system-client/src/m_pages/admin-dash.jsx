import React from "react";
import { Link, Navigate } from "react-router-dom";
import Img1 from "../m_img/img2.png";
import Img2 from "../m_img/train.png";
import Img3 from "../m_img/user.png";

export default function Signin() {

  return (
    <>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full "
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <img src={Img1} style={{ height: "400px", width: "600px" }} />
            <div className="w-full lg:w-4/12 px-4">
              <div style={{ paddingLeft: "50px" }}>
                <div style={{ paddingLeft: "50px" }}>
                  <h1 className="p-3 text-4xl font-bold">
                    <span style={{ color: "#1B998B" }}>Admin </span>
                    <span style={{ color: "#11468F" }}>DashBoard</span>
                  </h1>
                  <br />
                  <br />
                </div>

                <div
                  class="grid grid-rows-3 grid-flow-col gap-4"
                  style={{ paddingLeft: "50px" }}
                >
                  <div class="row-span-2 ...">
                    <div class="col-span-2 ...">
                      <div
                        class="col"
                        style={{ border: "1 border-style: solid;" }}
                      >
                        <button
                          className="btn btn-info tab"
                          type="submit"
                          style={{
                            color: "black",
                            fontSize: "20px",
                            background: "white",
                            height: "200px",
                            width: "200px",
                          }}
                          onClick={()=>window.location.href = `/user`}
                        >
                          <a
                            className="text-decoration-none text-dark "
                            href="/home"
                            style={{border:"1 border-style: solid;"}}
                          >
                            <img
                              class="d-block w-100"
                              src={Img2}
                              alt="First slide"
                              style={{
                                height: "80px",
                                width: "100px",
                                paddingLeft: "20px",
                              }}
                            ></img>

                            <h2 style={{ paddingRight: "60px" }}>
                              Manage Trains
                            </h2>
                          </a>
                          <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row-span-2">
                    <div class="col-span-2">
                     
                        
                        <button
                          className="btn btn-info tab"
                          
                          style={{
                            color: "black",
                            fontSize: "20px",
                            background: "white",
                            height: "200px",
                            width: "200px",
                            
                            
                          }}
                          onClick={() => window.location.href = `/user`}
                        >
                          <a
                            className="text-decoration-none text-dark "
                          
                          >
                            <img
                              class="d-block w-100"
                              src={Img3}
                              alt="First slide"
                              style={{
                                height: "80px",
                                width: "100px",
                                paddingLeft: "20px",
                              }}
                            ></img>

                            <h2 style={{ paddingRight: "60px" }}>
                              Manage Agents
                            </h2>
                          </a>
                          <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
