# Disney Clone Website (https://disney-clone-omega-vert.vercel.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is a clone of the Disney website, built using React and Tailwind CSS. It provides features like searching for movies and TV shows, discovering new movies and TV shows, and more. The data for movies and TV shows is fetched from the MovieDB API using the Fetch API.

## Screenshots

<img width="907" alt="1" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/f44b8cde-8398-40d5-92e6-de820727bff5">
<img width="906" alt="3" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/e55ad2ae-7eb4-4211-84ed-5f97d7f3d88d">
<img width="907" alt="4" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/b3acc8ad-2f4f-48fc-b726-d117fb0d189c">

Certainly! Here's an example of a "Features" section for the README file of a Disney+ clone project:

## Features

- **Movie and TV Show Browsing:** Browse a vast collection of movies and TV shows available on the platform. Discover new releases, trending content, and explore various genres.

- **Search Functionality:** Search for specific movies, TV shows, actors, or directors using the robust search feature. Find your favorite content quickly and easily.

- **User Authentication:** Sign up and log in to create and manage your personal profile. Keep track of your watched movies and TV shows, save favorites, and customize your viewing preferences.

- **Movie/TV Show Details:** Access detailed information about each movie or TV show, including synopsis, cast and crew details, release date, ratings, and related recommendations.

- **Categories and Genres:** Browse content based on genres such as action, comedy, drama, or specific categories like Disney classics, Marvel movies, and more.

- **Watchlist and Favorites:** Create a watchlist to save movies or TV shows you want to watch later. Mark your favorites and easily access them for future viewing.

- **Recommendation System:** Get personalized content recommendations based on your viewing history, ratings, and preferences. Discover new movies and shows tailored to your interests.

- **Responsive Design:** Enjoy a seamless user experience across different devices and screen sizes. The application is designed to adapt to desktops, tablets, and mobile devices.

- **User Reviews and Ratings:** Rate and review movies or TV shows, and view average ratings and user reviews to help you make informed viewing choices.

## Technologies Used

- React: A JavaScript library for building user interfaces. It is used to create the UI components and handle the application's state and logic.

- Tailwind CSS: A utility-first CSS framework that provides pre-built styles and classes. It is used for styling the components and creating a responsive layout.

- MovieDB API: An API that provides movie and TV show data. It is used to fetch information about movies and TV shows, search for specific content, and retrieve details for individual titles.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/AKASH-PRASAD7/Disney-clone.git
```

2. Install the dependencies:

```
cd disney-clone
npm install
```

3. Add your MovieDb API key:

```
touch .env.local
```

- REACT_APP_API_KEY=<YOUR_KEY>

4. Set up the MovieDB API key:

   - Get an API key from the MovieDB website: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
   - Create a `.env` file in the project root directory.
   - Add the following line to the `.env` file, replacing `<your-api-key>` with your actual API key:

     ```
     REACT_APP_MOVIEDB_API_KEY=<your-api-key>
     ```

5. Start the development server:

```
npm start
```

6. Open the application in your browser:

(http://localhost:3000)

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was inspired by the official Disney website.
- Special thanks to the MovieDB for providing the API to fetch movie and TV show data.
