# API-project
# Anonymous Confession Website

This is a simple web application that allows users to send anonymous confessions to their loved ones and retrieve confessions sent to them based on their roll number. The application uses HTML, CSS, and JavaScript to create a user-friendly interface and interacts with a backend API to handle the confessions.

## Features

- **Submit Confession**: Users can enter their roll number and confession, and submit it anonymously.
- **Get Confession**: Users can retrieve confessions sent to their roll number.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Handling user interactions and making API requests.

## How to Run the Project

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/anonymous-confession.git
    cd anonymous-confession
    ```

2. **Open the Project**
    Open `index.html` in your preferred web browser.

## Project Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `style.css`: The CSS file containing styles for the web application.
- `script.js`: The JavaScript file containing the logic for interacting with the API.

## API Endpoints

### Add Confession
- **URL**: `/api/postConfession`
- **Method**: `POST`
- **Request Body**:
  - `roll_no` (string): The roll number of the person you want to send the confession.
  - `confession` (string): The confession text submitted by the user.
- **Response**: A JSON object containing the roll number, confession, and a unique identifier for the confession entry.

### Get Confession
- **URL**: `/api/getConfession`
- **Method**: `GET`
- **Query Parameter**: 
  - `roll_no` (string): The roll number for which the confession is requested.
- **Response**: A JSON array containing the confessions related to the provided roll number.

## Usage

1. **Submit a Confession**
   - Enter your roll number in the "Roll Number" input box.
   - Enter your confession in the "Confession" textarea.
   - Click the "Submit Confession" button.
   - A message will be displayed indicating whether the confession was posted successfully or if there was an error.

2. **Get a Confession**
   - Enter your roll number in the "Roll Number" input box.
   - Click the "Get Confession" button.
   - The confession sent to your roll number will be displayed if found, otherwise a message indicating no confessions found will be shown.



.

## Acknowledgements

- Special thanks to the creators of the backend API used in this project.
- Also special thanks to RISHIKESH SIR and AKASH SIR for thier help in making this project work
