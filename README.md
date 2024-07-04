# PMP Exam Prep Quiz

## Description

This project is a full-stack web-based quiz application designed to help aspiring Project Management Professionals (PMP) prepare for their certification exam. It provides a series of multiple-choice questions across various project management topics, allowing users to test their knowledge and practice for the PMP exam.

### Features

- Multiple question groups to cover different aspects of project management
- Randomized question order for varied practice sessions
- Immediate feedback on correct and incorrect answers
- Score calculation and display at the end of each quiz
- Option to restart the quiz and try again

## Installation

### Clone the repository:

```bash
git clone https://github.com/mansouriyassine/PMP-EXAM-PREZ.git
cd PMP-EXAM-PREZ
```

### Install dependencies:

For the client (front-end):

```bash
cd assets
# If using npm
npm install
# If using yarn
yarn install
```

For the server (back-end):

```bash
cd server
npm install
```

### Set up MongoDB:

1. Install MongoDB locally or use a cloud-based MongoDB service.
2. Create a `.env` file in the `server` directory and add your MongoDB connection URI:

```
MONGO_URI=your_mongo_uri_here
```

## Usage

Start the server:

```bash
cd server
npm start
```

Start the client:

```bash
cd assets
# If using npm
npm start
# If using yarn
yarn start
```

Open a web browser and go to:

```
http://localhost:1234 (or whatever port your client is running on)
```

You will see the main page with different question groups. Click on a group to start the quiz. Answer the questions by clicking on your chosen option. You will receive immediate feedback on whether your answer is correct or incorrect. After completing all questions in a group, you will see your final score. You can restart the quiz or go back to the main page to select a different question group.

## Project Structure

* **assets/**: Contains the front-end code
   * **css/**: CSS styles for the application
   * **js/**: JavaScript files for quiz and results logic
* **server/**: Contains the back-end code
   * **config/**: Configuration files, including MongoDB setup (`db.js`)
   * **controllers/**: Controllers handling API logic (`questionController.js`, `resultController.js`)
   * **models/**: Database models (`questionModel.js`, `resultModel.js`)
   * **routes/**: API routes (`questionRoutes.js`, `resultRoutes.js`)
* **data/**: Directory containing JSON files with quiz questions
* **index.html**: Main HTML file with links to different question groups
* **quiz.html**: HTML file for displaying and taking the quiz
* **results.html**: HTML file for displaying quiz results
* **package.json**: Package configuration files for both client and server

## Contributing

Contributions to improve the quiz or add more questions are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

* PMP is a registered mark of the Project Management Institute, Inc.
* Questions are based on the PMP Examination Content Outline
* Thanks to all contributors who have helped to create and improve this project

## Contact

Project Link: https://github.com/mansouriyassine/PMP-EXAM-PREZ