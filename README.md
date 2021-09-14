# Oozou Todo List App Take-home Assignment

## About The Project

This project is an assignment of OOZOU that will allow us to assess your thought process, 
ability to interpret requirements and technical implementation skills. You will be judged 
on code design, structure, efficiency, specs, and cleanliness. 

## Built with

- [Jest](https://jestjs.io/) - Testing framework
- [Nx](https://nx.dev/) - Dev, test and build tool
- [React Query](https://react-query.tanstack.com/) - API fetching wrapper
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Functionality React component
  testing
- [React.js](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - Utility styling
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript

## Getting Started

### Prerequisites

Set up your local development environment by following the steps below.

#### Setting up your Mac

- Install Homebrew (https://brew.sh/)
- Install Node (version 12.x) using `brew install node` (You can also choose to use `nvm`).
- Install Yarn `brew install yarn`
- Download `git` (https://git-scm.com/download/mac)
- (Optional) You can install
  SourceTree (https://product-downloads.atlassian.com/software/sourcetree/ga/Sourcetree_4.0_229.zip) if you prefer using
  a GUI tool for git.

#### Setting up your Windows

- Open powershell with administrator
- Install Scoop (https://scoop.sh/) on
  PowerShell `Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')`
- (Optional) If you have error run `Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
- Install Command-Line Installer `scoop install cmder` (https://cmder.net/)
- Open Cmder setting and setup Startup Command to `{cmd::Cmder}`
- Install NodeJS (version 12.x) using `scoop install nodejs-lts`
- Install Yarn `scoop install yarn`
- Download `git` (https://git-scm.com/download/win)

#### Setting up your code editor

We recommend using VSCode (https://code.visualstudio.com/docs/?dv=osx) and
WebStorm (https://www.jetbrains.com/webstorm/) as your code editor. Download the below plugins to be more productive
with your tasks and also adhere to the various coding standards being used in the project.

##### Recommended VSCode plugins

- Prettier - Code formatter
- ESLint
- Nx Console
- TypeScript Extension Pack
- React Extension Pack
- Tabnine Autocomplete

Here's a useful VSCode configuration:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontSize": 16,
  "editor.fontLigatures": true,
  "editor.letterSpacing": 1.0,
  "css.validate": false,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "prettier.enable": true,
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc",
  "prettier.prettierPath": "./node_modules/prettier"
}
```

##### Recommended WebStorm plugins

- Nx WebStorm
- Dotenv File Supports
- Highlight Bracket Pair
- Rainbow Bracket
- Tabnine Autocomplete

### Installation

1. Clone the repo

```shell
git clone https://github.com/opn-ooo/waas-web-apps.git
```

2. Install packages

```shell
yarn install
```

3. Please check that you have nx running on your machine

```shell
nx
```

4. (Optional) If you encounter with the error that `nx command not found`, you need to install nx globally

```shell
npm install -g nx
```

### Running on your local machine

1. Connect your workplace VPN
2. Run command `nx serve` or `yarn start`

## Conventions

### Project structure

- `/apps/` contains the application projects. These are the main entry point for a runnable application. We recommend
  keeping applications as light-weight as possible, with all the heavy lifting being done by libraries that are imported
  by each application.

- `/libs/` contains the library projects. There are many kinds of libraries, and each library defines its own external
  api so that boundaries between libraries remain clear.

- `/tools/` contains scripts that act on your code base. This could be database scripts, custom executors (or builders)
  or workspace generators.

- `/workspace.json` defines each project in your workspace, and the executors that can be run on those projects.

- `/nx.json` adds extra information about projects, including manually defined dependencies and tags that can be used to
  restrict the ways projects are allowed to depend on each other.

- `/tsconfig.json` sets up the global typescript settings and creates aliases for each library to aid when creating
  typescript imports.

### Conventional commit

`<type>`(`<scope>`): `<description>`

Since our JIRA does not yet integrate with our GitHub, it is needless to prefix your commit with JIRA's ticket.

#### Type

- _fix_: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).

- _feat_: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic
  versioning).

- _refactor_: a commit of the type refactor organizes a codebase without changing its logic.

- _chore_: a commit of the type chore is the change that does not affect the meaning of the code (white-space,
  formatting, missing semi-colons, comments, etc)

- _docs_: a commit of the type docs is for a documentation only changes i.e., update readme file.

- _ci_: a commit of type ci changes CI configuration files and scripts.

- _build_: a commit of the type build changes the build system or external dependencies (example scopes: gulp, broccoli,
  npm).

- _test_: a commit of the type test adds the missing tests or correct the existing tests.

### Monorepo

Please keep in mind that the monorepo follows certain conventions, which are techniques for scaling build systems and
version control applications with a huge amount of code and frequent updates.

- `Ease of code reuse` – Similar functionality or communication protocols can be abstracted into shared libraries and
  directly included by projects, without the need of a dependency package manager.
- `Simplified dependency management` In a multiple repository environment where multiple projects depend on a
  third-party dependency, that dependency might be downloaded or built multiple times. In a monorepo the build can be
  easily optimized, as referenced dependencies all exist in the same codebase.
- `Atomic commits` When projects that work together are contained in separate repositories, releases need to sync which
  versions of one project work with the other. In large enough projects, managing compatible versions between
  dependencies can become dependency hell. Developers need to change multiple projects atomically.
- `Large-scale code refactoring` Since developers have access to the entire project, refactors can ensure that every
  piece of the project continues to function after a refactor.
- `Collaboration across teams` In a monorepo that uses source dependencies (dependencies that are compiled from source)
  , teams can improve projects being worked on by other teams. This leads to flexible code ownership.

## Usage

For more examples, please refer to the [Nx documentation](https://nx.dev/)

### Generate a React application

Run `nx g @nrwl/react:app <name>` to generate a React application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a React library

Run `nx g @nrwl/react:lib <name>` to generate a React library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@todolist/shared`.

### Client-side development server 

Run `nx serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any
of the source files. The default is the `my-todo-list` app.

### Server-side development Server

Run `nx serve api` or `npm start:api` for a dev server. Navigate to http://localhost:3333/. The app will automatically reload if you change any
of the source files.

### Database is on the docker

You can run `docker-compose up` or `npm run up` to up and running the database.

### Code scaffolding

Using the IDE's plugins will save you a lot of time, so you won't have to remember and type the exact command.

If you use `VSCode`, you can install the `Nx Console` plugin.

If you use `WebStorm`, you can install the `Nx WebStorm` plugin.

### Build

Run `nx build <name>` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `yarn build:staging` to build the app with a staging environment. The build artifacts will be stored in the `dist/`
directory.

### Running unit tests

Run `nx test <name>` to execute the unit tests via [Jest](https://jestjs.io). By default, it will test the workspace
app.

Run `nx affected:test` to execute the unit tests affected by a change.

### Affected by current changes

Run `nx affected:lint` to lint projects affected by current changes.

Run `nx affected:test` to test projects affected by current changes.

Run `nx affected:build` to build applications and publishable libraries affected by current changes.

You could receive an error stating that the build object could not be identified. You can fix it by cloning the develop
branch. Alternatively, you must have a suffix with —base=origin/develop before the command.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further reading

- [Ant Design](https://ant.design/)
- [Conventional Commit](https://www.conventionalcommits.org/)
- [Domain-Driven Development](https://www.thoughtworks.com/insights/blog/domain-driven-design-neednt-be-hard-heres-how-start)
- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
- [Monorepo](https://github.com/joelparkerhenderson/monorepo_vs_polyrepo)
- [Next.js](https://nextjs.org/)
- [Nx](https://nx.dev/)
