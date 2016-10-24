## BADCamp experiment Drupal 8 theme
As part of my talk on Component-driven theming at the 2016 BADCamp at UC Berkeley, I created an experimental Drupal 8 theme to demo how you can create components using twig and kss node and then integrate them with Drupal.


If you haven't yet, install nvm:
https://github.com/creationix/nvm

### Run the following commands from the theme directory

#### Use the right version of node with:
`nvm use`

_This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency._

#### If that version of node isn't installed, install it with:
`nvm install`

#### Install npm dependencies with
`npm install`

_This command looks at `package.json` and installs all the npm dependencies specified in it.  Some of the dependencies include gulp, autoprefixer, gulp-sass and others._

#### Runs default task
`npm run build`

_This will run whatever the default task is._

#### Compiles Sass
`npm run compile`

_This will perform a one-time Sass compilation._

#### Runs the watch command
`npm run watch`

_This is ideal when you are doing a lot of Sass changes and you want to make sure every time a change is saved it automatically gets compiled to CSS_

#### Cleans complied directory
`npm run clean`

_This will perform a one-time deletion of all compiled files within the dist/ directory._

## Do the next in Drupal

### Paragraph's module
_Install the paragraph's module and its dependencies._

### Components Libraries module
_Install the Components Libraries module which will allow for Drupal to be aware of your components._

### Create a Paragraph type
_For this example, create a paragraph type called 'card' with the following fields:_
* Name (text field)
* Photo (Image)
* Bio (long text)
* Social Links (Link)

### Create a custom Paragraph template
_After creating a node using the paragraph type above, create a custom Twig template to override the default paragraph twig template using for drupal.  This template can exist inside /badcamp/templates._
