# App structure

This app shows both the code challenge as well as a possible solution.
You can toggle between the two, by navigating between http://localhost:3000 & http://localhost:3000/finished
The app router will ideally be removed and only the `/App` folder would exist when a candidate pulls down this repo.

The code challenges here should demo knowledge of state management, api usage, react render lifecycle & api debugging.
This can be delivered to candidates as a standalone repo, or hosted on a site like codesandbox to remove the env issues that may arise.

Once the code challenge is complete, the interview panel may ask questions regarding testing and how best to ensure code change quality, this will provide insight into the candidates foresight to reusability and component isolation testing.

# CloudCorp's "Movies" Service

Hi! Welcome to cloud corp. You should have received information about
what we want you to build separately. This README will cover the project requirements and some tips to get started using the provided scripts.

**Note:**

- No changes to the app structure, config or design system components should be necessary.
- Don't worry about styling or layout. This project uses [tailwind.css](https://tailwindcss.com/) for styling if you would like to make changes.
- There are 2 apis already developed, `getSearchResults` & `getSelectedFilm`. Our developers have noted there may be incomplete data types from the `getSearchResults` api.

# Set up

Request an api key from https://www.omdbapi.com/, it can take some time, so do this while you get the project set up.
You will need a recent version of node, download from [their site](https://nodejs.org/en/download/package-manager) from or run `nvm use` if you have nvm installed. This project was bootstraped with node `v21.3.0`.
You will need to copy the `.env.example` as a `.env` file, paste in your omdb api key as the `VITE_OMBD_API_KEY` value.

## Scripts

Run `npm i && npm start` to get the project going, if not troubleshoot with your interview panel.

# Project requirements

The users would like to:

## Pt 1.

1. Be able to search for a film title and be delivered results from the ombd api.
1. The results should be ordered by year with the newest films displaying first. (Use `localeCompare` for this)
1. When a user clicks on a film, highlight which film has been selected from the list.
1. They would like to see the film `Poster` and a short plot summary.

## Pt 2.

1. Users have reported problems understanding when apis are loading, use the provided skeleton loaders for the `SearchResults` & `SelectedFilm` components to display a loader while the api calls are being made.
1. We would like to optimize our search to only search once the user is done typing, not during each key press, find a way to optimize the typing interaction.

## Pt 3. (bonus)

1. Developers have reporting managing the search, film list and selected film data through the different layers of state is a problem, figure out a way to consolidate the state management.
