## ⭐ Next.js & TailWind CSS Starter Code for Responsive Websites ⭐

Welcome to the Next.js 13.4 & Tailwind CSS Starter Code repository. This project aims to simplify the process of setting up a new Next.js project with Tailwind CSS for responsive web design. This is modular and easy to understand code that can be used as a starting point for any new project.


<details>
<summary><span style="font-size: 1em;">📱 Mobile View</span></summary>
<div style="display:flex;">
  <img src="https://github.com/mahima-manik/nextjs-tailwind-responsive-starter-code/assets/30531520/2b2bd400-2226-4832-af63-86f3b57f1e82" alt="Mobile View" style="width:50%;height:50%;">
</div>
</details>

<details>
<summary><span style="font-size: 1em;">🖥 Desktop View</span></summary>
<div style="display:flex;">
  <img src="https://github.com/mahima-manik/nextjs-tailwind-responsive-starter-code/assets/30531520/178d3a73-6aee-4385-9186-c8cee43416df" alt="Desktop View" style="width:80%;height:80%;">
</div>
</details>

## 🚀 Getting Started

**Pre-requisites**
- [Node.js](https://nodejs.org/docs/latest-v16.x/api/) minimum version v16.8 installed on your machine.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest .`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) command

1. **Clone** the repository to your local machine:
    ```bash
    git clone https://github.com/mahima-manik/nextjs-tailwind-responsive-starter-code.git
    ```
2. **Install** the dependencies:
    ```bash
    cd nextjs-tailwind-responsive-starter-code
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
    This command downloads and installs all the dependencies listed in `package.json` & `package-lock.json` file in `node_modules` folder.

    > **Note:** If you used `npm install package-name` (with a specific package name), npm would install only that package and add it to the package.json file.
3. **Run** the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Now, your application is running at `http://localhost:3000`. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 🧰 What's Included?

### [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
Here is the summary to remember the project structure. Note that it is a convention to put all the code related to the application in `source` folder and configuration related files in the root folder of the project.
- Configuration files such as `package.json`, `next.config.js`, `jsconfig.json`, etc. are at the root of the project.
- **`/src`**: This folder contains the application's source code. Most important ones are `src/app` & `src/pages`. 
- **`/src/app`**: This folder contains the application's layout and metadata.
- **`/src/components`**: This folder contains the application's components which can be used by different pages.
- **`/src/styles`**: This folder contains the application's stylesheets, including global.css.
- **`src/pages`**: This folder contains the application's pages.
    > **Note:** Since this is single page application, we do not have `src/pages` in this project 
- **`/public`**: This folder contains static files such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).


## Files for applying layout and components

1. **`src/app/layout.js`**
    - This file contains the application's layout that is applied to all the pages. It must contain html and body tags.
    - This layout enables you to modify the initial HTML returned from the server. The root layout is React Server component.
    > **Note:** Next.js route segments can have their own layouts which will be shared across all pages in that segment
2. **`src/app/page.js`**
    - A page is UI that is unique to a route/path - the component returned from here is what user sees on this app route. 
    - You can define pages by exporting a component from a page.js file - by using Nested folders to refine routes in Next.js.

## 🏄🏻 Tailwind CSS

### Concepts
1. **Breakpoints**: Tailwind CSS uses mobile-first breakpoint system. Default breakpoints are as follows:
    ```js
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    }
    ```

- Easy way to visualize is through changing colors on the breakpoints. For example, if you want to change the background color of the page at different breakpoints, you can do it as follows:
    
    ```html
    <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500">
        <h1>Responsive Background Color</h1>
    </div>
    ```

- Use unprefixed utilities to target mobile, and override them at larger breakpoints. Don’t think of `sm:` as meaning “on small screens”, think of it as “at the small breakpoint“.

- It is also possible to customize add/override breakpoints - giving them different names and dimenions as per your requirements. More info: [here](https://tailwindcss.com/docs/responsive-design#customizing-your-theme)

Here are some of the important tailwind css classes that helps in responsive web design:

1. **`flex`**: Used for arrangement of child elements within a container by specifying the flex direction (-row, -col, -row-reverse, -col-reverse). It also provides easy control of sizes, spacing, order, and alignment between child elements.
2. **`justify-center`**: The justify-content property aligns the flex items along the main axis of the current line of the flex container.
3. **`items-center`**: The align-items property aligns flex items of the current flex line the same way as justify-content but in the perpendicular direction.
4. **`min-h-screen`**: The min-height CSS property sets the minimum height of an element.  It ensures that the element occupies at least the entire height of the viewport, providing a full-screen effect.

## 📚 Learnings & Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
1. favicon.ico cannot be placed in public folder. It has to be placed in the `src/app` folder. [Reference](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon)
2. `page.js` cannot be renamed to `index.js`. A page.js file is required to make a route segment publicly accessible. `layout.js` also has to stay in app folder. [Reference](https://nextjs.org/docs/getting-started/project-structure#routing-files)
3. `layout.js` replaced both `_app.js` and `_document.js` in Next.js version 13. [Reference 1](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app), [Reference 2](https://www.makeuseof.com/create-custom-layout-in-nextjs/)

## 🔧 Useful Tools
1. [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer): Chrome extension to resize the browser window for testing different screen resolutions.
2. [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.
3. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes npm modules in import statements.
4. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Super useful VSCode plugin that autocomplete suggestions for Tailwind CSS and provides instant CSS preview.

## 🫡 Contributing
👍🎉 First off, thanks for taking the time to contribute! 🎉👍
- You can log any defects or suggestions as GitHub issues [here](https://github.com/mahima-manik/nextjs-tailwind-responsive-starter-code/issues). 
- To contribute code, fork this project and submit a pull request with your changes and add a brief description of your contribution.
