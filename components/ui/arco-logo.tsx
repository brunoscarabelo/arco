import { cn } from '@/lib/utils'

/**
 * Logotipo ARCO (legacy/assets/arco.svg).
 * viewBox recortado na bounding box real do desenho — o arquivo exportado tem
 * folga em volta, que desalinharia o logo em relacao ao resto do layout.
 * O fill do arquivo (#fff) vira currentColor para o logo herdar a cor do texto.
 */
export function ArcoLogo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="56.41 37.35 959.6 161.01"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="ARCO"
            className={cn('h-4 w-auto', className)}>
            <path d="M290.33,198.36H107.16c-28.29,0-50.75-22.75-50.75-50.75s22.46-50.75,50.75-50.75h141.17v-17.5H64v-42h175.59c28,0,50.75,22.75,50.75,50.75v110.25ZM248.33,156.36v-17.5H98.41v17.5h149.92Z" />
            <path d="M535.34,124.85h-42v-45.5h-142.34v119h-42V37.35h175.59c28,0,50.75,22.75,50.75,50.75v36.75Z" />
            <path d="M775.67,198.36h-175.59c-28,0-50.75-22.75-50.75-50.75v-59.5c0-28,22.75-50.75,50.75-50.75h175.59v42h-184.34v77h184.34v42Z" />
            <path d="M1016.01,147.61c0,28-22.75,50.75-50.75,50.75h-124.84c-28,0-50.75-22.75-50.75-50.75v-59.5c0-28,22.75-50.75,50.75-50.75h124.84c28,0,50.75,22.75,50.75,50.75v59.5ZM974,156.36v-77h-142.34v77h142.34Z" />
        </svg>
    )
}
