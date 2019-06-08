# Dev Bones - Zombie
https://sayskez.github.io/dev-bones/

## What?
The skeleton with an extra wrapping of SCSS, task runner preconfigured to compile and compress your site, and all the extra meat ready and waiting to build on your command.

### What's Inside:
- Everything from the [Skeleton](https://github.com/SaysKez/dev-bones/tree/master/skeleton) template like metadata already taken care of and smart CSS defaults.
- Fully commented gruntfile configured to compress images, js, css, and html and build it all to `site` with a single command.
- SCSS ready to go and compile to css with a single command.
- File structure ready to go:
  - `css` for your styles
  - `js` for your scripts
  - `img` for your... well images
  - `site` for where it all builds
- .gitignore set up to ignore all those clunky node modules and files that would clog your repo.

## How to Use

### Initial Setup
After downloading the zombie files...

1. Install Sass globally: `npm install -g sass`

2. Install Grunt globally: `npm install -g grunt-cli`

3. cd into your project directory

4. Install Grunt project dependencies: `npm install`

5. **Go!** Customise the content, configure grunt tasks to feel like a mad scientist, and unleash your zombie.

#### Development & Build
1. Run `grunt watch` to compile changes in relevant files automatically. Then hack away in the `src` folder and preview your zombie from the .html files in the `site` folder to see it all live.
2. When you're ready to deploy, run `grunt` to compile and build your site. Deploy the site folder wherever your good zombie calls home.