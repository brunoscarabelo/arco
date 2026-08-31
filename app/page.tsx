import { HeroHeader, HeroSection } from '@/components/ui/hero-section-1'
import Velaris from '@/components/ui/velaris'
import { CtaButton } from '@/components/ui/cta-button'
import { SiteFooter } from '@/components/sections/site-footer'

// referencia estavel: o useEffect do Velaris tem `colors` nas dependencias
const VELARIS_COLORS = ['#3a3a3a', '#8a8a8a', '#1a1a1a', '#050505']

const methodCards = [
    {
        tag: '01 / OPORTUNIDADE',
        title: 'Encontramos oportunidades.',
        body: 'Identificamos onde existem pessoas buscando ajuda relacionada à sua área de atuação.',
    },
    {
        tag: '02 / ALCANCE',
        title: 'Atraímos essas pessoas.',
        body: 'Criamos uma estratégia para fazer com que elas conheçam o seu escritório.',
    },
    {
        tag: '03 / CONVERSÃO',
        title: 'Transformamos interesse em contato.',
        body: 'Estruturamos a jornada para facilitar que potenciais clientes entrem em contato com sua equipe.',
    },
    {
        tag: '04 / MENSURAÇÃO',
        title: 'Acompanhamos a aquisição.',
        body: 'Analisamos os resultados e aprimoramos continuamente a estratégia.',
    },
]

const alternatives = [
    'Em vez de esperar uma indicação.',
    'Em vez de depender exclusivamente do networking.',
    'Em vez de publicar conteúdo esperando que alguém entre em contato.',
]

const insights = [
    'Os problemas que levam as pessoas a procurar um advogado',
    'Os serviços com maior potencial de demanda',
    'O perfil dos potenciais clientes',
    'As oportunidades de aquisição',
    'A melhor forma de apresentar o escritório para essas pessoas',
]

