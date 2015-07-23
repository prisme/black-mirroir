## Black Mirroir ##
Evolving & flexible MV framework based on handpicked npm packages :  
browserify - gulp - page.js - handlebars - GSAP …

inspired by [bigwheel framework](https://github.com/bigwheel-framework) - upon route change : 
- current view _exit_ : _animateOut_ then remove the view DOM container
- next view _enter_ : loadData (JSON), compileTemplate, ready, preload, _animateIn_  
  
  
Rendering is done client side at the moment but allows direct url access.

TODO : server-side rendering  
generate static html files during build process, and/or use Mustache templates shared between PHP & Js, enabling server + client side  rendering without duplication.


# Getting Started #

1. Duplicate sources and rename folder.

2. Edit .htaccess RewriteBase to your project folder on line 34
> RewriteBase /YourProjectFolder/

3. Edit assets/js/app.js _ROOT to your project folder on line 5
> window._ROOT = '/YourProjectFolder/'; 

4. Open Terminal and navigate to the project (from finder, drag and drop folder onto terminal application icon).
Install project depencies as listed in package.json (requires node and npm to be installed)
> npm install

5. Run Gulp to do a first build and to launch watchify (instructions listed in gulpfile.js)
> gulp

6. Open your project in a browser.

7. Edit any files, and the watchify should rebuild the project automatically (assets/js/bundle.js).
If gulpfile.js edited, cancel the process in terminal and relaunch it
> ctrl + c
> gulp

