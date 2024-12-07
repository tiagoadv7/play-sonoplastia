import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "Player Video",
        a: "Procure arquivos localmente, ou arraste para a tela do app.",
    },
    {
        q: "YouTube Player",
        a: "Copie URL do youtube e cole na barra de pesquisa.",
    },
    // {
    //     q: "",
    //     a: "",
    // },
    {
        q: "Praticidade e Produtividade",
        a: "Com apenas um click, o aplicativo vai carregar as informações e aparecer em tela.",
    },
    {
        q: "Com apenas um botão você pode execultar",
        a: "Só colar a URL e apertar o botão Enter, para executar o Player.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl pt-6">
                    Modo de usar
                </h2>
                <p className="mt-3">
                    As aplicações.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-2'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-2"
                            >
                                <summary
                                    className="flex items-center justify-center font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed justify-center text-center'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs