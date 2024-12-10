import React, { useState } from "react";
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const Download = () => {
  const [downloadMessage, setDownloadMessage] = useState("");

  const plans = [
    {
      id: "youtubeplayer",
      title: "YouTube Player",
      description: "Uma interface fácil de usar, basta colar a URL.",
      price: "Grátis",
      isRecommended: true,
      features: ["Rápido", "Fácil", "Prático", "Leve", "Baixe já..."],
      action: {
        href: "https://www.dropbox.com/scl/fi/rgvr5sv73x2vhzmvcxipr/Youtube-Player-Setup-1.4.24.exe?rlkey=o5iy4onqfya3c82aumh4it245&st=j6r6j4lm&dl=1",
        label: "Download",
      },
    },
    {
      id: "playervideo",
      title: "Player Video",
      description: "Para facilitar a reprodução em duas telas.",
      price: "Grátis",
      isRecommended: true,
      features: ["Rápido", "Fácil", "Prático", "Leve", "Baixe já..."],
      action: {
        href: "https://www.dropbox.com/scl/fi/wrfxh26mrtnppvg5nsd3o/V-deo-Player-Setup-24.4.1.exe?rlkey=yyd970hrp5x5rag95w2sv9szb&st=rxqugkgh&dl=1",
        label: "Download",
      },
    },
  ];

  const handleDownload = async (url, filename) => {
    setDownloadMessage("Download iniciado...");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro no download.");
      }

      const total = response.headers.get("content-length");
      const reader = response.body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;

        if (total) {
          const percent = ((received / total) * 100).toFixed(2);
          setDownloadMessage(`Baixando... ${percent}%`);
        }
      }

      const blob = new Blob(chunks);
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);

      setDownloadMessage("Download concluído!");
      setTimeout(() => setDownloadMessage(""), 3000);
    } catch (error) {
      setDownloadMessage("Erro ao realizar o download.");
      setTimeout(() => setDownloadMessage(""), 3000);
    }
  };

  return (
    <SectionWrapper id="download" className="custom-screen">
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl pt-6">
          Faça o Download
        </h2>
        <h4 className="text-gray-50 text-2xl font-semibold sm:text-2xl">
          Comece a usar os aplicativos.
        </h4>
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
              <button
                onClick={() =>
                  handleDownload(plan.action.href, `${plan.title}.exe`)
                }
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
              </button>
            </PricingBox>
          ))}
        </div>
      </LayoutEffect>
      {downloadMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          {downloadMessage}
        </div>
      )}
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