export default function Home() {
    return (
        <>
            <HeroHeader />

            <main id="top" className="flex-1">
                <HeroSection />

                <section className="border-line border-t">
                    <div className="mx-auto max-w-[var(--shell)] px-[var(--pad)] py-[var(--section-y)]">
                        <div className="grid items-start gap-[var(--gap-col)] md:grid-cols-2">
                            <h2 className="text-[clamp(26px,3.8vw,42px)] leading-tight font-semibold tracking-[-0.03em]">
                                Seu escritório poderia estar recebendo mais
                                clientes.
                            </h2>
                            <div className="text-muted-foreground flex flex-col gap-[22px] text-[clamp(15.5px,1.5vw,17px)] leading-relaxed">
                                <p>
                                    Todos os dias, milhares de pessoas procuram
                                    ajuda para resolver problemas relacionados ao
                                    INSS e à Previdência.
                                </p>
                                <p className="font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
                                    A questão é
                                </p>
                                <p className="text-foreground text-[clamp(19px,2.2vw,24px)] leading-snug font-semibold tracking-[-0.02em]">
                                    Quantas dessas pessoas estão chegando até o seu
                                    escritório?
                                </p>
                                <p>
                                    Nossa proposta é simples:{' '}
                                    <span className="text-foreground">
                                        colocar seu escritório em uma estratégia
                                        contínua de aquisição de novos clientes.
                                    </span>
                                </p>
                                <div className="mt-2">
                                    <CtaButton>
                                        Quero receber mais clientes
                                    </CtaButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="metodo" className="scroll-mt-24 border-line bg-muted border-t">
                    <div className="mx-auto max-w-[var(--shell)] px-[var(--pad)] py-[var(--section-y)]">
                        <div className="flex max-w-[720px] flex-col gap-5">
                            <h2 className="text-[clamp(28px,4.4vw,48px)] leading-[1.06] font-semibold tracking-[-0.035em]">
                                Você não precisa depender apenas de indicações.
                            </h2>
                            <p className="text-muted-foreground text-[clamp(15.5px,1.5vw,17px)] leading-relaxed">
                                Indicações são importantes. Mas um escritório que
                                deseja crescer precisa também construir uma forma
                                previsível de{' '}
                                <span className="text-foreground">
                                    atrair novas pessoas interessadas em seus
                                    serviços.
                                </span>{' '}
                                É isso que fazemos.
                            </p>
                        </div>

                        <div className="bg-line border-line mt-[clamp(40px,6vw,64px)] grid gap-px overflow-hidden rounded-[14px] border sm:grid-cols-2">
                            {methodCards.map((card) => (
                                <article
                                    key={card.tag}
                                    className="bg-panel hover:bg-panel-hover flex flex-col gap-3.5 px-[clamp(22px,3vw,34px)] py-[clamp(28px,3.5vw,40px)] transition-colors">
                                    <span className="text-muted-3 font-mono text-[11px] tracking-[0.14em]">
                                        {card.tag}
                                    </span>
                                    <h3 className="text-[clamp(19px,2vw,23px)] font-semibold tracking-[-0.02em]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[15.5px] leading-relaxed text-white/55">
                                        {card.body}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-[clamp(32px,4.5vw,48px)] flex justify-center">
                            <CtaButton>Quero aplicar essa estratégia</CtaButton>
                        </div>
                    </div>
                </section>

                <section className="border-line relative overflow-hidden border-t">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-80 left-1/2 h-[600px] w-[900px] max-w-[180vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.12),rgba(255,255,255,0)_65%)]"
                    />
                    <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-[clamp(24px,3.5vw,34px)] px-[var(--pad)] py-[clamp(72px,10vw,130px)] text-center">
                        <h2 className="text-[clamp(28px,4.8vw,52px)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance">
                            Imagine ter uma fonte constante de novos potenciais
                            clientes.
                        </h2>
                        <ul className="bg-line border-line flex w-full max-w-[620px] flex-col gap-px overflow-hidden rounded-xl border">
                            {alternatives.map((item) => (
                                <li
                                    key={item}
                                    className="bg-panel px-6 py-4.5 text-left text-[15.5px] text-white/50">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="max-w-[640px] text-[clamp(18px,2.2vw,24px)] leading-snug font-semibold tracking-[-0.02em]">
                            Seu escritório passa a ter uma estratégia dedicada à
                            aquisição de novos clientes.
                        </p>
                        <CtaButton variant="outline">
                            Quero conhecer a estratégia
                        </CtaButton>
                    </div>
                </section>

                <section id="atuacao" className="scroll-mt-24 border-line bg-muted border-t">
                    <div className="mx-auto grid max-w-[var(--shell)] items-start gap-[clamp(32px,5.5vw,72px)] px-[var(--pad)] py-[var(--section-y)] md:grid-cols-2">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-[clamp(26px,3.8vw,42px)] leading-tight font-semibold tracking-[-0.03em]">
                                Especializados em aquisição para advocacia
                                previdenciária
                            </h2>
                            <p className="text-muted-foreground text-[17px] leading-relaxed">
                                Não trabalhamos com uma estratégia genérica para
                                qualquer empresa. Nossa atuação é direcionada a
                                escritórios que trabalham com{' '}
                                <span className="text-foreground">
                                    Direito Previdenciário
                                </span>{' '}
                                e desejam ampliar sua aquisição de novos clientes.
                            </p>
                        </div>
                        <div>
                            <p className="mb-5 font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
                                Isso nos permite entender melhor
                            </p>
                            <ul>
                                {insights.map((item, i) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-4 border-t border-white/10 py-5 text-base leading-normal text-white/80 last:border-b max-sm:gap-3">
                                        <span className="pt-1 font-mono text-[11px] text-white/30">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <CtaButton>
                                    Quero uma análise do meu escritório
                                </CtaButton>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-line border-t">
                    <div className="mx-auto flex max-w-[var(--shell)] flex-col items-center gap-[clamp(20px,2.6vw,26px)] px-[var(--pad)] py-[var(--section-y)] text-center">
                        <h2 className="text-[clamp(27px,4.2vw,46px)] leading-[1.08] font-semibold tracking-[-0.035em]">
                            Você já possui um escritório.
                            <br />
                            <span className="text-muted-2">
                                Agora precisa de uma estratégia para fazê-lo
                                crescer.
                            </span>
                        </h2>
                        <p className="text-muted-foreground max-w-[620px] text-[clamp(15.5px,1.5vw,17px)] leading-relaxed">
                            Se o seu escritório está preparado para atender novos
                            clientes, podemos conversar sobre como estruturar uma
                            estratégia de aquisição adequada à sua atuação.
                        </p>
                        <CtaButton>
                            Quero mais clientes para meu escritório
                        </CtaButton>
                    </div>
                </section>

                <section
                    id="contato"
                    className="border-line scroll-mt-24 border-t">
                    <Velaris
                        height="auto"
                        bg="#050505"
                        colors={VELARIS_COLORS}
                        speed={1.2}
                        grain={0.25}>
                        <div className="mx-auto flex max-w-[var(--shell)] flex-col items-center gap-6 px-[var(--pad)] py-[clamp(96px,13vw,168px)] text-center">
                            <h2 className="text-[clamp(28px,4.8vw,52px)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                                Vamos conversar?
                            </h2>
                            <p className="max-w-[620px] text-[clamp(15.5px,1.6vw,17.5px)] leading-relaxed text-pretty text-white/80 drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
                                Conte um pouco sobre o seu escritório e sobre seus
                                objetivos.
                            </p>
                            <p className="max-w-[620px] text-[clamp(15.5px,1.6vw,17.5px)] leading-relaxed text-pretty text-white/80 drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
                                Após analisar suas informações, entraremos em
                                contato para entender se existe potencial para
                                desenvolver uma estratégia de aquisição de novos
                                clientes para sua advocacia.
                            </p>
                            <div className="mt-2">
                                <CtaButton>Quero solicitar uma análise</CtaButton>
                            </div>
                        </div>
                    </Velaris>
                </section>
            </main>

            <SiteFooter />
        </>
    )
}
