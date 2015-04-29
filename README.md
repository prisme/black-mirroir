## Black Mirroir ##
Based on cool stuff handpicked from npm : browserify - page router - handlebars - gulp .etc  

### MV framework
*Le flux continu*  **&** *Le accès direct*.  
Rendering is done client side at the moment but allows direct url access.
TODO : generate static html files.

**NB:**  
A version using mustache instead of handlebars template engine exists.  
This allows sharing view-templates between PHP & Js, to do client & server side rendering without template duplication.  


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

