/**
 * URL canonica do site.
 *
 * Precedencia:
 *   1. NEXT_PUBLIC_SITE_URL              — dominio proprio, definido por voce
 *   2. VERCEL_PROJECT_PRODUCTION_URL     — dominio de producao (injetado pela Vercel)
 *   3. VERCEL_URL                        — URL do deploy atual (previews)
 *   4. http://localhost:3000             — desenvolvimento
 *
 * Atencao ao `??`: variaveis NEXT_PUBLIC_* sao substituidas em tempo de build e
 * podem chegar como string vazia em vez de undefined, e "" nao aciona o
 * nullish coalescing. Por isso a checagem aqui e por conteudo, nao por
 * nulidade — e o parse e protegido, para que um valor invalido degrade em vez
 * de derrubar o build inteiro.
 */
function firstFilled(...values: (string | undefined)[]): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return undefined;
}

const FALLBACK_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  const explicit = firstFilled(process.env.NEXT_PUBLIC_SITE_URL);
  const fromVercel = firstFilled(
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  );

  const candidate = explicit ?? (fromVercel ? `https://${fromVercel}` : undefined);
  if (!candidate) return FALLBACK_URL;

  // dominio cru ("exemplo.com.br") tambem e aceito
  const withProtocol = /^https?:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_URL;
  }
}

export const siteUrl = resolveSiteUrl();
