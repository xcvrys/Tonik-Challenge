# React + TypeScript + Tonik Challenge

At the outset, I must apologize for not using GitHub, but after returning from vacation I wanted to make the deadline as soon as possible and submit the assignment for review (currently is 00:43 06.05 when I'm writing this).

[![forthebadge](https://forthebadge.com/images/badges/powered-by-energy-drinks.svg)](https://forthebadge.com)

## Installation and running the project

1. Clone/ download the repository
2. Run `npm i`
3. Run `npm run dev` to start the development server or longer production version `npm run build && npm run preview`
4. Open `http://localhost:4173/` in your browser
5. Enjoy! 🎉

## Project structure

- `src` - source code
  - `components` - React components
  - `hooks` - custom hooks
  - `styles` - global styles
  - `types` - typescript types

## Technologies used

I've decided to not use any external 'game changing' libraries for this project to showcase my skills and knowledge of the React.

- React
- TypeScript
- Axios
- Vite
- ESLint
- Prettier

## Additional notes

- Time spent: `~2:30h`
  - reading the task requirements
  - setting up the project
  - coding
- Building process started from the reading and understanding the task requirements with the provided GitHub API documentation. After that, I've set up the project with Vite and installed necessary dependencies. I've created a basic structure of the project and started working on the main components. Then a custom hook for fetching data from the GitHub API and implemented the search functionality. I've also added some basic styles to the project. I've tested the application and made some final adjustments. The biggest issue was with the GitHub API rate limit, and sometimes weird behavior of the API [(e.g. sometimes it returns a bunch of "\_\_\_(...)"as names with no reason)](https://imgur.com/fWtOoDm).
- Few things that I would like to improve:
  - Add more styles and redability to the project
  - Add better error handling e.g. when user dont type anything in the search input
  - Add tests
  - Validate different edge cases and browser compatibility (I've mainly used Firefox)
- If I used github my commits would be more frequent and detailed, but I wanted to make the deadline as soon as possible, example:
  - `feat:` added search functionality
  - `fix:` fixed issue with the pagination showing wrong number of pages
  - `refactor:` extracted debounce to a custom `useDebounce` hook
  - `style:` added basic styles to the project

## Final thoughts

I've enjoyed working on this project and I hope you will like it. I'm looking forward to your feedback and I'm open to any suggestions for improvement. I'm also open to any questions you may have about the project or my work. I'm looking forward to the next steps in the recruitment process. 🚀

# Thank you for the opportunity! 🚀
