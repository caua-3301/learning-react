module.exports = {
  plugins: ['jest', 'react', 'prettier'],
  //informa os recusos globais do ambiente de execução en questão, visa permitir uso de alguns metodos sem erro
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, //visa o reconhecimento da lib jest
    'jest/globals': true,
  },
  //conjunto de regras recomendadas para cada ambiente
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended', //melhor tratamento da lib
    'plugin:prettier/recommended',
    'eslint-config-react-app',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      //onde serão aplicados as regras aqui definidas
      files: ['.eslintrc.{js,cjs}'],
      //configurações na analise do codigo
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'script',
        ecmaFeatures: {
          jsx: true, //permite a sintaxe JSX
        },
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    // Adicionar se necessário
  },
};
