# Personal Profile Website

This project is a personal profile website designed to showcase an individual's biography, contact details, and projects. The website features a dark and transparent design with pink accents, providing a modern and visually appealing interface.

## Features

- **Biography Section**: Displays the user's full name, age, and a brief biography.
- **Contact Section**: Presents the user's contact details, including email and phone number.
- **Projects Section**: Lists the user's projects with titles, descriptions, and links.
- **Language Support**: Allows users to switch between Russian (primary language) and English.

## Project Structure

```
personal-profile-website
├── public
│   ├── index.html          # Main HTML document
│   └── profile.jpg        # Profile picture
├── src
│   ├── assets
│   │   └── styles.css     # CSS styles for the website
│   ├── components
│   │   ├── BiographySection.js  # Biography component
│   │   ├── ContactSection.js     # Contact details component
│   │   ├── LanguageSwitcher.js    # Language switcher component
│   │   ├── ProfilePicture.js      # Profile picture component
│   │   └── ProjectsSection.js     # Projects component
│   ├── i18n
│   │   ├── en.json          # English translations
│   │   └── ru.json          # Russian translations
│   └── main.js              # Entry point for the application
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the website.

## Technologies Used

- HTML
- CSS
- JavaScript
- React (for component-based architecture)
- i18next (for internationalization)

## License

This project is licensed under the MIT License.