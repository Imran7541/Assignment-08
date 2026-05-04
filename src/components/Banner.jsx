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
            <h1 className="text-2xl font-bold text-green-500 mb-6">
              Qurbani made simple & trusted.
            </h1>
            <p>
              Browse healthy, ethically-raised cows and goats from verified
              Bangladeshi farms. Transparent pricing. Doorstep delivery.
            </p>
            <div className="flex">
              <h1>500+ Animals</h1>
              <h1>64 Districts</h1>
              <h1>100% Verified</h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
