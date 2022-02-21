import _ from 'lodash';

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper('startCase', (txt) => _.startCase(txt));
  plop.setHelper('pascalCase', (txt) => _.startCase(_.camelCase(txt)).replace(/ /g, ''));

  plop.setGenerator('api', {
    description: 'Add a new api endpoint',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Endpoint Name please',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Page Path please (with trailing slash)',
        default: '/',
      },
    ],
    actions: function(data) {
      return [{
        type: 'add',
        path: 'src/pages/api/{{pathCase path}}{{dashCase name}}.ts',
        templateFile: 'plop-templates/api.hbs',
      }]
    }
  });

  plop.setGenerator('page', {
    description: 'Add a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page Name please',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Page Type please',
        choices: ['Static Page', 'ServerSide Page'],
      },
      {
        type: 'input',
        name: 'path',
        message: 'Page Path please (with trailing slash)',
        default: '/',
      },
    ],
    actions: function(data) {
      if (data.type === 'Static Page') {
        return [{
          type: 'add',
          path: 'src/pages/{{path}}{{dashCase name}}.tsx',
          templateFile: 'plop-templates/page-static.hbs',
        }]
      }

      if (data.type === 'ServerSide Page') {
        return [{
          type: 'add',
          path: 'src/pages/{{pathCase path}}{{dashCase name}}.tsx',
          templateFile: 'plop-templates/page-server.hbs',
        }]
      }
    }
  });
};
