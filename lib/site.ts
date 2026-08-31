/**
 * URL canonica do site.
 *
 * Em producao na Vercel, VERCEL_PROJECT_PRODUCTION_URL ja vem preenchida com o
 * dominio de producao do projeto. Defina NEXT_PUBLIC_SITE_URL quando houver
 * dominio proprio — ela tem precedencia.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
