import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  return (
    <div className="fixed top-0 left-16 w-screen m-0 flex flex-col text-black shadow-lg">
      <Ticket></Ticket>
      <Ticket></Ticket>
      <Ticket></Ticket>
    </div>
  );
}

export default TicketList;
