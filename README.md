# Chuck Norris Jokes

A fun, interactive web application that displays random Chuck Norris jokes fetched from an API.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [API Reference](#api-reference)

## 🎯 Overview

This project is a simple, lightweight web application built with vanilla HTML, CSS, and JavaScript. It provides users with a fun way to load and read random Chuck Norris jokes by interacting with a single button. The application features a sleek dark theme with neon green accents, creating a modern terminal-like aesthetic.

## ✨ Features

- **Random Joke Generation**: Click the "Load Another" button to fetch a new Chuck Norris joke
- **External API Integration**: Uses the free ChuckNorris.io API to retrieve jokes
- **Responsive Design**: Optimized for viewing on different screen sizes
- **Modern UI**: Dark theme (1f1f1f background) with lime green text for a stylish look
- **Error Handling**: Built-in error catching for failed API requests
- **Chuck Norris Image**: Displays a Chuck Norris image alongside the jokes

## 🛠️ Technologies Used

| Language | Percentage | Purpose |
|----------|-----------|---------|
| CSS | 41.5% | Styling and layout |
| HTML | 34.4% | Page structure and markup |
| JavaScript | 24.1% | Interactivity and API integration |

### Technology Stack

- **HTML5**: Semantic markup for page structure
- **CSS3**: Modern styling with flexbox and responsive design
- **JavaScript (ES6+)**: Async/await for API calls
- **Fetch API**: For HTTP requests to external API

## 📁 Project Structure

```
chuckNorris/
├── index.html          # Main HTML file with page structure
├── style.css           # Styling and layout definitions
└── index.js            # JavaScript logic for joke fetching
```

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/obedyakpa0-dev/chuckNorris.git
   cd chuckNorris
   ```

2. No additional dependencies or build tools required! This is a static web application.

3. Open `index.html` in your web browser to run the application.

## 💻 Usage

1. Open the application in your web browser
2. You'll see the title "Chuck Norris Jokes" and a message saying "Press 'Load another' for joke..."
3. Click the **"Load Another"** button to fetch a random Chuck Norris joke
4. The joke will appear in the joke container
5. Click the button again to load another joke

## 🔍 Code Overview

### HTML Structure (`index.html`)

The HTML file provides a simple, clean structure with:
- A container div with id `container` for layout
- A heading: "Chuck Norris Jokes"
- A joke container with id `loadingJoke` to display the current joke
- A button with id `loadJokeBtn` to trigger new jokes
- An image element displaying a Chuck Norris photo
- Link to external stylesheet and script file

### JavaScript Logic (`index.js`)

The JavaScript file implements the core functionality:

```javascript
const loadJoke = async () => {
    try {
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            header: {
                Accept: 'application/json'
            }
        });

        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('loadingJoke').textContent = jokeData.value
    } catch (error) {
        console.log(error)
    }
}

document.getElementById('loadJokeBtn').addEventListener('click', loadJoke);
```

**Key Features:**
- `loadJoke()`: An async function that fetches jokes from the ChuckNorris API
- **Try-Catch Block**: Handles any errors during the API request
- **Event Listener**: Triggers joke loading when the button is clicked
- **JSON Parsing**: Converts the API response to JavaScript object and extracts the `value` property (the joke text)

### CSS Styling (`style.css`)

The stylesheet implements:
- **Dark Theme**: Dark background (#1f1f1f) with lime green text
- **Full-height Layout**: Container takes up 100% viewport height
- **Centered Content**: Text alignment and spacing optimizations
- **Button Styling**: Custom button with transparent background and lime green border
- **Image Positioning**: Absolute positioning for the Chuck Norris image
- **Monospace Font**: Terminal-like aesthetic with monospace font family

## 🔗 API Reference

### ChuckNorris.io API

**Endpoint**: `https://api.chucknorris.io/jokes/random`

**Method**: GET

**Response Format**:
```json
{
  "icon_url": "https://assets.chucknorris.host/img/avatar.png",
  "id": "...",
  "url": "https://api.chucknorris.io/jokes/...",
  "value": "Chuck Norris joke text here"
}
```

**Note**: The application extracts the `value` property which contains the actual joke text.

## 📝 Notes

- No authentication required for the ChuckNorris API
- The API is free and public to use
- Error handling logs errors to the browser console for debugging
- The application is fully client-side with no backend required

## 🐛 Known Issues / Future Improvements

- Error messages from failed API requests could be displayed to users instead of just console logging
- Could add a loading spinner while fetching jokes
- Could implement local joke caching to reduce API calls
- Could add ability to share jokes on social media

---

**Repository**: [obedyakpa0-dev/chuckNorris](https://github.com/obedyakpa0-dev/chuckNorris)  
**Created**: March 6, 2026  
**License**: Not specified
