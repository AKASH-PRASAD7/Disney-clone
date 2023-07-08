# Disney Clone Website (https://disney-clone-omega-vert.vercel.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is a clone of the Disney website, built using React and Tailwind CSS. It provides features like searching for movies and TV shows, discovering new movies and TV shows, and more. The data for movies and TV shows is fetched from the MovieDB API using the Fetch API.

## Screenshots
<img width="907" alt="1" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/f44b8cde-8398-40d5-92e6-de820727bff5">
<img width="906" alt="3" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/e55ad2ae-7eb4-4211-84ed-5f97d7f3d88d">
<img width="907" alt="4" src="https://github.com/AKASH-PRASAD7/Disney-clone/assets/110546856/b3acc8ad-2f4f-48fc-b726-d117fb0d189c">

## Features

- Search for movies and TV shows: Users can search for specific movies or TV shows using keywords. The search results will be displayed with relevant details.

- Discover new movies and TV shows: Users can explore a collection of movies and TV shows to discover new content. The collection includes popular movies, trending movies, top-rated movies, popular TV shows, and more.

- Movie and TV show details: Users can view detailed information about a specific movie or TV show, including the title, overview, release date, rating, and more.

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
mkdir .env.local
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

```
http://localhost:3000
```

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was inspired by the official Disney website.
- Special thanks to the MovieDB for providing the API to fetch movie and TV show data.
