import { ArcoLogo } from '@/components/ui/arco-logo'

export function SiteFooter() {
    return (
        <footer className="border-line border-t px-[var(--pad)] py-[clamp(40px,6vw,64px)]">
            <div className="flex flex-col items-center gap-6">
                <ArcoLogo className="h-5 text-white/90 sm:h-6" />
                <p className="text-muted-3 text-[12.5px]">
                    © {new Date().getFullYear()} ARCO. Todos os direitos
                    reservados.
                </p>
            </div>
        </footer>
    )
}
