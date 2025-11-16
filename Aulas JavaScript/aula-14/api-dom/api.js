
//input de edição
const form = document.getElementById('product-form');
categoryInput.value = product.category;
priceInput.value = product.price;
window.scrollTo({ top: 0, behavior: 'smooth' });


// salvar no localStorage em formato JSON (string)
function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
}

// carregar do localStorage e converter de volta para objeto
function loadFromStorage() {
// tentar carregar do localStorage
// se não existir, retornar lista padrão
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [
        { id: cryptoRandomId(), name: 'Cadeira Escritório', category: 'Móveis', price: 199.9, createdAt: Date.now() - 86400000 },
        { id: cryptoRandomId(), name: 'Mesa de Jantar', category: 'Móveis', price: 799.0, createdAt: Date.now() - 3600_000 },
        { id: cryptoRandomId(), name: 'Luminária LED', category: 'Iluminação', price: 59.5, createdAt: Date.now() - 7200_000 }
      ];
    }
    // converter de volta para objeto
    return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao carregar do localStorage', err);
    return [];
  }
}

// formata número como moeda brasileira
function formatCurrency(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// gera um id aleatório usando a API Crypto
function cryptoRandomId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

// aplica a ordenação selecionada na lista
function applySort(list) {
  const mode = sortSelect.value;
  // ordenar conforme o modo selecionado
  switch (mode) {
    case 'price_asc': return list.sort((a, b) => a.price - b.price);
    case 'price_desc': return list.sort((a, b) => b.price - a.price);
    case 'name_asc': return list.sort((a, b) => a.name.localeCompare(b.name));
    case 'created_desc':
    default:
      return list.sort((a, b) => b.createdAt - a.createdAt);
  }
}

// API pública para manipulação dos produtos
window.app = {
  getAll: () => produtos.slice(),
  add: (p) => addProduct(p),
  update: (id, u) => updateProduct(id, u),
  remove: (id) => deleteProduct(id),
  clearStorage: () => { localStorage.removeItem(STORAGE_KEY); produtos = []; renderList(produtos); }
};