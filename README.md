A simple web application that allows users to input receipt data and generates downloadable PDFs using React for the frontend and Node.js/Express for the backend.

🎯 Features
1-Input customer name, receipt ID, and item prices.
2-Dynamically generate and download a PDF receipt.
3-Backend API generates PDFs on-the-fly using html-pdf.

🚀 Tech Stack
1-Frontend: React, Axios
2-Backend: Node.js, Express.js
3-PDF Generation: html-pdf, FileSaver.js
___________________________________________________________
🛠 Installation

Step 1: Clone the repository.
bash.
Copy code.
git clone https://github.com/HushamGad/Create-PDFs-With-Node-JS-and-React.
cd Create-PDFs-With-Node-JS-and-React.
OR download as ZIP files.
----------------------------------------------
Step 2: Install dependencies
In the root folder (for backend):
bash
Copy code
npm install
In the client folder (for frontend):
bash
Copy code
cd client
npm install
----------------------------------------------
Step 3: Run the project
Backend:
In the root folder, start the backend server:
bash
Copy code
npm start
Frontend:
In the client folder, start the React app:
bash
Copy code
npm run dev
___________________________________________________________
🔧 Usage

Go to http://localhost:3000/ in your browser.
Enter your details (name, receipt ID, prices, etc.).
Click "Download PDF" to get the receipt.
___________________________________________________________
🖥️ Backend API

POST /create-pdf: Accepts form data and generates a PDF.
Uses html-pdf to create the receipt from an HTML template.
___________________________________________________________
📂 Project Structure
.
├── client/           # React frontend
├── server.js         # Node.js Express backend
├── templates/        # HTML template for PDF generation
└── package.json
___________________________________________________________
🌟 Contributions
Feel free to fork this repo and make improvements! Open a PR for any enhancements or bug fixes.
