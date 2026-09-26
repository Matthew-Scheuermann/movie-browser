Studio Ghibli Quick Browser — Steps

HTML:

Create index.html, style.css, script.js in one folder, linked normally (CSS in <head>, JS with defer near end of <body>).
In the body: add a heading, one empty <ul id="films"></ul>, and one empty <div id="output"></div>.

JavaScript: 3. Create a state object with two properties: films (starts as an empty array) and selectedFilm (starts as null). 4. Grab your <ul> and <div> with querySelector, save them to variables. 5. Write an async function that fetches https://ghibliapi.vercel.app/films.

Note: the response is a plain array directly — no .data or .results wrapper this time.
Save that array to state.films.
Loop through state.films with .map(), turning each film into an <li> showing its title, with the film's id stored as a data-id attribute.
Join into one string, set as your <ul>'s innerHTML.
Wrap it in try/catch.
Call that fetch function once, at the bottom of your file.
Add a click listener on the <ul> (event delegation — one listener total, not one per item).
Read the clicked item's id from event.target.dataset.id.
Use .find() on state.films to locate the matching film object.
Save it to state.selectedFilm.
Set your <div>'s innerHTML to show that film's title and description.
