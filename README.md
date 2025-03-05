# To-Do List

## Description
This is a To-Do List project developed with **React** and **TypeScript**, using **styled-components** for styling, **Redux** for state management, and **React Router DOM** for navigation between routes.

## Demo
Check out the project in action: https://to-do-list-eight-olive-95.vercel.app/

## Technologies Used
- **React** with **TypeScript**
- **Styled-components**
- **Redux** (for state management)
- **React Router DOM** (for page navigation)

## Features
- Add new tasks
- Remove tasks
- Edit existing tasks
- Search for tasks
- Filter tasks by status
- Mark tasks as completed
- Navigate between pages using React Router

## Project Structure
The development followed this order:
1. Initial project setup and package installation
2. Creation of the filter component
3. Parameterization of filters
4. Creation of the task card
5. Implementation of button state switching
6. Parameterization of task cards
7. Redux configuration for state management
8. Development of reducers for:
   - Removing tasks
   - Editing tasks
   - Searching for tasks
   - Filtering and displaying tasks
9. React Router DOM setup for routing
10. Implementation of task creation functionality
11. Marking tasks as completed

## Technical Differentiators
- Organized architecture using Redux for better state management
- Reusable and well-structured components
- Styled-components for better modularization of styles
- Smooth navigation between pages using React Router DOM
- Best practices for performance and React optimization

## Challenges and Solutions
During development, some challenges were encountered:
- **State Management**: Initially, using only `useState` to control tasks became complex. The solution was to implement Redux to centralize and better organize the state.
- **Dynamic Filtering**: The challenge was to keep filtering efficient and reactive to the global state. The solution was to use **Redux selectors** to optimize filters.
- **Modular Styling**: To avoid conflicting global styles, **Styled-components** were adopted, allowing encapsulated styling within each component.

## Next Steps
- Implement **user authentication**
- Create **dark/light mode**
- Improve **automated testing**
- Add **animations for better user experience**

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project folder:
   ```sh
   cd repository-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Contribution
If you want to contribute, feel free to open issues and pull requests!

