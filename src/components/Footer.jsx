import React from "react";

export default function Footer() {
  return (
    <footer>
      <AppContainer />
      <section className="w-full min-h-72 bg-[#02060c] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div className="text-white">
          <h1 className="text-2xl font-bold">Company</h1>
          <ul className="opacity-80">
            <li className="py-2 cursor-pointer">About</li>
            <li className="py-2 cursor-pointer">Careers</li>
            <li className="py-2 cursor-pointer">Teams</li>
            <li className="py-2 cursor-pointer">Swiggy one</li>
            <li className="py-2 cursor-pointer">Swiggy mart</li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <ul className="opacity-80">
            <li className="py-2 cursor-pointer">Help & Support</li>
            <li className="py-2 cursor-pointer">Partner with us</li>
            <li className="py-2 cursor-pointer">Ride with us</li>
            <li className="py-2 cursor-pointer">Business with us</li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">We deliver to</h1>
          <ul className="opacity-80">
            <li className="py-2 cursor-pointer">Delhi</li>
            <li className="py-2 cursor-pointer">Mumbai</li>
            <li className="py-2 cursor-pointer">Kolkata</li>
            <li className="py-2 cursor-pointer">Moharastro</li>
            <li className="py-2 cursor-pointer">Uttor Prodesh</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

const AppContainer = () => {
  return (
    <>
      <div className="w-full min-h-32 flex items-center justify-center gap-3 bg-[#f0f0f5]">
        <div>
          <h1 className="text-3xl font-bold opacity-80">
            For better experience,download <br /> the Swiggy app now
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span>
            <img
              className="max-h-[50px] cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="play-store"
            />
          </span>
          <span>
            <img
              className="max-h-[50px] cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="app-store"
            />
          </span>
        </div>
      </div>
    </>
  );
};

const FooterItem = () => {
  return (
    <>
      <div className="text-white">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Teams</li>
          <li>Swiggy one</li>
          <li>Swiggy mart</li>
        </ul>
      </div>
    </>
  );
};
