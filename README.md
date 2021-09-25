<div align="center"><h1>Next Boiler</h1></div>

<h4 align="center">An opionated <a href="https://nextjs.org">NextJS</a> Boilerplate written in Typescript.</h4>

<p align="center">
  <a href="https://github.com/tim-richter/next-boiler/releases/latest" aria-label="Latest Release Link">
    <img src="https://img.shields.io/github/v/release/tim-richter/next-boiler" alt="Latest Release">
  </a>
  <a href="https://github.com/tim-richter/next-boiler/blob/main/LICENSE" aria-label="MIT License Link">
    <img src="https://img.shields.io/github/license/tim-richter/next-boiler" alt="MIT License">
  </a>
</p>

<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftim-richter%2Fnext-boiler">
    <img src="https://vercel.com/button" alt="Button with Vercel Logo and Deploy text">
  </a>
</div>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a>
</p>

## Key Features

* Typescript
* Styling with zero runtime CSS-in-JS Solution [Vanilla-Extract](https://github.com/seek-oss/vanilla-extract)
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction) for developing components in isolation
* Unit/Component Tests with [jest](https://jestjs.io/) and [testing-library](https://testing-library.com/docs/react-testing-library/intro)
* End-to-End Tests with [cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
* Written with best practices in mind
  - Helper functions with sensible defaults for getServerSideProps/getStaticProps
  - Ready to use layouts for all pages
  - Accessibility with [Radix-UI](https://www.radix-ui.com/)
  - i18n-ready with [next-i18next](https://github.com/isaachinman/next-i18next)
  - Easy SEO with [next-seo](https://github.com/garmeeh/next-seo) on every page
  - Zero-config PWA with [next-offline](https://github.com/hanford/next-offline)
  - Error tracking/Performance monitoring with [sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
  - [Eslint](https://eslint.org/) / [Prettier](https://prettier.io/) for code styling
  - [Husky](https://typicode.github.io/husky/#/) and [Lint-staged](https://github.com/okonet/lint-staged) for enforcing code style on every commit
  - Fully Automatic Version Management with [semantic-release](https://github.com/semantic-release/semantic-release)

## How To Use

### Initial Setup
After cloning the project first time, run following command to install all dependencies:
```sh
yarn
```

### Starting Dev Server
The following commands starts the dev server on http://localhost:3000. You can
read more about the dev server in the
[documentation](https://nextjs.org/docs/api-reference/cli#development).
```sh
yarn dev
```

### Setup Sentry

Set the environment variables as defined in .env.example. Also see [docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/).

### Project Structure
The main directories in the project are structured as following:
```
▸ .github
▸ .storybook
▸ cypress
▸ public
▾ src
  ▸ components
  ▸ config
  ▸ layouts
  ▸ pages
  ▸ styles
  ▸ types
  ▸ util
▸ test
```

#### .github
The project already comes with defaults for github-actions. This directory contains
the main workflow which runs all the tests of the repository and then creates a new release
with semantic-release. When it comes to deployment and vercel you might like to
use [vercel-action](https://github.com/marketplace/actions/vercel-action) to run
all these scripts before the deployment to vercel or just run all scripts
in one build command on vercel (ready to use: yarn ci:test-build)

#### .storybook
All storybook config goes into this directory. See
[documentation](https://storybook.js.org/docs/react/configure/overview)

#### cypress
Standard cypress (typescript) installation folder. See
[documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure)

#### Public
This directory is where all the static assets are stored. Also contains i18n translations
that will be injected by next-i18next. translationNamespaces in baseStaticHandler refers to
these file names. See [documentation](https://nextjs.org/docs/basic-features/static-file-serving)
for further questions.

#### Src

##### Components
All of the React components that are used on different parts of the project can
be found under this directory. These components are usually single responsibility
pieces that are handling their own logic and styling.

##### Config
Config files for global config rules.

##### Layouts
This directory contains main layouts used to wrap pages and large parts of the
user interface.

##### Pages
This is a directory specific to NextJS. It contains a React component per
route in the website. You can
read more about how routing is handled in a NextJS project
[here](https://nextjs.org/docs/basic-features/pages).

##### Styles
This directory contains definitions for different CSS variables that are used
around the project. It contains a global.css file that handles basic styling for all
elements and a stitches.config.ts file that instantiates a new stitches instance
and sets configuration for our design system.

##### Types
Global Typescript Types. All .d.ts files in this directory are automatically
included into typescript.

##### Util
This directory contains several utility files for different functionalities.

#### Test
Config/Setup Files for jest and testing-library.
