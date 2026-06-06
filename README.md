# UFC Fighter Profile

UFC Fighter Profile is a lightweight, front-end web application that
dynamically displays detailed information about selected UFC fighters.
It provides an interactive UI where users can choose a fighter from a
dropdown menu and instantly view their stats. The project demonstrates
clean DOM manipulation, modular JavaScript architecture, and responsive
UI design.

------------------------------------------------------------------------

## Features

-   Dynamic fighter selection via dropdown menu
-   Auto-populated options from a structured JavaScript data source
-   Real-time DOM updates based on user input
-   Modular ES6 architecture (separation of UI, data, and logic)
-   Clean and responsive UFC-themed UI design
-   Lightweight and fast client-side rendering
-   Scalable fighter data structure for easy expansion

------------------------------------------------------------------------

## Built With

-   HTML5
-   CSS3
-   JavaScript (ES6 Modules)

------------------------------------------------------------------------

## Installation & Setup

Clone the repository and run it locally using a simple static server.

# Clone the repository

git clone https://github.com/your-username/ufc-fighters-profile.git

# Navigate into the project directory

cd ufc-fighters-profile

# Run locally (option 1: VS Code Live Server)

# Right-click index.html → Open with Live Server

# OR run with Python server

python -m http.server 5500

Then open: http://localhost:5500

------------------------------------------------------------------------

## Usage

1.  Open the application in your browser.
2.  Use the dropdown menu labeled Select a fighter.
3.  Choose a fighter from the list.
4.  The profile card updates instantly with:
    -   Fighter name
    -   Weight class
    -   Wins and losses
5.  Each selection triggers a real-time UI update without page reload.

------------------------------------------------------------------------

## Application Architecture & Logic

### Data Layer

Fighter data is stored in a static ES module (fighter.js) as an array of
objects: - name - weightClass - wins - losses

This structure allows easy scalability.

------------------------------------------------------------------------

### UI Initialization

The ui.js module populates the select element dynamically: - Iterates
over fighters array - Generates option elements - Injects into DOM

------------------------------------------------------------------------

### Event Handling & State Update

In app.js: - change event listener on dropdown - match selected
fighter - update DOM elements

------------------------------------------------------------------------

### Rendering Logic

-   Linear search on fighters array
-   Inject data into DOM using innerHTML
-   Instant UI updates

------------------------------------------------------------------------

### Design Pattern

Modular structure: - fighter.js (data) - ui.js (UI) - app.js (logic)

------------------------------------------------------------------------

## Footer

Taha Belghiti --- Junior Front-End Developer\
Built with HTML, CSS, and JavaScript · © 2026
