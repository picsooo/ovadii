export const config = { matcher: '/:path*' };

const PASS = 'ovadi2026';
const COOKIE = 'wm_access';
const TOKEN = 'ok-ovadi-7f3a9c';
const WA = 'https://wa.me/213797372452?text=' + encodeURIComponent("Bonjour Walid, je souhaite recevoir le mot de passe pour découvrir la maquette du site OVADI.");

function page(error) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>OVADI</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23E1262D'/%3E%3Ctext x='32' y='44' font-family='Arial' font-weight='700' font-size='36' fill='white' text-anchor='middle'%3EO%3C/text%3E%3C/svg%3E">
<style>
:root{--navy:#0E1B36;--navy2:#16294F;--orange:#F26B1F;--ink:#0E1B36;--mut:#5B6782;--line:#E3E7EF}
*{box-sizing:border-box;margin:0}
body{min-height:100vh;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--navy);background-image:radial-gradient(circle at 85% 10%,rgba(242,107,31,.22),transparent 45%),radial-gradient(circle at 10% 90%,rgba(255,255,255,.06),transparent 40%);display:flex;align-items:center;justify-content:center;padding:24px 16px;color:var(--ink)}
.card{width:100%;max-width:420px;background:#fff;border-radius:20px;padding:34px 28px 26px;box-shadow:0 30px 60px -20px rgba(0,0,0,.45)}
.brand{display:flex;align-items:center;gap:10px;margin-bottom:26px}
.mark{width:40px;height:40px;border-radius:11px;background:var(--navy);display:grid;place-items:center}
.brand b{font-size:19px;letter-spacing:.3px}.brand b span{color:var(--orange)}
.brand small{display:block;font-size:11.5px;color:var(--mut);letter-spacing:.4px}
h1{font-size:22px;line-height:1.25;margin-bottom:8px}
p.lead{color:var(--mut);font-size:14.5px;line-height:1.55;margin-bottom:22px}
label{font-size:13px;font-weight:600;display:block;margin-bottom:7px}
input{width:100%;font-size:16px;padding:13px 14px;border:1.5px solid var(--line);border-radius:11px;outline:none;transition:border-color .2s}
input:focus{border-color:var(--orange)}
.err{color:#C62828;font-size:13px;margin-top:8px}
button{width:100%;margin-top:14px;padding:14px;font-size:15.5px;font-weight:700;border:0;border-radius:11px;background:var(--orange);color:#fff;cursor:pointer}
button:hover{filter:brightness(.95)}
.sep{display:flex;align-items:center;gap:10px;color:var(--mut);font-size:12.5px;margin:22px 0 14px}
.sep:before,.sep:after{content:"";flex:1;height:1px;background:var(--line)}
.wa{display:flex;align-items:center;justify-content:center;gap:9px;padding:13px;border-radius:11px;border:1.5px solid #25D366;color:#128C4B;font-weight:700;font-size:14.5px;text-decoration:none}
.wa:hover{background:#25D3660f}
.foot{text-align:center;font-size:11.5px;color:var(--mut);margin-top:22px;line-height:1.5}
</style></head><body>
<main class="card">
  <div class="brand">
    <div class="mark"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6l3.5 12L12 8l5.5 10L21 6" stroke="#F26B1F" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div><b>Web<span>minds</span></b><small>Innovate. Connect. Succeed</small></div>
  </div>
  <h1>Maquette réservée à OVADI</h1>
  <p class="lead">Cette proposition de site a été préparée par Webminds. Entrez le mot de passe qui vous a été communiqué pour la découvrir.</p>
  <form method="POST" action="/__acces">
    <label for="p">Mot de passe</label>
    <input id="p" name="p" type="password" autocomplete="current-password" required autofocus>
    ${error ? '<div class="err">Mot de passe incorrect. Réessayez ou demandez-le sur WhatsApp.</div>' : ''}
    <button type="submit">Voir la maquette</button>
  </form>
  <div class="sep">Pas de mot de passe ?</div>
  <a class="wa" href="${WA}" target="_blank" rel="noopener">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>
    Demander le mot de passe sur WhatsApp
  </a>
  <p class="foot">© Webminds Digital Solutions · Alger<br>Maquette de démonstration confidentielle</p>
</main></body></html>`;
}

function html(body, status = 200, extra = {}) {
  return new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow, noarchive', ...extra } });
}

export default async function middleware(req) {
  const url = new URL(req.url);
  if (url.pathname === '/robots.txt') return;

  if (url.pathname === '/__acces' && req.method === 'POST') {
    let p = '';
    try { const f = await req.formData(); p = String(f.get('p') || '').trim(); } catch (e) {}
    if (p.toLowerCase() === PASS) {
      return new Response(null, { status: 303, headers: {
        'Location': '/',
        'Set-Cookie': `${COOKIE}=${TOKEN}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`,
        'Cache-Control': 'no-store' } });
    }
    return html(page(true), 401);
  }

  const cookies = req.headers.get('cookie') || '';
  if (cookies.split(/;\s*/).includes(`${COOKIE}=${TOKEN}`)) return;
  return html(page(false), 401);
}
