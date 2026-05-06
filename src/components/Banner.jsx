"use client";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="gap-5">
      <div className="hero bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row lg:gap-10 my-10">
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1661962510497-9505129083fa?"
            className="w-full lg:w-[600px] h-[300px] lg:h-[400px] object-cover rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <motion.h1
              className="text-5xl font-bold text-green-500 mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Qurbani made <br />
              <span className="text-orange-400">simple</span> & trusted.
            </motion.h1>
            <motion.p
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Browse healthy, ethically-raised cows and goats from verified
              <br /> Bangladeshi farms. Transparent pricing. Doorstep delivery.
            </motion.p>
            <div className="flex mt-10 gap-5">
              {[
                { value: "1000+", label: "Animals", color: "text-green-500" },
                { value: "64", label: "Districts", color: "text-red-300" },
                { value: "100%", label: "Verified", color: "text-green-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  <h1 className={`${item.color} text-3xl font-bold`}>
                    {item.value}
                  </h1>
                  <p className="text-xl text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
