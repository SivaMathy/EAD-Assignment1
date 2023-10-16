import React from "react";
import Img2 from "../m_img/ticket.png"
import Img3 from "../m_img/new-ticket.png"

export default function AgentDashBoard2() {
  return (
    <>
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 bg-white rounded-lg p-8 space-y-6">
            <h1 className="text-4xl font-bold text-center " style={{color:"#1B998B"}}>
              Agent Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-300 rounded-lg">
                <button
                  className="btn btn-info tab"
                  type="button"
                  onClick={() => window.location.href = "/user"}
                >
                  <img
                    src={Img2}
                    alt="Manage Trains"
                    className="w-24 h-24 mx-auto"
                  />
                  <h2 className="text-2xl text-center">Ticket Reservation</h2>
                </button>
              </div>
              <div className="p-4 bg-emerald-300 rounded-lg">
                <button
                  className="btn btn-info tab"
                  type="button"
                  onClick={() => window.location.href = "/user"}
                >
                  <img
                    src={Img3}
                    alt="Manage Agents"
                    className="w-24 h-24 mx-auto"
                  />
                  <h2 className="text-2xl text-center">View Reservation</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
