import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-white py-4" style={{backgroundColor:"#02353C"}}>
      <div className="md:px-24 px-10 text-xl pb-4 border-b-4 border-white-900">EVMart</div>
      <div className="md:px-24 px-10 py-8 flex md:flex-row flex-col w-full justify-between border-b-4 border-white-900">
        <div>
          <div className="mb-4 font-semibold">E-Bikes</div>
          <div className="text-sm">
            <ul>
              <li>Revolt RV400</li>
              <li>Ola S1</li>
              <li>TVS iQube</li>
              <li>Ather 450X</li>
              <li>Bajaj Chetak</li>
              <li>Hero Electric Optima</li>
              <li>Hero Electric Atria</li>
              <li>Komaki XGTKM</li>
              <li>Ampere Magnus</li>
              <li>Hero Electric NYX</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">E-3 wheeler</div>
          <div className="text-sm">
            <ul>
              <li>Mahindra Treo Zor</li>
              <li>Kinetic Safar Jumbo</li>
              <li>Atul Elite Cargo</li>
              <li>Lohia Marain Cargo</li>
              <li>Kinetic Safar Shakti</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">E-Car</div>
          <div className="text-sm">
            <ul>
              <li>Tata Nexon EV</li>
              <li>Tata Tigor EV</li>
              <li>MG ZS EV</li>
              <li>Hyundai Koma Electric</li>
              <li>Juguar I-Pace</li>
              <li>Audi e-Tron</li>
              <li>BMW iX</li>
              <li>Audi e-Tron Sportback</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">Support</div>
          <div className="text-sm">
            <ul>
              <li>Contact us</li>
              <li>Book a Test Ride</li>
              <li>Become a Seller</li>
              <li>Become a Dealer</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">Abour Us</div>
          <div className="text-sm">About EVMart</div>
        </div>
        <div>
          <div className="mb-4 font-semibold">Careers</div>
          <div className="text-sm">
            <ul>
              <li>Our culture</li>
              <li>Job Openings</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">Media & Events</div>
          <div className="text-sm">
            <ul>
              <li>Events</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-24 px-10 py-4"> <span className="font-semibold">© 2022. AdoptEV Technologies PVT LTD | </span> *T&C apply</div>
    </div>
  );
};

export default Footer;