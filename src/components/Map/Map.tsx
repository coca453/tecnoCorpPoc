export const Map = () => {
  return (
    <div className="mx-2 mt-2 rounded-3xl bg-secondary-dark py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400">
            texto
          </h2>
          <h3
            data-dark="true"
            className="mt-2 max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl"
          >
            Customer outreach has never been easier.
          </h3>
          <img src="/assets/img/map.webp" alt="" />
        </div>
      </div>
    </div>
  );
};
