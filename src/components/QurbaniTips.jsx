import { ShieldCheck, HeartHandshake, Truck } from "lucide-react";

const QurbaniTips = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-green-600">Qurbani</span>{" "}
        <span className="text-orange-500">Tips</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <ShieldCheck className="mb-4 text-black" size={28} />
          <h3 className="text-lg font-semibold mb-2">Check Health</h3>
          <p className="text-gray-600 text-sm">
            Always inspect for clear eyes, smooth coat, and active movement.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <HeartHandshake className="mb-4 text-black" size={28} />
          <h3 className="text-lg font-semibold mb-2">Verify Age</h3>
          <p className="text-gray-600 text-sm">
            Cows must be at least 2 years old, goats at least 1 year for valid Qurbani.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <Truck className="mb-4 text-black" size={28} />
          <h3 className="text-lg font-semibold mb-2">Plan Delivery</h3>
          <p className="text-gray-600 text-sm">
            Book early and confirm delivery date to avoid Eid-week rush.
          </p>
        </div>

      </div>
    </div>
  );
};

export default QurbaniTips;