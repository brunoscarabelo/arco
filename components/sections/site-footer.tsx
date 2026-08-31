export function SiteFooter() {
    return (
        <footer className="border-line border-t px-[var(--pad)] pt-[clamp(32px,5vw,44px)] pb-[clamp(40px,6vw,60px)]">
            <div className="mx-auto flex max-w-[var(--shell)] flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <span className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.01em]">
                        <span
                            aria-hidden
                            className="size-[18px] rounded-[5px] bg-gradient-to-br from-white to-[#8a8a8a]"
                        />
                        Instância
                    </span>
                    <span className="text-muted-3 font-mono text-[11px] tracking-[0.1em] max-sm:text-[10px]">
                        AQUISIÇÃO PARA ADVOCACIA PREVIDENCIÁRIA
                    </span>
                </div>
                <p className="max-w-[760px] text-[12.5px] leading-relaxed text-white/35 italic">
                    Publicidade jurídica sujeita às normas aplicáveis à advocacia.
                    A contratação não implica garantia de quantidade de clientes,
                    resultados ou êxito em demandas jurídicas.
                </p>
            </div>
        </footer>
    )
}
