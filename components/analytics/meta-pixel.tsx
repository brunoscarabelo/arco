import Script from 'next/script'

export const META_PIXEL_ID = '1064141549591538'

/**
 * Meta Pixel.
 *
 * A Meta manda colar o snippet no <head>. No App Router o equivalente e o
 * next/script com strategy="afterInteractive": o Next injeta e executa o
 * script assim que a pagina fica interativa, sem bloquear o primeiro render.
 * O PageView dispara uma vez no carregamento — a landing e uma pagina so, sem
 * navegacao client-side para rastrear.
 */
export function MetaPixel() {
    return (
        <>
            <Script id="meta-pixel" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
            </Script>
            <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    )
}
