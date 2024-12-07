import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const Download = () => {
  const plans = [
    {
      id: "youtubeplayer",
      title: "YouTube Player",
      description: "Uma interface fácil de usar, basta colar a URL.",
      price: "Grátis",
      isRecommended: true,
      features: [
        "Rápido",
        "Fácil",
        "Prático",
        "Leve",
        "Baixe já...",
      ],
      action: {
        href: "https://download943.mediafire.com/vo27ff5up4bgkz6CqoB5suH4aKklfN-e1x31ged_Hs6L-l-ywAA1Nt80EN8HgFElXs7MijM532mKHXar1S4h4nYQE8qHIAGhKLfFz5EMtLtT5S1JI__y_Viru3QfTavH6vilBQI1f9Wcwsu9gx4pEOpplCGOPu7ff8Lrw6w201_0Nw/mnc4o8lzkbjte4v/Youtube+Player-Setup-1.4.24.exe",
        label: "Download",
      },
    },
    {
      id: "playervideo",
      title: "Player Video",
      description: "Para facilitar a reprodução em duas telas.",
      price: "Grátis",
      isRecommended: true,
      features: [
        "Rápido",
        "Fácil",
        "Prático",
        "Leve",
        "Baixe já...",
      ],
      action: {
        href: "https://www.dropbox.com/scl/fi/wrfxh26mrtnppvg5nsd3o/V-deo-Player-Setup-24.4.1.exe?rlkey=yyd970hrp5x5rag95w2sv9szb&st=rxqugkgh&dl=0",
        label: "Download",
      },
    },
  ];

  return (
    <SectionWrapper id="download" className="custom-screen">
      <div className="relative max-w-xl mx-auto text-center ">
        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl pt-6">Faça o Download</h2>
        <h4 className="text-gray-50 text-2xl font-semibold sm:text-2xl">Comece a usar os aplicativos.</h4>
      </div>
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="mt-16 grid justify-center gap-y-10 gap-x-6 sm:grid-cols-1 sm:gap-y-6 md:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan) => (
            <PricingBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              isRecommended={plan.isRecommended}
            >
              <PricingFeatures>
                {plan.features.map((feature, idx) => (
                  <PricingFeature key={idx} title={feature} />
                ))}
              </PricingFeatures>
              <a
                href={plan.action.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 focus:outline-none mt-6 transform transition-transform duration-300 hover:translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {plan.action.label}
              </a>
            </PricingBox>
          ))}
        </div>
      </LayoutEffect>
    </SectionWrapper>
  );
};

const PricingFeatures = ({ children }) => (
  <ul className="space-y-3">{children}</ul>
);

const PricingFeature = ({ title }) => (
  <li className="flex items-center gap-5 text-gray-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-indigo-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    {title}
  </li>
);

const PricingBox = ({ title, description, price, children, isRecommended }) => (
  <div
    className={`relative flex-1 flex flex-col items-stretch rounded-xl border border-gray-800 p-6 ${
      isRecommended ? "border-purple-500" : ""
    }`}
  >
    <div className="text-center mb-4">
      <h3 className="text-lg font-bold text-gray-50">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="text-gray-50 text-lg font-semibold">{price}</div>
    </div>
    {children}
  </div>
);

export default Download;
