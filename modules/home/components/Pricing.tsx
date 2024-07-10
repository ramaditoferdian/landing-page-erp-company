// components/Pricing.jsx
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Best for individuals getting started.",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
    cta: "Get started",
  },
  {
    name: "Business",
    price: "$24",
    description: "Best for professionals growing their business.",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
    ],
    cta: "Get started",
  },
  {
    name: "Entrepreneur",
    price: "$48",
    description: "Best for large-scale businesses and teams.",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
    cta: "Get started",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-white py-12 sm:py-16 lg:py-24 xl:h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Start for free, then grow with us.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:mt-16 xl:grid-cols-3 lg:gap-x-10 justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-indigo-600 rounded-lg shadow-sm p-8 min-w-[340px] max-w-[370px] flex flex-col"
            >
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <div className="mt-6">
                  <p className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-base text-gray-500">per month</p>
                </div>
                <ul className="mt-6 mb-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="ml-3 text-sm text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block w-full py-2 px-4 border border-transparent rounded-md text-center text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
