/* =========================== */
/* app.js */
/* =========================== */
const API_URL = '/api/clients';
const FALLBACK = [
    { id: 1, name: 'Empresa A', email: 'contato@empresaa.com', phone: '+55 (81) 91234-0001' },
    { id: 2, name: 'João Pedro', email: 'joao@mail.com', phone: '+55 (81) 91234-0002' },
    { id: 3, name: 'Maria Silva', email: 'maria@mail.com', phone: '+55 (81) 91234-0003' }
];

let items = [];
let filtered = [];
let page = 1;

const qEl = document.getElementById('q');
const listEl = document.getElementById('list');
const emptyEl = document.getElementById('empty');
const summaryEl = document.getElementById('summary');
const perPageEl = document.getElementById('perPage');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const refreshBtn = document.getElementById('refresh');

async function loadData() {
    summaryEl.textContent = 'Carregando...';
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error();
        items = await res.json();
    } catch {
        items = FALLBACK;
    }
    page = 1;
    applyFilter();
}

function applyFilter() {
    const q = qEl.value.trim().toLowerCase();
    filtered = items.filter(it => it.name.toLowerCase().includes(q) || it.email.toLowerCase().includes(q));
    render();
}

function render() {
    const perPage = parseInt(perPageEl.value);
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / perPage));
    if (page > pages) page = pages;

    const start = (page - 1) * perPage;
    const pageItems = filtered.slice(start, start + perPage);

    listEl.innerHTML = '';

    if (pageItems.length === 0) {
        emptyEl.style.display = 'block';
    } else {
        emptyEl.style.display = 'none';
        pageItems.forEach(c => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${c.name}</td><td>${c.email}</td><td>${c.phone}</td><td><button class='edit'>Editar</button> <button class='delete'>Apagar</button></td>`;
      listEl.appendChild(tr);
    });
  }

  summaryEl.textContent=`${ total } registro(s) • Página ${ page } de ${ pages } `;
  prevBtn.disabled=(page<=1);
  nextBtn.disabled=(page>=pages);
}

qEl.addEventListener('input',()=>{page=1;applyFilter()});
perPageEl.addEventListener('change',render);
prevBtn.addEventListener('click',()=>{page--;render()});
nextBtn.addEventListener('click',()=>{page++;render()});
refreshBtn.addEventListener('click',loadData);

loadData();