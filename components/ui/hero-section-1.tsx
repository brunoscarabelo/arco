'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const funnelSteps = [
    {
        n: '01',
        title: 'Demanda',
        opacity: 0.85,
        description: 'Pessoas buscando ajuda com INSS',
    },
    {
        n: '02',
        title: 'Atenção',
        opacity: 0.6,
        description: 'Seu escritório aparece na hora certa',
    },
    {
        n: '03',
        title: 'Contato',
        opacity: 0.38,
        description: 'Jornada estruturada até sua equipe',
    },
    {
        n: '04',
        title: 'Acompanhamento',
        opacity: 0.22,
        description: 'Análise e melhoria contínua',
    },
]

export function HeroSection() {
    return (
        <section className="overflow-hidden">
            {/* feixes diagonais: o desenho original do bloco, sobre o preto do site */}
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            <div className="relative pt-24 md:pt-36">
                {/* halo superior herdado do site estatico, no lugar da imagem remota do bloco */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-64 left-1/2 -z-20 h-[620px] w-[1100px] max-w-[180vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.13),rgba(255,255,255,0)_62%)]"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
                />

                <div className="mx-auto max-w-7xl px-[var(--pad)]">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <AnimatedGroup variants={transitionVariants}>
                            <h1 className="mx-auto max-w-4xl text-balance text-[clamp(28px,4.8vw,54px)] font-semibold leading-[1.08] tracking-[-0.035em]">
                                Mais clientes para o seu escritório de advocacia
                                previdenciária.
                            </h1>
                            <p className="mx-auto mt-8 max-w-[640px] text-pretty text-[clamp(15.5px,1.6vw,17.5px)] leading-relaxed text-muted-foreground">
                                Nós ajudamos escritórios que atuam com Direito
                                Previdenciário a{' '}
                                <span className="text-foreground">
                                    aumentar a entrada de novos clientes
                                </span>{' '}
                                através de uma estratégia de aquisição desenvolvida
                                para sua área de atuação.
                            </p>
                            <p className="mx-auto mt-6 max-w-[640px] text-pretty text-[clamp(15.5px,1.6vw,17.5px)] leading-relaxed text-muted-foreground">
                                Você cuida dos seus clientes.
                                <br />
                                <span className="text-foreground">
                                    Nós cuidamos de encontrar novos clientes para o
                                    seu escritório.
                                </span>
                            </p>
                        </AnimatedGroup>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[14px] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base shadow-[0_18px_50px_rgba(255,255,255,.12)] transition-shadow hover:shadow-[0_22px_60px_rgba(255,255,255,.18)]">
                                    <Link href="#contato">
                                        <span className="text-nowrap">
                                            Quero atrair mais clientes
                                        </span>
                                        <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>
                            </div>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5 text-base">
                                <Link href="#metodo">
                                    <span className="text-nowrap">
                                        Conhecer a estratégia
                                    </span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>

                {/* painel do funil no lugar do screenshot de app do bloco original */}
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="relative mt-8 overflow-hidden px-[var(--pad)] sm:mt-12 md:mt-20">
                        <div
                            aria-hidden
                            className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="bg-panel/60 relative mx-auto max-w-[var(--shell)] overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-gradient-to-b from-white/5 to-transparent p-[clamp(18px,2.5vw,28px)] text-left">
                            <p className="border-line font-mono border-b pb-5 text-[11px] tracking-[0.1em] text-white/40">
                                FUNIL DE AQUISIÇÃO — VISÃO GERAL
                            </p>
                            <div className="bg-line border-line mt-6 grid grid-cols-1 gap-px border sm:grid-cols-2 lg:grid-cols-4">
                                {funnelSteps.map((step) => (
                                    <div
                                        key={step.n}
                                        className="bg-panel flex flex-col gap-2.5 px-5 py-6">
                                        <span className="text-muted-3 font-mono text-[11px]">
                                            {step.n}
                                        </span>
                                        <span className="text-[15px] font-semibold">
                                            {step.title}
                                        </span>
                                        <div
                                            aria-hidden
                                            className="h-1.5 rounded-[3px] bg-white"
                                            style={{ opacity: step.opacity }}
                                        />
                                        <span className="text-muted-2 text-[12.5px]">
                                            {step.description}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}

const menuItems = [
    { name: 'Método', href: '#metodo' },
    { name: 'Atuação', href: '#atuacao' },
    { name: 'Contato', href: '#contato' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled &&
                            'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
                    )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="#top"
                                aria-label="ARCO — início"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={
                                    menuState ? 'Fechar menu' : 'Abrir menu'
                                }
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-black/40 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    setMenuState(false)
                                                }
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild size="sm">
                                    <Link
                                        href="#contato"
                                        onClick={() => setMenuState(false)}>
                                        <span>Quero atrair mais clientes</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="16.5 30 1037.5 171.5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            focusable="false"
            className={cn('h-4 w-auto lg:h-[18px]', className)}>
            <path d="M316.13,201.35h-55.55l-23.68-32.18H95.74l-23.68,32.18H16.51L128.22,51.69c9.11-11.84,22.16-21.55,38.25-21.55s29.14,9.71,37.94,21.55l111.71,149.65ZM205.02,125.46l-38.86-53.43-38.86,53.43h77.71Z" />
            <path d="M551.69,201.35h-43.71v-43.71h-148.14v43.71h-43.71V33.78h182.74c29.14,0,52.82,23.68,52.82,52.82v18.21c0,12.75-6.07,23.68-15.18,30.96,9.11,7.29,15.18,18.21,15.18,30.96v34.61ZM507.97,113.92v-36.43h-148.14v36.43h148.14Z" />
            <path d="M806.67,201.35h-182.74c-29.14,0-52.82-23.68-52.82-52.82v-61.93c0-29.14,23.68-52.82,52.82-52.82h182.74v43.71h-191.85v80.14h191.85v43.71Z" />
            <path d="M1053.77,148.53c0,29.14-23.68,52.82-52.82,52.82h-129.92c-29.14,0-52.82-23.68-52.82-52.82v-61.93c0-29.14,23.68-52.82,52.82-52.82h129.92c29.14,0,52.82,23.68,52.82,52.82v61.93ZM1010.06,157.63v-80.14h-148.14v80.14h148.14Z" />
        </svg>
    )
}
