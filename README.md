# Budget Tracker

A web application that helps users manage their finances by tracking income and expenses. Users can add, edit, and delete budget entries, categorize their expenses, and view summaries to better understand their spending habits.

## Features

- User authentication (register and login)
- Add, edit, and delete budget entries
- Categorize expenses (e.g., food, transport, entertainment)
- View monthly and yearly summaries
- Responsive design for mobile and desktop
- Secure user data storage

## Technologies Used

- **Frontend**: 
  - React
  - React Router
  - Axios for API calls
  - CSS (or Bootstrap/Tailwind for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
  - JSON Web Tokens (JWT) for authentication

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (for local development) or a MongoDB Atlas account (for cloud database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/budget-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd budget-tracker
   ```

3. Set up the backend:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file in the backend directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

   - Start the server:
     ```bash
     node server.js
     ```

4. Set up the frontend:

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Start the React application:
     ```bash
     npm start
     ```

### Usage

- Register a new account or log in with existing credentials.
- Add your income and expenses, categorizing them as needed.
- View your budget summary to track your financial health.

### Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/budget-tracker](https://github.com/yourusername/budget-tracker)
