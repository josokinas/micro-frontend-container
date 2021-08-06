const modules = {
  A: import('https://josokinas.github.io/micro-frontend-a/index.js'),
  B: import('https://josokinas.github.io/micro-frontend-b/index.js'),
};

Object.entries(modules).forEach(async ([name, importMfe]) => {
  await importMfe;

  window.MFE[name].root.id = name;
  document.body.appendChild(window.MFE[name].root);

  window.MFE[name].render();
});
