import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/hero2.svg"
import LayoutEffect from "@/components/LayoutEffect"

const Hero = () => (
    <section>
        <div className="custom-screen py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            Aplicativos para facilitar a organização
                            e praticidade da Sonoplastia!
                        </h1>
                        <p className="max-w-xl mx-auto text-lg text-gray-300">
                        Fique por dentro das últimas atualizações e melhorias
                        dos aplicativos.                        </p>
                        <div className="flex justify-center font-medium text-sm">
    <NavLink
        href="/#download"
        className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 px-4 py-2 rounded-lg transform transition-transform duration-300 hover:translate-y-1"
    >
        <span className="mr-2">Download</span> {/* Espaçamento adicionado */}
        <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
            className="chakra-icon css-12ym06z transform transition-transform duration-300 hover:translate-y-1"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
    </NavLink>
</div>

                    </div>
                    <GradientWrapper className="mt-16 sm:mt-28 flex items-center justify-center" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                        <Image
                            src={HeroImg}
                            className="rounded-sm boxshadow-lg"
                            alt="Player Vid"
                            width={900}
                        />
                    </GradientWrapper>
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero