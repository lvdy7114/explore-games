1. Thinking of creating a game discovery website, but may change mind as I'm moving along.
2. So far, used visual studio code, git for version control, react+vite, and chakra ui.
3. Using chakra ui to access their ui view.
4. Contemplated using dark/light mode theme with example from per scholas or with chakra ui. Testing both, to see what is best. Chakra ui doc for color mode: https://chakra-ui.com/docs/styled-system/color-mode
5. Found a logo online, and colored it to use as own logo.
6. Using chakra ui doc for dark/light mode theme 1st. Not working, works better with ts, so using per scholas version.
7. npm install redux react-redux @reduxjs/toolkit
8. all dependencies in json good to go
9. not working, just scrapping it for now.
10. Got it to work! Needed to import React and useColorMode in ColorModeSwitch component. Used chakraui.
11. Need to change logo to where there is not a white background, will get to it later.
12. The perscholas example seems to work with create-react-app and not react+vite
13. In App.js: added opening parentheses after return and closed it at the bottom. imported React
14. Set up gamegrid component to fetch api of list of games. Used ps example:
    https://github.com/lvdy7114/week_ten/blob/main/day_four/lab/react-star-wars/src/App.jsx. installed axios to fetch. used useeffect hook. imported gamegrid component and put in tag in app.js
15. Included game card with background_image and name of game from api. Used ps e.g.
16. Added platform, may add icon label for each platform later
17. Added a list of genres aside using same way of fetching games.
18. Used react icons from chakra ui. https://chakra-ui.com/docs/components/icon/usage, for search bar.
19. Using this method: https://github.com/lvdy7114/week_ten/blob/main/day_five/tek-usereducer/src/App.jsx and https://github.com/lvdy7114/week_ten/blob/main/day_two/react_movie_search/lab/src/App.jsx to search
20. Looking into using reducer to manage state logic
21. Will not use context or usereducer for state management. Will use redux toolkit for state management.
22. Completed look so far. Will be including react routing to navigate to get description of each game. https://github.com/lvdy7114/week_ten/tree/main/day_four/practice/tek-react-router
23. Set up error page, the error msg does not appear, only the navbar, will work on later.
24. Tried to include a trailer and/or screenshot but having trouble. Scrapping it. Will just have name, release date, and details of game. There is a refresh and can click on the logo to go back to the home page.
25. Added ESRB rating and additional background image. When in link for game details search works and can click on logo to go to home page.
26. So far, happy with how it looks. Just need to go back to fix ErrorPage and possibly add some loading features.
27. Error page fixed, displays error msg when routed to the wrong page.
28. Worked on links to be active, tried navlinks with react routing, but doesn't work as good. It highlights the whole list of genres. It's the way the data fetches the api for genre. Decided to use chakra ui box as a custom button. https://chakra-ui.com/docs/components/button/usage.
