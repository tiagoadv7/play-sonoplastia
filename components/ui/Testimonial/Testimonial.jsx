import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.png"
import user2 from "@/public/testimonial/user1.png"
import user3 from "@/public/testimonial/user1.png"
import user4 from "@/public/testimonial/user1.png"
import user5 from "@/public/testimonial/user1.png"
import user6 from "@/public/testimonial/user1.png"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Player Youtube",
            title: "Uma aplicação desenvolvida para facilitar",
            quote: "Executar diretamente do programa, bastando apenas colar a URL do Youtube, para que seja executado dentro do programa."
        },
        {
            avatar: user2,
            name: "Facil de Usar",
            title: "Só colar a URL no campo indicado e apretar o Play",
            quote: "Para o Player Youtube ele executa diretamente o link de video Youtube. O Aplicativo só precisa está conectado a rede para que ele funcione de foma rapida e eficiente através da Web."
        },
        {
            avatar: user3,
            name: "Conheça o Programa",
            title: "Abre em segunda tela",
            quote: "Uma aplicação pensada em levar mais praticidade e agilidade para a sonoplastia de igrejas."
        },
        {
            avatar: user4,
            name: "Lista de videos",
            title: "Facil navegação",
            quote: "Só arrastar o video para a interface."
        },
        {
            avatar: user5,
            name: "Botão para play video",
            title: "Botão de procurar video",
            quote: "Aplicação pensada para facilitar a sonoplastia."
        },
        {
            avatar: user6,
            name: "Aplicação rapida",
            title: "Leve",
            quote: "Para melhorar e ajudar seu dia a dia."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                    Mais produtividade para sua Igreja!
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-2">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial