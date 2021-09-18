import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#363636',
      },
      {
        name: 'white',
        value: '#f0f0f0',
      }
    ]
  }
};
