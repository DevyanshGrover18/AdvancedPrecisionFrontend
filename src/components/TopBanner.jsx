import React from 'react';

const TopBanner = ({title}) => {
  return (
    <div className="relative h-56 md:h-72 w-full overflow-hidden">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 via-[#0f172a]/35 to-[#0f172a]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-3xl md:text-6xl font-black text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            {title}
          </h1>
        </div>
      </div>
  );
}

export default TopBanner;
