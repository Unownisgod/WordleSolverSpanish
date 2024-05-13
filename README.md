# WordleSolverSpanish

WordleSolverSpanish is a web application that helps you solve the popular word game [Wordle](https://www.powerlanguage.co.uk/wordle/). The game is played by guessing a five-letter word, and after each guess, the game tells you how many letters match a correct word in the correct position and how many letters match a correct word in the wrong position.

This application provides a way to narrow down the possible words based on the hints provided by Wordle. It does this by allowing the user to input the letters that are in the correct position and the letters that are in the wrong position, and then provides a list of possible words that match those criteria.

## Installation

### Prerequisites

Before running the application, you need to have the following installed:

- Node.js
- Angular CLI

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WordleSolverSpanish.git
   ```
2.  Install the dependencies:

    CopyInsert

    ```bash
    cd WordleSolverSpanish npm install
    ```
3.  Start the application:

    CopyInsert in Terminal

    ```bash
    ng serve
    ```
    This will start the development server and the application will be accessible at `http://localhost:4200/`.

Usage
-----

Once the application is running, you can access it by opening a web browser and navigating to `http://localhost:4200/`.

To use the application, follow these steps:

1.  Enter the letters that are in the correct position in the input fields labeled "Letter 1" through "Letter 5".

2.  Enter the letters that are in the wrong position in the input fields labeled "Discovered Letter 1" through "Discovered Letter 5".

3.  Enter any unused letters in the "Unused Letters" input field.

4.  Click the "Search" button to see a list of possible words that match the criteria.

Contributing
------------

Contributions are welcome! If you find any issues or have any suggestions for improvements, please open an issue or submit a pull request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](http://127.0.0.1:53215/LICENSE) file for details.
