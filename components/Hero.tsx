'use client';

import Image from 'next/image';
import { Profile } from '@/types';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#e8ecf7] to-[#f6f2fa] py-6 md:py-12 lg:py-16 overflow-hidden">
      {/* Shape chữ C phía sau avatar */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 520 520" fill="none" className="md:w-[520px] md:h-[520px]">
          <path d="M260,50 a210,210 0 1,0 0,420" stroke="#23272F" strokeWidth="70" strokeLinecap="round" opacity="0.10" />
        </svg>
      </div>
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center px-4 md:px-8 relative z-10">
        <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 items-center md:items-start">
          {/* Card About User với bell ở trên */}
          <div className="relative">
            {/* Bell nằm trên card */}
            <div className="absolute -top-3 md:-top-4 left-4 md:left-6 w-16 h-16 md:w-20 md:h-20 z-20">
              <Image src="/bell3d.png" alt="bell" width={80} height={80} className="object-contain" />
            </div>
            {/* Card About User */}
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl p-4 md:p-6 pt-10 md:pt-12 min-w-[250px] md:min-w-[270px] max-w-sm border border-[#f3f3f3]">
              <div className="font-black text-xl md:text-2xl mb-2">About User</div>
              <div className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">{profile.about}</div>
            </div>
          </div>

        </div>

        {/* Cột giữa: Avatar PNG nổi lên shape C */}
        <div className="md:col-span-4 flex flex-col items-center relative">
          <div className="relative z-10 flex items-center justify-center">
            <div className="rounded-[30px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl w-[280px] h-[320px] md:w-[340px] md:h-[400px]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={340}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Shadow/blur dưới chân */}
            <div className="absolute left-1/2 -bottom-6 md:-bottom-8 -translate-x-1/2 w-60 md:w-72 h-12 md:h-14 bg-black/20 blur-2xl rounded-full z-0" />
          </div>
        </div>

        {/* Cột phải: Info cá nhân */}
        <div className="md:col-span-4 flex flex-col justify-center gap-4 md:gap-6 md:items-end items-center">
          <div className="flex flex-col gap-2 md:gap-3 md:items-end items-center md:text-right text-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#23272F] leading-tight">
                {profile.name}
              </span>
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-[#6B7280]">
              {profile.location}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#23272F]">
              {profile.title}
            </div>
            <div className="mt-3 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              Get In Touch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}