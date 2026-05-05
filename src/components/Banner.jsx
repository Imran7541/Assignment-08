const Banner = () => {
  return (
    <div className="gap-5">
      <div className=" hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row lg:gap-10 mt-10">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962510497-9505129083fa?"
            className="w-full lg:w-[700px] h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-green-500 mb-6">
              Qurbani made <br />{" "}
               <span className="text-orange-400">simple</span> & trusted. 
            </h1>
            <div className="mt-10">
              <p>
              Browse healthy, ethically-raised cows and goats from verified
               <br/> Bangladeshi farms. Transparent pricing. Doorstep delivery.
            </p>
            </div>
            <div className="flex mt-10 gap-5">
              <div className="flex flex-col items-center">
                <h1 className="text-green-500 text-3xl font-bold">1000+</h1>
                <p className="text-xl text-gray-600">Animals</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-red-300 text-3xl font-bold">64</h1>
                <p className="text-xl text-gray-600">Districts</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-green-500 text-3xl font-bold">100%</h1>
                <p className="text-xl text-gray-600">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
