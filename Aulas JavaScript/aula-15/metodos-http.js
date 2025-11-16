/*
// Métodos HTTP com Fetch API (ler dados)
fetch('https://api.exemplo.com/usuarios')
  .then(res => res.json())
  .then(dados => console.log(dados));

// (enviar dados)
  fetch('https://api.exemplo.com/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'Ana', idade: 25 })
});

// (atualizar dados)
fetch('https://api.exemplo.com/usuarios/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: 'Carlos', idade: 30 })
});

// (atualização parcial)
fetch('https://api.exemplo.com/usuarios/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ idade: 31 })
});

// (deletar dados)
fetch('https://api.exemplo.com/usuarios/1', { method: 'DELETE' });

fetch('https://api.exemplo.com/usuarios', { method: 'HEAD' })
  .then(res => console.log(res.headers.get('Content-Type')));

// (opções de comunicação)
fetch('https://api.exemplo.com/usuarios', { method: 'OPTIONS' })
  .then(res => console.log(res.headers.get('Allow')));

*/
