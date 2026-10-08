/* =========================================================
   Feliz aniversário, Vick — álbum lacrado no espaço
   ========================================================= */
(() => {
  "use strict";

  // ---------------------------------------------------------
  // Conteúdo
  // ---------------------------------------------------------
  // [rótulo, título, texto, data da foto AAAAMMDD]
  const COISAS = [
    ["1", "Carismática", "Você muito provavelmente é uma das poucas pessoas no mundo que só de olhar pra sua cara a gente já sente vontade de ser sua amiga kk. Eu duvido muito que alguém que você conhece não gosta de você, tu é o tipo de pessoa que conquista com seu jeito logo de cara", "20201118"],
    ["2", "Empática", "Você é uma pessoa muito bondosa e independente de a quem você se importa, isso é algo raro e bonito de se ver", "20191215"],
    ["3", "Estilosa", "Facilmente daria pra criar tendências em qualquer lugar de Paris. Até de pijama tem estilo", "20210622"],
    ["4", "Bondosa", "Você é pura, um ser humano quase que iluminado de tão meiga que você é", "20260425"],
    ["5", "Esforçada", "Você sempre continua algo, por mais que você sinta vontade de se desviver, você não desiste kkkkkk", "20240402"],
    ["6", "Decidida", "Você é facilmente umas das 0,0001% das mulheres do mundo que sabe o que quer e não se perde de uma hora pra outra em um monte de vontade (só na parte de roupa que não)", "20250613"],
    ["7", "Humilde", "Se tem algo que você precisa melhorar ou que você quer aprender você não tem trava nenhuma em perguntar ou ir atrás do que tem que fazer (tirando quando seus instintos femininos pedem pra eu fazer algo por você, mas tá tudo bem kkkkk)", "20200316"],
    ["8", "Amorosa", "Você se esforça pra demonstrar seu amor, e não digo isso só comigo, dá pra perceber isso em todas as pessoas que você gosta, desde pai, mãe irmão até amigas.", "20230708"],
    ["9", "Virtuosa", "Isso inclui diversas qualidades, mas é isso mesmo, você uma pessoa cheia de virtudes", "20220201"],
    ["10", "Rara", "Se tem um tipo de mulher que é rara esse o seu tipo kkkk. Eu até poderia decorrer sobre isso, mas só do fato de você não fazer o L já é um grande diferencial kkkkkkk. É difícil encontra uma mulher como você", "20190603"],
    ["11", "Linda", "Aqui também nem preciso decorrer muito né, não preciso nem expressar minha indignação de você não estar classificada como uma das 8 maravilhas do mundo", "20210304"],
    ["12", "Meiga", "Você é carinhosa, gentil, delicada. Comparável a uma rosa ou a um vento calmo no alto de uma montanha com o sol se pondo (caraca, foi até poeta)", "20201222"],
    ["12+1", "Bela", "Não somente de físico (isso ne preciso dizer) mas como pessoa mesmo. Você é admirável.", "20240116"],
    ["14", "Generosa", "Até pra quem não merece você está disposta a entregar o melhor de você. Embora eu não compartilhe dessa qualidade e nem deseje tê-la kkkk eu acho isso admirável em você", "20181120"],
    ["15", "Gostosa", "Me passei dizendo isso? Se me passei não importa, a verdade pode chocar mas precisa se dita", "20191104"],
    ["16", "Autêntica", "Você também é uma mulher única, não parece que saiu da mesma fábrica que as demais kkkkk", ""],
    ["17", "Íntegra", "Acho que já usei muito essa palavra, mas realmente você tem qualidade admiráveis, e essa é uma delas, você tem princípios e segue eles", "20190821"],
    ["18", "Bem humorada", "Você é uma pessoa leve, que deixa o ambiente confortável, entra na zoeira e faz tudo parecer mais leve e feliz", "20190217"],
    ["19", "Paciente", "Não sei se você se enxerga assim, mas eu te vejo como uma pessoa muito paciente e calma. Eu facilmente enxergo que essa é uma qualidade muuuuuito difícil de se ter kk", "20181213"],
    ["20", "Sensível", "Não, num tem nada a ver com ser chorona, mas você é atenta aos detalhes e tudo que faz dá pra perceber que é com cuidado e carinho", "20200120"],
    ["21", "Criativa", "Você é literalmente uma artista kkkk", "20231211"],
    ["22", "Elegante", "Até o seu andar é leve, sempre posturada e arrumada. Já nasceu com alma de madame kkk", "20191224"],
    ["23", "Cheirosa", "Você pode perceber isso pelo tanto de tempo que passo sentindo seu cheiro quando estamos juntos kk", "20180822"],
    ["24", "Viva", "Não é só o fato real de estar respirando kkk, mas sim o fato de você gostar de viver e enxergar a vida com bons olhos, outro qualidade admirável em você", "20231008"],
    ["25", "Engraçada", "Já perdi a conta do tanto de vezes que me fez rir com as vezes só uma palavra kkkk", "20190628"],
  ];

  const pad = (n) => String(n).padStart(2, "0");
  const foto = (i) => `assets/fotos/${pad(i)}.jpg`;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

  // ---------------------------------------------------------
  // Montagem das páginas
  // ---------------------------------------------------------
  const pages = []; // cada item: { front, back, cls, kind }

  pages.push({
    kind: "cover", cls: "cover",
    front: `
      <div class="face front cover-front">
        <div class="gold-frame"></div>
        <div class="cover-inner">
          <div class="cover-kicker gold-text">feliz aniversário</div>
          <div class="cover-photo"><img src="assets/fotos/capa.jpg" alt="Vick" draggable="false"></div>
          <div>
            <div class="cover-name gold-text">Vick</div>
            <div class="cover-25 gold-text">· <b>25</b> ·</div>
          </div>
        </div>
        <div class="ribbon top"></div><div class="ribbon bottom"></div>
        <div class="seal" id="seal" role="button" tabindex="0" aria-label="Toque para romper o lacre">
          <div class="wax left"><span>V</span></div>
          <div class="wax right"><span>V</span></div>
          <svg viewBox="0 0 100 100"><circle id="sealRing" cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/></svg>
        </div>
        <div class="seal-tip">toque no lacre</div>
      </div>`,
    back: `
      <div class="face back cover-back">
        <div class="dedic">
          <p>este álbum pertence a</p>
          <p class="to">Vick</p>
          <p>e a tudo o que ela é 💜</p>
          <small>aberto em 25 voltas ao redor do sol</small>
        </div>
      </div>`,
  });

  pages.push({
    kind: "intro",
    front: `<div class="face front paper"><div class="pg intro">
        <h1 class="reveal">Feliz aniversário <em>minha gatinha</em></h1>
        <p class="reveal d1">Hoje foi você quem nasceu mas pra mim é um dos dias mais felizes da minha vida kk</p>
        <div class="reveal d2"><span class="doodle-heart">♥</span></div>
      </div></div>`,
  });

  pages.push({
    kind: "25",
    front: `<div class="face front paper"><div class="pg big25">
        <div class="orbit-ring"></div>
        <div class="lead reveal">Parabéns pelos seus</div>
        <div class="num reveal d1">25</div>
        <div class="tail reveal d2">anos</div>
      </div></div>`,
  });

  pages.push({
    kind: "teaser",
    front: `<div class="face front paper"><div class="pg teaser">
        <p class="reveal">Não sei muito bem como me expressar nessa parte, mas pra compensar eu vou te dizer <span class="hl">25 coisas</span> que vejo e admiro na pessoa que você é e que é comemorada na data de hoje.</p>
        <div class="twentyfive">${Array.from({ length: 25 }, (_, i) => `<i style="--d:${i}">♥</i>`).join("")}</div>
        <p class="reveal d3" style="text-align:center;font-size:6.4cqw;color:var(--ink-soft)">vira a página →</p>
      </div></div>`,
  });

  COISAS.forEach(([label, titulo, texto, data], idx) => {
    const n = idx + 1;
    const rot = (n % 2 ? -1 : 1) * rnd(1.2, 3.2);
    const trot = rnd(-6, 6);
    const stamp = data ? `'${data.slice(2, 4)}  ${data.slice(4, 6)}  ${data.slice(6, 8)}` : "'∞  ∞  ∞";
    const ano = data.slice(0, 4);
    pages.push({
      kind: "q", q: n, label,
      front: `<div class="face front paper"><div class="pg q">
          <div class="badge ${label.length > 2 ? "long" : ""}">${label}</div>
          <figure class="polaroid reveal" style="--rot:${rot.toFixed(2)}deg">
            <div class="tape" style="--trot:${trot.toFixed(1)}deg"></div>
            <div class="ph"><img src="${foto(n)}" alt="${titulo}" draggable="false"><span class="date-stamp">${stamp}</span></div>
            <figcaption class="cap">${ano ? "lembrança de " + ano : "lembrança sem data"}</figcaption>
          </figure>
          <div class="q-body">
            <h2 class="q-title reveal d1"><small>nº ${label}</small>${titulo}</h2>
            <p class="q-text reveal d2">${esc(texto)}</p>
          </div>
        </div></div>`,
    });
  });

  pages.push({
    kind: "final",
    front: `<div class="face front paper"><div class="pg final">
        <p class="well reveal">Bom... É isso</p>
        <p class="reveal d1">Você é d+ meu amor e nada é comparável ao quão incrível você é</p>
        <p class="reveal d1">Mas uma vez, feliz aniversário. Eu realmente desejo tudo de bom pra você (Só não vou saber expressar o tanto que te desejo isso kk, mas é muito)</p>
        <p class="love reveal d2">Te amo Vick</p>
        <div class="cake reveal d3" id="cake">
          <div class="plate"></div><div class="layer"></div>
          <div class="candle"><div class="flame"></div><div class="smoke"></div></div>
        </div>
        <button class="wish-btn reveal d3" id="wishBtn">faça um pedido e sopre a vela 🕯️</button>
      </div></div>`,
  });

  // verso (página esquerda) de cada folha = prévia da próxima
  function versoFor(next) {
    const sp = Array.from({ length: 7 }, () =>
      `<i style="left:${rnd(8, 88).toFixed(0)}%;top:${rnd(6, 90).toFixed(0)}%;transform:scale(${rnd(.6, 1.5).toFixed(2)})">✦</i>`).join("");
    if (!next) return `<div class="face back paper verso"><div class="sparkles">${sp}</div></div>`;
    if (next.kind === "q") {
      return `<div class="face back paper verso"><div class="sparkles">${sp}</div>
        <div class="ghost-num ${next.label.length > 2 ? "long" : ""}">${next.label}</div>
        <div class="verso-note">coisa nº <b>${next.label}</b> de 25</div></div>`;
    }
    const quotes = { "25": "um quarto de século de você", teaser: "e agora…", final: "e pra terminar…" };
    return `<div class="face back paper verso"><div class="sparkles">${sp}</div>
      <div class="verso-quote">${quotes[next.kind] || "✦"}</div></div>`;
  }

  // ---------------------------------------------------------
  // DOM do livro
  // ---------------------------------------------------------
  const body = document.body;
  const book = document.getElementById("book");
  const N = pages.length;
  const leaves = pages.map((p, i) => {
    const el = document.createElement("div");
    el.className = "leaf " + (p.cls || "");
    el.innerHTML = p.front + (p.back || versoFor(pages[i + 1]));
    book.appendChild(el);
    return { el, front: el.querySelector(".face.front"), p };
  });

  let cur = 0;        // quantidade de folhas viradas
  let unsealed = false;
  let busyUntil = 0;

  function stackZ() {
    leaves.forEach((l, i) => {
      if (l.el.classList.contains("turning")) return;
      l.el.style.zIndex = i < cur ? i + 1 : 2 * N - i;
    });
  }

  function turn(leaf, toFlipped) {
    const el = leaf.el;
    el.classList.add("turning");
    el.style.zIndex = 5 * N;
    el.classList.toggle("flipped", toFlipped);
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.classList.remove("turning"); stackZ(); }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--flip")) * 1000 || 1150);
    Sound.page();
  }

  function go(delta) {
    if (!unsealed) return;
    const now = performance.now();
    if (now < busyUntil) return;
    const target = cur + delta;
    if (target < 1 || target > N - 1) return;
    busyUntil = now + 380;
    if (delta > 0) { turn(leaves[cur], true); cur++; }
    else { cur--; turn(leaves[cur], false); }
    onPageChange();
  }

  function onPageChange() {
    stackZ();
    const page = leaves[cur];
    setTimeout(() => page.front.classList.add("show"), 250);
    if (cur >= 1) body.classList.add("opened");
    prevBtn.disabled = cur <= 1;
    nextBtn.disabled = cur >= N - 1;
    updateProgress();
    if (page.p.kind === "q") setTimeout(() => heartsFrom(book, 10), 700);
    if (page.p.kind === "25") setTimeout(() => sparkBurst(innerWidth / 2 + (body.classList.contains("single") ? 0 : book.getBoundingClientRect().width / 2), innerHeight / 2, 60), 700);
    if (cur > 1) turnHint.classList.remove("visible");
    requestAnimationFrame(fitAll);
  }

  // ---------------------------------------------------------
  // Progresso (25 estrelinhas)
  // ---------------------------------------------------------
  const progress = document.getElementById("progress");
  const stars = COISAS.map((c) => {
    const i = document.createElement("i");
    i.textContent = "★";
    i.title = c[1];
    progress.appendChild(i);
    return i;
  });
  function updateProgress() {
    const q = leaves[cur].p.q || (leaves[cur].p.kind === "final" ? 26 : 0);
    stars.forEach((s, i) => {
      s.classList.toggle("on", i + 1 <= q);
      s.classList.toggle("cur", i + 1 === q);
    });
  }

  // ---------------------------------------------------------
  // Ajuste automático do texto
  // ---------------------------------------------------------
  function fit(el) {
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    let guard = 40;
    while (el.scrollHeight > el.clientHeight + 1 && size > 9 && guard--) {
      size *= 0.94;
      el.style.fontSize = size + "px";
    }
  }
  function fitAll() {
    for (let i = Math.max(0, cur - 2); i < Math.min(N, cur + 3); i++) {
      leaves[i].el.querySelectorAll(".q-text").forEach(fit);
    }
  }
  function fitEverything() { document.querySelectorAll(".q-text").forEach(fit); }

  // ---------------------------------------------------------
  // Layout (uma página no celular, duas no computador)
  // ---------------------------------------------------------
  function layout() {
    body.classList.toggle("single", innerWidth <= 760 || innerWidth < innerHeight * 0.9);
    fitEverything();
  }
  addEventListener("resize", () => { clearTimeout(layout._t); layout._t = setTimeout(layout, 120); });

  // ---------------------------------------------------------
  // Lacre
  // ---------------------------------------------------------
  const seal = document.getElementById("seal");
  const ring = document.getElementById("sealRing");
  const coverLeaf = leaves[0];
  let holdStart = 0, holdRaf = 0;
  const HOLD_MS = 1100;

  function holdTick() {
    const t = Math.min(1, (performance.now() - holdStart) / HOLD_MS);
    ring.style.strokeDashoffset = String(100 - t * 100);
    if (t >= 1) return breakSeal();
    holdRaf = requestAnimationFrame(holdTick);
  }
  function holdBegin(e) {
    if (unsealed) return;
    e.preventDefault();
    e.stopPropagation();
    Sound.unlock();
    holdStart = performance.now();
    seal.classList.add("holding");
    cancelAnimationFrame(holdRaf);
    holdRaf = requestAnimationFrame(holdTick);
  }
  function holdEnd() {
    if (unsealed || !seal.classList.contains("holding")) return;
    breakSeal(); // um clique/toque simples já rompe
  }
  // Com o álbum inclinado em 3D o navegador nem sempre acerta o alvo do clique,
  // então qualquer clique dentro da área da capa conta como clique no lacre.
  const onCover = (e) => {
    const r = book.getBoundingClientRect();
    return e.clientX >= r.left - 20 && e.clientX <= r.right + 40 && e.clientY >= r.top - 20 && e.clientY <= r.bottom + 20;
  };
  addEventListener("pointerdown", (e) => { if (!unsealed && onCover(e)) holdBegin(e); }, true);
  addEventListener("pointerup", holdEnd, true);
  seal.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { Sound.unlock(); breakSeal(); } });
  seal.addEventListener("click", (e) => e.stopPropagation());
  seal.addEventListener("contextmenu", (e) => e.preventDefault());

  function breakSeal() {
    if (unsealed) return;
    unsealed = true;
    cancelAnimationFrame(holdRaf);
    seal.classList.remove("holding");
    seal.classList.add("broken");
    coverLeaf.front.classList.add("sealed-off");
    body.classList.add("unsealed");
    Sound.crack();
    const r = seal.getBoundingClientRect();
    sparkBurst(r.left + r.width / 2, r.top + r.height / 2, 90, ["#fff1c1", "#e9c46a", "#ff7eb6", "#c9a6ff"]);
    Music.start();
    musicBtn.classList.add("on");
    setTimeout(() => {
      tilt.style.transform = "";
      go(1);
      turnHint.classList.add("visible");
    }, 1100);
  }

  // ---------------------------------------------------------
  // Navegação
  // ---------------------------------------------------------
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const musicBtn = document.getElementById("musicBtn");
  const turnHint = document.getElementById("turnHint");
  const tilt = document.getElementById("tilt");
  const stage = document.getElementById("stage");

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  musicBtn.addEventListener("click", () => { Sound.unlock(); musicBtn.classList.toggle("on", Music.toggle()); });

  addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") go(1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
    if (e.key === "Escape" && finale.classList.contains("on")) endFinale();
  });

  // toque / arraste
  let down = null;
  stage.addEventListener("pointerdown", (e) => {
    if (!unsealed || e.target.closest("button, .seal")) return;
    down ={ x: e.clientX, y: e.clientY, t: performance.now() };
  });
  stage.addEventListener("pointerup", (e) => {
    if (!down || e.target.closest("button, .seal")) { down = null; return; }
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    const isTap = Math.hypot(dx, dy) < 10;
    down = null;
    if (!isTap) {
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      return;
    }
    const leafEl = e.target.closest(".leaf");
    if (!leafEl) return;
    if (leafEl.classList.contains("flipped")) go(-1);
    else if (body.classList.contains("single")) {
      // no celular: metade esquerda volta, metade direita avança
      const r = book.getBoundingClientRect();
      go(e.clientX < r.left + r.width * 0.3 && cur > 1 ? -1 : 1);
    } else go(1);
  });


  // inclinação 3D do álbum fechado
  addEventListener("pointermove", (e) => {
    sky.mouse(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5);
    if (unsealed || e.pointerType === "touch") return;
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    tilt.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 12}deg)`;
  });

  // ---------------------------------------------------------
  // Céu estrelado
  // ---------------------------------------------------------
  const sky = (() => {
    const c = document.getElementById("sky");
    const ctx = c.getContext("2d");
    let w, h, dpr, stars = [], shooting = [], mx = 0, my = 0, tmx = 0, tmy = 0;
    const colors = ["255,255,255", "210,200,255", "255,220,240", "190,220,255", "255,240,210"];

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = innerWidth; h = innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 2600);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h, z: Math.pow(Math.random(), 2) * 0.9 + 0.1,
        r: Math.random() * 1.2 + 0.25, ph: Math.random() * Math.PI * 2, sp: rnd(0.4, 2.2),
        c: colors[(Math.random() * colors.length) | 0],
      }));
    }
    function draw(t) {
      mx += (tmx - mx) * 0.04; my += (tmy - my) * 0.04;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const tw = 0.55 + 0.45 * Math.sin(t * 0.001 * s.sp + s.ph);
        let x = s.x - mx * 40 * s.z + t * 0.004 * s.z;
        let y = s.y - my * 40 * s.z;
        x = ((x % w) + w) % w;
        const r = s.r * (0.6 + s.z);
        ctx.globalAlpha = tw * (0.35 + s.z * 0.65);
        ctx.fillStyle = `rgb(${s.c})`;
        ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
        if (s.z > 0.8 && r > 1.2) {
          ctx.globalAlpha = tw * 0.25;
          ctx.fillRect(x - r * 4, y - 0.4, r * 8, 0.8);
          ctx.fillRect(x - 0.4, y - r * 4, 0.8, r * 8);
        }
      }
      // estrelas cadentes
      if (Math.random() < 0.004 && shooting.length < 2) {
        shooting.push({ x: rnd(0, w), y: rnd(0, h * 0.5), vx: rnd(6, 11) * (Math.random() < .5 ? -1 : 1), vy: rnd(2.5, 5), life: 1 });
      }
      shooting = shooting.filter((s) => s.life > 0);
      for (const s of shooting) {
        s.x += s.vx; s.y += s.vy; s.life -= 0.014;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
        g.addColorStop(0, `rgba(255,255,255,${s.life})`); g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    addEventListener("resize", resize);
    resize();
    requestAnimationFrame(draw);
    return { mouse(x, y) { tmx = x; tmy = y; }, sample(n) { return stars.slice(0, n).map((s) => ({ x: s.x, y: s.y })); } };
  })();

  // ---------------------------------------------------------
  // Efeitos (faíscas, corações, fogos, constelação)
  // ---------------------------------------------------------
  const fx = (() => {
    const c = document.getElementById("fx");
    const ctx = c.getContext("2d");
    let w, h, dpr, parts = [], running = false;
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = innerWidth; h = innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    addEventListener("resize", resize);
    resize();

    function heart(x, y, s) {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.3);
      ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x - s * 0.5, y + s * 0.6, x, y + s * 0.8, x, y + s);
      ctx.bezierCurveTo(x, y + s * 0.8, x + s * 0.5, y + s * 0.6, x + s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3);
      ctx.fill();
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      const t = performance.now();
      parts = parts.filter((p) => p.life > 0);
      ctx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        if (p.type === "star") {
          // estrela que viaja até seu lugar na constelação
          p.k = Math.min(1, p.k + p.speed);
          const e = 1 - Math.pow(1 - p.k, 3);
          p.x = p.sx + (p.tx - p.sx) * e + Math.sin(t * 0.002 + p.ph) * 0.6 * e;
          p.y = p.sy + (p.ty - p.sy) * e + Math.cos(t * 0.0023 + p.ph) * 0.6 * e;
          if (p.leaving) { p.life -= 0.012; p.y -= 0.6; }
          const tw = 0.6 + 0.4 * Math.sin(t * 0.004 + p.ph);
          ctx.globalAlpha = Math.max(0, Math.min(1, p.life)) * tw;
          ctx.fillStyle = p.color;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 6.283); ctx.fill();
          ctx.globalAlpha *= 0.25;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3.2, 0, 6.283); ctx.fill();
          continue;
        }
        p.vx *= p.drag; p.vy = p.vy * p.drag + p.g;
        p.x += p.vx; p.y += p.vy;
        p.life -= p.decay;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        if (p.type === "heart") {
          ctx.globalCompositeOperation = "source-over";
          heart(p.x, p.y, p.size);
          ctx.globalCompositeOperation = "lighter";
        } else {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size * Math.max(0.3, p.life), 0, 6.283); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      if (parts.length) requestAnimationFrame(loop);
      else { running = false; ctx.clearRect(0, 0, w, h); }
    }
    function add(list) {
      parts.push(...list);
      if (!running) { running = true; requestAnimationFrame(loop); }
    }
    return { add, clearStars() { parts.forEach((p) => { if (p.type === "star") { p.leaving = true; } }); }, size: () => ({ w, h }) };
  })();

  function sparkBurst(x, y, n, palette = ["#fff1c1", "#e9c46a", "#c9a6ff", "#ff7eb6", "#ffffff"]) {
    fx.add(Array.from({ length: n }, () => {
      const a = Math.random() * Math.PI * 2, v = rnd(1.5, 7);
      return { type: "spark", x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 0.06, drag: 0.965, life: 1, decay: rnd(0.008, 0.02), size: rnd(1.2, 3), color: palette[(Math.random() * palette.length) | 0] };
    }));
  }
  function heartsFrom(el, n) {
    const r = el.getBoundingClientRect();
    const single = body.classList.contains("single");
    const x0 = single ? r.left : r.left;
    fx.add(Array.from({ length: n }, () => ({
      type: "heart", x: rnd(x0 + r.width * 0.15, x0 + r.width * 0.85), y: r.bottom - rnd(0, 30),
      vx: rnd(-0.6, 0.6), vy: rnd(-2.6, -1.4), g: -0.005, drag: 0.995, life: 1, decay: rnd(0.006, 0.011),
      size: rnd(8, 16), color: ["#ff7eb6", "#c9a6ff", "#e9c46a", "#ff4f8b"][(Math.random() * 4) | 0],
    })));
  }
  function firework(x, y) {
    const pal = [["#ff7eb6", "#ffd1e6"], ["#c9a6ff", "#ffffff"], ["#e9c46a", "#fff1c1"], ["#7ee0ff", "#ffffff"], ["#ff4f8b", "#e9c46a"]][(Math.random() * 5) | 0];
    const n = 110;
    fx.add(Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2 + rnd(-0.05, 0.05), v = rnd(2.5, 6.2);
      return { type: "spark", x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 0.045, drag: 0.972, life: 1, decay: rnd(0.007, 0.013), size: rnd(1.6, 2.8), color: pal[i % 2] };
    }));
    Sound.boom();
  }

  function constellation() {
    const { w, h } = fx.size();
    const off = document.createElement("canvas");
    const fs = Math.min(w * 0.16, h * 0.2, 170);
    off.width = w; off.height = h;
    const o = off.getContext("2d");
    o.fillStyle = "#fff";
    o.textAlign = "center"; o.textBaseline = "middle";
    o.font = `${fs}px "Great Vibes", cursive`;
    o.fillText("Te amo, Vick", w / 2, h * 0.4);
    // coraçãozinho
    const hs = fs * 0.55, hx = w / 2, hy = h * 0.4 + fs * 0.65;
    o.beginPath();
    o.moveTo(hx, hy + hs * 0.3);
    o.bezierCurveTo(hx, hy, hx - hs * 0.5, hy, hx - hs * 0.5, hy + hs * 0.3);
    o.bezierCurveTo(hx - hs * 0.5, hy + hs * 0.6, hx, hy + hs * 0.8, hx, hy + hs);
    o.bezierCurveTo(hx, hy + hs * 0.8, hx + hs * 0.5, hy + hs * 0.6, hx + hs * 0.5, hy + hs * 0.3);
    o.bezierCurveTo(hx + hs * 0.5, hy, hx, hy, hx, hy + hs * 0.3);
    o.lineWidth = Math.max(2, fs * 0.04); o.strokeStyle = "#fff"; o.stroke();

    const data = o.getImageData(0, 0, w, h).data;
    const step = Math.max(3, Math.round(fs / 30));
    const pts = [];
    for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) if (data[(y * w + x) * 4 + 3] > 128) pts.push([x + rnd(-1, 1), y + rnd(-1, 1)]);
    while (pts.length > 1400) pts.splice((Math.random() * pts.length) | 0, 1);
    const src = sky.sample(pts.length);
    fx.add(pts.map(([tx, ty], i) => {
      const s = src[i] || { x: rnd(0, w), y: rnd(0, h) };
      return { type: "star", sx: s.x, sy: s.y, x: s.x, y: s.y, tx, ty, k: 0, speed: rnd(0.004, 0.009), ph: Math.random() * 6.28, life: 1, size: rnd(0.9, 1.7),
        color: ["#ffffff", "#f3e6ff", "#ffe9b0", "#ffc4e1"][(Math.random() * 4) | 0] };
    }));
  }

  // ---------------------------------------------------------
  // Pedido / vela
  // ---------------------------------------------------------
  const finale = document.getElementById("finale");
  let wished = false;
  document.getElementById("wishBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    const cake = document.getElementById("cake");
    cake.classList.add("blown");
    Sound.blow();
    if (wished) return;
    wished = true;
    setTimeout(() => {
      body.classList.add("dim");
      const { w, h } = fx.size();
      [[.3, .3], [.7, .25], [.5, .18], [.2, .5], [.8, .48], [.5, .35]].forEach(([x, y], i) =>
        setTimeout(() => firework(w * x + rnd(-40, 40), h * y + rnd(-30, 30)), i * 380));
      setTimeout(constellation, 2300);
      setTimeout(() => finale.classList.add("on"), 4200);
    }, 900);
  });
  document.getElementById("wishBtn").addEventListener("pointerdown", (e) => e.stopPropagation());
  document.getElementById("finaleBack").addEventListener("click", endFinale);
  function endFinale() {
    finale.classList.remove("on");
    body.classList.remove("dim");
    fx.clearStars();
    setTimeout(() => {
      document.getElementById("cake").classList.remove("blown");
      wished = false;
    }, 1200);
  }

  // ---------------------------------------------------------
  // Som: caixinha de música (Parabéns pra você) + efeitos
  // ---------------------------------------------------------
  const Sound = (() => {
    let ctx = null, master = null, wet = null;
    function unlock() {
      if (ctx) { if (ctx.state === "suspended") ctx.resume(); return ctx; }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
      // eco suave
      const delay = ctx.createDelay(); delay.delayTime.value = 0.27;
      const fb = ctx.createGain(); fb.gain.value = 0.32;
      wet = ctx.createGain(); wet.gain.value = 0.28;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2600;
      wet.connect(delay); delay.connect(lp); lp.connect(fb); fb.connect(delay); lp.connect(master);
      return ctx;
    }
    function tone(freq, t, dur, vol = 0.18, type = "sine") {
      if (!ctx) return;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      g.connect(master); g.connect(wet);
      [[1, 1, type], [2, 0.32, "sine"], [4.01, 0.08, "sine"]].forEach(([m, v, ty]) => {
        const o = ctx.createOscillator(); const og = ctx.createGain();
        o.type = ty; o.frequency.value = freq * m; og.gain.value = v;
        o.connect(og); og.connect(g); o.start(t); o.stop(t + dur + 0.05);
      });
    }
    function noise(t, dur, freq, vol, q = 1) {
      if (!ctx) return;
      const len = Math.floor(ctx.sampleRate * dur);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
      const s = ctx.createBufferSource(); s.buffer = buf;
      const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.value = vol;
      s.connect(f); f.connect(g); g.connect(master); s.start(t);
    }
    return {
      unlock, tone,
      get ctx() { return ctx; },
      page() { if (ctx) noise(ctx.currentTime, 0.32, 1800, 0.18, 0.7); },
      crack() {
        if (!ctx) return; const t = ctx.currentTime;
        noise(t, 0.08, 3000, 0.6, 2); noise(t + 0.05, 0.15, 900, 0.4, 1.5);
        [1318.5, 1567.98, 2093].forEach((f, i) => tone(f, t + 0.15 + i * 0.09, 1.4, 0.07));
      },
      blow() { if (ctx) noise(ctx.currentTime, 0.7, 700, 0.35, 0.4); },
      boom() {
        if (!ctx) return; const t = ctx.currentTime;
        noise(t, 0.9, 140, 0.9, 0.6); noise(t + 0.08, 0.6, 4200, 0.12, 0.5);
      },
    };
  })();

  const Music = (() => {
    const F = { G2: 98, C3: 130.81, F3: 174.61, G3: 196, G4: 392, A4: 440, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99 };
    // [nota, tempos]
    const MEL = [["G4", .75], ["G4", .25], ["A4", 1], ["G4", 1], ["C5", 1], ["B4", 2], ["G4", .75], ["G4", .25], ["A4", 1], ["G4", 1], ["D5", 1], ["C5", 2],
      ["G4", .75], ["G4", .25], ["G5", 1], ["E5", 1], ["C5", 1], ["B4", 1], ["A4", 1.5], ["F5", .75], ["F5", .25], ["E5", 1], ["C5", 1], ["D5", 1], ["C5", 3]];
    // [tempo do início, baixo]
    const BASS = [[1, "C3"], [4, "G2"], [7, "G2"], [10, "C3"], [13, "C3"], [16, "F3"], [19.5, "C3"], [21.5, "G3"], [22.5, "C3"]];
    const BEAT = 0.5;
    let on = false, timer = null;
    function playOnce() {
      const ctx = Sound.ctx; if (!ctx || !on) return;
      const t0 = ctx.currentTime + 0.1;
      let t = 0;
      for (const [n, d] of MEL) { Sound.tone(F[n], t0 + t * BEAT, Math.max(1.2, d * BEAT * 2.2), 0.16); t += d; }
      for (const [b, n] of BASS) Sound.tone(F[n], t0 + b * BEAT, 2.2, 0.07, "triangle");
      timer = setTimeout(playOnce, (t + 4) * BEAT * 1000);
    }
    return {
      start() { if (on) return; Sound.unlock(); on = true; playOnce(); },
      stop() { on = false; clearTimeout(timer); },
      toggle() { on ? this.stop() : this.start(); return on; },
    };
  })();

  // ---------------------------------------------------------
  // Partida
  // ---------------------------------------------------------
  layout();
  stackZ();
  prevBtn.disabled = true;

  const imgs = [...document.querySelectorAll("#book img")];
  const cover = imgs[0];
  const ready = Promise.all([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    cover.complete ? Promise.resolve() : new Promise((r) => { cover.onload = cover.onerror = r; }),
  ]);
  Promise.race([ready, new Promise((r) => setTimeout(r, 6000))]).then(() => {
    fitEverything();
    document.getElementById("loader").classList.add("gone");
  });
  addEventListener("load", fitEverything);
})();
