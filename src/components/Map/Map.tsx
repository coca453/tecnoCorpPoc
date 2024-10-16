export const Map = () => {
  return (
    <div className="mx-2 mt-2 mb-2 rounded-3xl bg-secondary-dark py-32">
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
          <div className="flex">
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem deleniti, laudantium sint ad expedita possimus
                repellat adipisci asperiores iusto quasi in enim repudiandae
                quaerat sunt consequuntur hic accusantium dolores deserunt!
              </p>
            </div>
            <div className="flex bg-white rounded-xl p-2 inset-px">
              <div className="flex flex-col items-center">
                <img src="/assets/img/map.png" alt="" className="w-80 " />
                <div className="w-80 p-10 pt-4">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit quo velit vitae voluptate sequi nisi omnis cum at optio
                    illum, dolorum rem pariatur, natus amet neque, temporibus
                    molestias animi impedit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
