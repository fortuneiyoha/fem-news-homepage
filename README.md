# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Technology Used](#technology-used)
  - [What I Learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![website preview](screenshots/news-homepage-desktop.png)

### Links

- **Solution:** [frontendmentor.io/solutions/news-homepage-huI9q5FqBJ](https://www.frontendmentor.io/solutions/news-homepage-huI9q5FqBJ)
- **Live Site:** [fem-news-homepage.pages.dev](https://fem-news-homepage.pages.dev/)

## My process

### Technology Used

This project was built using the following frontend technologies and methodologies:

- **Semantic HTML5 markup:** To provide a clear and meaningful structure to the content.
- **CSS custom properties:** To efficiently manage and reuse style values throughout the project.
- **CSS Grid:** To create powerful and flexible layouts with precise control over placement and alignment.
- **Flexbox:** To create flexible and responsive layouts.
- **JavaScript:** To add interactivity and dynamic functionality to the project.
- **BEM (Block Element Modifier):** To create modular, reusable, and maintainable CSS code.
- **Mobile-first workflow:** To ensure a better user experience on smaller screens and devices.

### What I learned

During the development of this project, I had the opportunity to learn and implement several CSS concepts to enhance the design and accessibility of the website.

#### Layouts

1. **CSS Grid**: I utilized the power of CSS Grid to create a structured and responsive layout for the elements on the website. This allowed me to efficiently position and align the different sections and components.

2. **Flexbox**: Flexbox played a key role in achieving flexible and responsive alignment of the articles on the website. By leveraging Flexbox properties, I ensured that the articles adapt well to different screen sizes.

#### Properties

##### Accessibility

1. **.sr-only**: To improve website accessibility and facilitate screen readers in identifying specific sections, I utilized the `.sr-only` class. This class visually hides certain elements while providing readable text for screen readers, such as **article headings**.

##### CSS Grid

1. **grid-template-areas**: This CSS Grid parent property enabled me to define the names of grid lines and the number of grid tracks (columns and rows), and grid areas for individual grid items. I utilized this property to assign specific areas for each element on the website.

2. **grid-area**: By utilizing the `grid-area` property, I precisely positioned each element within the CSS Grid layout. This property allowed me to place each item in the desired grid area.

##### Fonts

1. **@font-face**: To enhance the typography of the website, I utilized the `@font-face` CSS directive. This enabled me to incorporate custom fonts from local files.

##### Utilities

1. **CSS Custom Properties**: I made extensive use of CSS custom properties to define colors and the transition effect. By declaring these properties in the `:root` scope, I ensured their availability throughout the website. This approach adheres to the "DRY" (Don't Repeat Yourself) code principle, enhances modularity, and improves the development process.

   **Example:**

   ```css
   :root {
     --clr-primary: hsl(5, 85%, 63%);
   }
   ```

   To utilize a custom property, I used the `var()` function. For instance, when setting the text color for the main heading, I referenced the property within the `var()` function.

   **Example:**

   ```css
   h1 {
     color: var(--clr-primary);
   }
   ```

   Custom properties can also be block-scoped to make them specific to certain elements.

   **Example:**

   ```css
   h1 {
     --clr-primary: hsl(5, 85%, 63%);
     color: var(--clr-primary);
   }
   ```

These CSS concepts have not only improved the design and accessibility of the "News Homepage" but also expanded my skills and understanding of building responsive and visually appealing web interfaces.

Feel free to explore the solution further and provide any feedback you may have.

### Continued development

Moving forward, my focus will be on further improving the accessibility of my projects and applying the techniques I've learned during the development of this project.

### Useful resources

Here are some valuable resources that I found helpful during the development of this project:

- [Kevin Powell - Self-hosting fonts explained (including Google fonts) // @font-face tutorial](https://youtu.be/zK-yy6C2Nck): This tutorial by Kevin Powell provided a clear explanation of how to set up and use self-hosted fonts, including Google fonts. It was instrumental in helping me incorporate local fonts into my project.
- [Dave Gray - How to Organize CSS | Beginners BEM tutorial](https://youtu.be/MNPdifWAAa4): Dave Gray's BEM (Block, Element, Modifier) tutorial was invaluable in understanding and implementing the BEM naming convention. I will continue to utilize this convention in my future projects to maintain a structured and scalable CSS architecture.
- [MDN web docs - :root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root): The MDN web docs provided comprehensive information on the `:root` selector, its purpose, and its usage in CSS. This resource enhanced my understanding of how to declare and access CSS custom properties.

- [MDN web docs - display](https://developer.mozilla.org/en-US/docs/Web/CSS/display): The MDN web docs guide on the `display` property was helpful in deepening my knowledge of the various display values and their effects on element layout and rendering.

- [MDN web docs - grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas): The MDN web docs provided a detailed explanation of the `grid-template-areas` property in CSS Grid. This resource was instrumental in understanding how to create and manipulate grid areas within a CSS Grid layout.

- [MDN web docs - grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area): The MDN web docs guide on the `grid-area` property provided essential information on how to position grid items within a CSS Grid layout. It helped me precisely place elements on the grid and achieve the desired layout.

- [MDN web docs - flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex): The MDN web docs guide on the `flex` property offered a comprehensive overview of flexbox and its various properties. This resource strengthened my understanding of flexbox and its application in creating flexible and responsive layouts.

By continuing to explore these resources and stay up-to-date with new developments in web development, I aim to enhance my skills and create even more accessible and visually appealing projects.

## Author

This project was created by **Fortune Iyoha**, a passionate web developer. If you want to connect with me or view more of my projects, you can visit my [Frontend Mentor profile](https://www.frontendmentor.io/profile/fortune-i-o) or follow me on [Twitter](https://twitter.com/fortuneiyoha) for updates and web development discussions.
