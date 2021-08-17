const modules = {
  A: 'https://josokinas.github.io/micro-frontend-a/index.js',
  B: 'https://josokinas.github.io/micro-frontend-b/index.js',
};

Object.entries(modules).forEach(async ([name, source]) => {
  await import(source);

  window.MFE[name].root.id = name;
  document.body.appendChild(window.MFE[name].root);

  window.MFE[name].render({
    currentLocation: process.env.PUBLIC_URL,
    testProp: 'testValue',
  });
});
