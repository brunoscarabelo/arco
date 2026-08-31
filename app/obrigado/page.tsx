import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { ArcoLogo } from '@/components/ui/arco-logo'

export const metadata: Metadata = {
    title: 'Obrigado — ARCO',
    description: 'Recebemos as informações do seu escritório.',
    alternates: { canonical: '/obrigado' },
    // pagina de pos-conversao: nao deve aparecer na busca nem competir com a home
    robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
    return (
        <main className="relative flex flex-1 items-center justify-center overflow-hidden px-[var(--pad)] py-[clamp(80px,14vw,160px)]">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] max-w-[180vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.11),rgba(255,255,255,0)_65%)]"
            />

            <div className="relative flex max-w-[580px] flex-col items-center gap-7 text-center">
                <ArcoLogo className="h-5 text-white/80" />

                <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
                    <Check className="size-5" strokeWidth={2.5} />
                </span>

                <h1 className="text-[clamp(30px,5vw,46px)] leading-[1.08] font-semibold tracking-[-0.035em] text-balance">
                    Obrigado!
                </h1>

                <p className="text-muted-foreground text-[clamp(16px,1.7vw,18px)] leading-relaxed text-pretty">
                    Recebemos as informações do seu escritório.
                </p>

                <p className="text-muted-foreground text-[clamp(15.5px,1.6vw,17px)] leading-relaxed text-pretty">
                    Vamos analisar o que você nos contou e{' '}
                    <span className="text-foreground">
                        em breve entraremos em contato
                    </span>{' '}
                    para conversar sobre a estratégia de aquisição de novos
                    clientes para sua advocacia.
                </p>
            </div>
        </main>
    )
}
