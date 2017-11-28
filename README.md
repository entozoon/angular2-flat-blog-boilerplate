# Angular2 Flat Blog Test Project

(Check it out!)[https://entozoon.github.io/angular2-flat-blog-boilerplate/]

Just tinkering around with angular-cli and webpack, rather than a boilerplate.
For now, at least.

![Its a start!](posterity/1.gif)

## Develop

    npm start

## Deploying

Build the project into the /docs directory (which github is set up to use), by:

    npm run build-prod
    Then commit and push as normal

NOTE: It takes a minutes for github to (automatically) update its live server
with your branch. Also, theoretically it can cache for 10 minutes but I've not
witnessed that.

## NOTES

How to create a blank Angular project from scratch with SCSS compilation:

    ng new projectName --style=scss
