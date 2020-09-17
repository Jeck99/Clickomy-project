
# Frontend Recruitment Task
## demo : https://clickomyimdbapp.azurewebsites.net/
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

