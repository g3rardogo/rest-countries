# Frontend Mentor - REST Countries API with color theme switcher solution

![](./screenshot.jpg)

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage.
- Search for a country using an `input` field.
- Filter countries by region.
- Click on a country to see more detailed information on a separate page.
- Click through to the border countries on the detail page.
- Toggle the color scheme between light and dark mode.

### Links

- Solution URL: 🚧 In Progress
- Live Site URL: 📌 [Here](https://rest-countries-g3rardogo.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Git](https://git-scm.com/) - Version control system
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS preprocesor

### What I learned

This is my first project using React and what I learned from it is to using React Router DOM and React Hooks. This are some code snippets that im proud of:

```js
//Search country Hook
function useSearchCountries(countries) {
  const [query, setQuery] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState(countries);
  React.useMemo(() => {
    const result = countries.filter((country) => {
      return `${country.name}`.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredCountries(result);
  }, [countries, query]);
  return { query, setQuery, filteredCountries };
}
```

### Continued development

I would like to start learning more about React Hooks and then apply them in all the components

### Useful resources

- [React for Beginners](https://dev.to/reedbarger/react-for-beginners-the-complete-guide-for-2021-55nj) - This helped me for start building React applications
- [Using React with the History API](https://www.pluralsight.com/guides/using-react-with-the-history-api) - Understanding of how the history API works while making use of the React router package.
- [React Skeleton Screens Tutotrial](https://youtube.com/playlist?list=PL4cUxeGkcC9i6bZhMuAzQpC6YgLmB4k4-) - An easy way how to do a skeleton loading with React. I really liked this package and will use it going forward.

## Author

- Frontend Mentor - [@g3rardogo](https://www.frontendmentor.io/profile/g3rardogo)
- Twitter - [@g3rardogo](https://twitter.com/g3rardogo)

## Acknowledgments

I want to thank my dear friend [Eduardo Gonzalez](https://github.com/veglez) who helped me on this project.
