# Dev-Bones Zombie
https://sayskez.github.io/dev-bones/

## What?
The skeleton boilerplate with an extra wrapping of SCSS, Grunt task runner preconfigured to compile and compress your site, and all the extra meat ready and waiting to build on your command.

### What's Inside:
- File structure ready to go:
  - `css` for your styles
  - `js` for your scripts
  - `img` for your... well images
  - `site` for where it all builds
- Fully commented gruntfile configured to compress images, js, css, and html and build it all to `site` with a single command.
- SCSS ready to go and compile to css with a single `grunt watch`.
- .gitignore set up to ignore all those clunky node modules and files that would clog your repo.

## How to Use
After downloading...

### Initial Setup
1. Install Sass globally: 

`npm install -g sass`

2. Install Grunt globally:

`npm install -g grunt-cli`

3. cd into your project directory

4. Install Grunt project dependencies

`npm install`

5. **Go!** Customise the content, configure grunt tasks, and unleash your zombie.

#### Development & Build
1. While working, run `grunt watch` to compile the relevant files and preview from the site folder.
2. When you're ready to deploy, run `grunt` to compile and build your site. Deploy the site folder to hosting or wherever you prefer.