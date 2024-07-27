React Skills Based Assessment with Per Scholas


Explore games is a way to explore and get details about video games by search or by genre.

_Technologies used_  
API: RAWG video games database from rawg.io/apidocs. Found on rapidapi.com/collection/list-of-free-apis
Source code editor: Visual Studio Code
Version control: Git https://github.com/lvdy7114
JS UI library: React @ react.dev
Build tool: React+Vite @ vitejs.dev
Accessible/Component UI React Library: Chakra UI @ chakra-ui.com
-used html, css, and javascript
State management tool: Redux @ redux-toolkit.js.org

_Approach taken_

1. Started off with creating dark/light mode on site. Attempted version from per scholas
   e.g. https://github.com/lvdy7114/practice-redux/blob/master/practice-redux/practice/tek-redux/src/features/theme.js. Did not work because it seems to work only on create-react-app build. Used Chakra ui's color mode: https://chakra-ui.com/docs/styled-system/color-mode. Ran into issues where it was not showing. Realized needed to import useColorMode from chakra-ui/react in ColorModeSwitch component.

2. Set up GameGrid component to fetch api for the list of games. This is where the user can see game cards of games. Used ps example from:
   https://github.com/lvdy7114/week_ten/blob/main/day_four/lab/react-star-wars/src/App.jsx. Installed axios to fetch. Used useeffect hook.
   .
3. Created GameCard component. Included game card with background_image and name of game from api. Added platforms and ratings info.

4. Added a list of genres at the aside bar. Fetched genres list. This one had a different endpoint, used the useState hook.

5. Used react icons from chakra ui. https://chakra-ui.com/docs/components/icon/usage, for search bar. Started to build out search bar and function. Used useRef in search input since it is wrapped in a form element with only purpose is to search, this is to get access to the value located in the input group. https://react.dev/reference/react/useRef

6. At first attempted to use reducer and context to manage state, as I kept adding more state logic in, it was not working smoothly and it was starting to get complex. Decided to use the redux toolkit for state management. Used some tips from Redux Essentials example.

7. Used react routing to navigate to get description of each game. Used this e.g. https://github.com/lvdy7114/week_ten/tree/main/day_four/practice/tek-react-router.
   Included an error page, at first the error message did not display. Able to fix by passing error as an argument for it to display.
   Game Detail Component: Includes title, release date, ESRB rating, additional bg img and details of game. There is a refresh icon and can click on the logo to go back to the home page. When in game details page search works and can click on logo to go to home page.

8. Worked on final touches to site. Attempted to use Navlinks from react router but did not work properly. The way the genre list data retrieved from the API, seems to hover and make active the whole list. Instead, used chakraui's custom button feature by using the box feature.
   https://chakra-ui.com/docs/components/button/usage.

_Unsolved problems_
Attempted to include a preview/trailer in the GameDetail component. It had a different api endpoint and I had to set up another useEffect hook. Also, the video player appeared, but it did not want to play or user couldn't press play. So, removed it and just replaced it with the image_background_additional instead as it was in the same endpoint as the game detail section. Making it easier to read code.

Inspired by: Rawg.io website, while ensuring it meets mvp (minimum viable product) for sba.

Instructions:
To run the project:

1. Clone this repo
2. Run npm install
3. Run npm run dev
   Note: If building this project and deploying on your own,
   please obtain an API key from https://rawg.io/apidocs.

To see git commits in terminal type: git log --oneline
