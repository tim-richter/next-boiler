import '../src/styles/global.css';
import { getCssText } from '../src/styles/stitches.config';

// stitches injection
const styleElement = document.createElement('style')
styleElement.appendChild(document.createTextNode(getCssText()))
document.head.appendChild(styleElement)

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
