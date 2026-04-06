import React from 'react';

const TopBanner = ({title, imageName}) => {
  return (
    <div className="relative h-56 w-full overflow-hidden md:h-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/${imageName ? imageName : "banner.jpg"}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 via-[#0f172a]/35 to-[#0f172a]/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-3xl font-black text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default TopBanner;
