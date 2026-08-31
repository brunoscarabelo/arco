import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * CTA da landing page. Todos apontam para o mesmo formulario externo, que abre
 * em nova aba para nao tirar a pessoa da pagina.
 */
export function CtaButton({
    children,
    variant = 'default',
    className,
}: {
    children: React.ReactNode
    variant?: 'default' | 'outline'
    className?: string
}) {
    return (
        <Button
            asChild
            size="lg"
            variant={variant}
            className={cn(
                'rounded-[10px] max-sm:w-full',
                variant === 'default' &&
                    'shadow-[0_18px_50px_rgba(255,255,255,.12)] transition-shadow hover:shadow-[0_22px_60px_rgba(255,255,255,.18)]',
                variant === 'outline' && 'bg-transparent',
                className,
            )}>
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
                {children}
                <ArrowRight className="ml-2 size-4" />
            </a>
        </Button>
    )
}
