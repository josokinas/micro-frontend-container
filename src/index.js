const modules = {
  A: {
    js: 'https://josokinas.github.io/micro-frontend-a/index.js',
    css: 'https://josokinas.github.io/micro-frontend-a/index.css',
  },
  B: {
    js: 'https://josokinas.github.io/micro-frontend-b/index.js',
    css: 'https://josokinas.github.io/micro-frontend-b/index.css',
  },
};

Object.entries(modules).forEach(async ([name, imports]) => {
  await import(imports.js);

  window.MFE[name].root.id = `${name}-JS`;
  document.body.appendChild(window.MFE[name].root);

  window.MFE[name].render();

  const link = document.createElement('link');
  link.id = `${name}-CSS`;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = imports.css;

  const [head] = document.getElementsByTagName('HEAD');
  head.appendChild(link);
});
