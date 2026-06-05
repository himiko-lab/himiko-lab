import React from 'react';

const Hero = () => {
  return (
    <section className="pt-28 pb-12 px-6 bg-transparent" id="home">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-900">
          Tingkatkan kualitas keseharian Anda melalui solusi digital cerdas.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mt-6">
          Himiko Lab merancang perangkat digital yang minimalis, modern, dan nyaman untuk menyempurnakan rutinitas Anda sehari-hari.
        </p>
      </div>
    </section>
  );
};

export default Hero;
