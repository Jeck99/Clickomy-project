# ClTvShowsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Frontend Recruitment Task

## 1.	
Make a page with a dropdown of 5 TV series (of your choosing).

## 2.	
When the user chooses a series make a request to `OMDb API` (http://www.omdbapi.com/) to get info regarding the chosen series, using the response generate another dropdown to let the user choose a season number, make another request to get a list of all the episodes in the chosen season.

## 3.	
Using `Kendo UI For Angular` (https://www.telerik.com/kendo-angular-ui)  render a grid to present all the episodes of the season returned in the section above. 
Show these columns in the grid : Title, Released, Episode, imdbRating .
The grid should look something like – 
 

## 4.	
Clicking on a title of an episode in the grid needs to make another request to `OMDb API` to receive additional info regarding the specific episode, afterwards open a modal that presents the info returned from the request.
Design the modal to show these properties regarding the episode –

a.	Title
b.	Runtime
c.	Genre
d.	Plot
e.	Poster

•	Make sure to have an organized hierarchy Angular project including the necessary services. 
•	Upload the result to GitHub.

