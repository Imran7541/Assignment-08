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
              QurbaniHat – নির্ভরযোগ্য<br/> কোরবানির <br /> পশু বুকিং প্ল্যাটফর্ম ।
            </h1>
            <p>
              QurbaniHat-এ সরাসরি খামার থেকে <br /> সেরা দামে স্বাস্থ্যসম্মত গরু
              ও ছাগল
              <br /> বুক করুন দ্রুত এবং নিরাপদে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
