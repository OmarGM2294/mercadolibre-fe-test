## Getting Started

First use the recommended node version:

```bash
nvm use
```

After that, install all dependencies:

```bash
npm i
# or
yarn install
```

Then, build the project:

```bash
npm run build
# or
yarn build
```

And run the project:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tools

This project was made with:

- [https://nextjs.org](NextJS)
- [https://babeljs.io](Babel)
- [https://jestjs.io](Jest)
- [https://enzymejs.github.io/enzyme/](Enzyme)
- [https://sass-lang.com/](Sass)

## Important notes

### Optimization

This project has been passed throught Lighthouse audits, values are almost perfect, things missing are related to server configuration.

### Working flow

The working flow is based in git flow with pre commit hooks (including prettier, jest tests and linter), also making a pull request template for each branch to be merged.

### Server side rendering

Server side rendering is been used to be more secure with api requests (api requets are made to get the necessary data).

### Images

Images were been optimized and each of them are been use with source set to improve performance in the site.

### Mobile

Mobile was immplemented and optimized for each view

### Sass

Styles were maded with SCSS to improve the code with imports, variables and mixins.
