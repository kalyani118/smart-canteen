🍽️ Smart Canteen

A modern **Smart Canteen Pre-Order System** designed to help students order food online, avoid long queues, and collect their meals using a digital token.

This project is built as a web-based prototype with separate student and admin features.

---

🚀 Features

👨‍🎓 Student Features

- 🏠 Modern Smart Canteen home page
- 🍔 Browse the complete food menu
- 🔎 Filter food by category
  - Breakfast
  - Lunch
  - Snacks
  - Drinks
- 🛒 Add food items to cart
- ➕ Increase or decrease food quantity
- 💰 Automatic price calculation
- 🧾 Checkout and order summary
- 💳 Demo UPI payment
- 🎟️ Automatic digital token generation
- 📦 View previous orders
- 📍 Track order status
- 🔔 Order status updates
- 👤 Student login
- 📱 Responsive design for mobile and desktop

---

👨‍💼 Admin Features

The admin dashboard allows canteen staff to manage the canteen efficiently.

- 📊 Dashboard statistics
- 🍔 Add new food items
- 🖼️ Add food images
- 💵 Set food prices
- 🗂️ Assign food categories
- ✏️ Manage food menu
- 🗑️ Delete food items
- 📦 View customer orders
- 🔄 Update order status
- ⏳ Track pending orders
- 👨‍🍳 Manage preparing orders
- ✅ Manage ready orders
- 💰 View order/revenue information

---
 🎟️ Order Flow

```text
Student
   ↓
Login
   ↓
Browse Menu
   ↓
Add Food to Cart
   ↓
Checkout
   ↓
Demo UPI Payment
   ↓
Payment Successful
   ↓
Digital Token Generated
   ↓
Order Placed
   ↓
Admin Receives Order
   ↓
Order Preparing
   ↓
Order Ready
   ↓
Student Collects Food
💳 Payment
This project currently uses a demo UPI payment flow for prototype/hackathon purposes.
No real money is transferred.
The demo flow simulates:
Select UPI
     ↓
Demo Payment
     ↓
Payment Successful
     ↓
Order marked as PAID
     ↓
Token Generated
A real payment gateway such as Razorpay, Cashfree, or another provider can be integrated in the future.
🛠️ Technologies Used
Frontend
HTML5
CSS3
JavaScript
Bootstrap 5
Bootstrap Icons
Storage
Browser LocalStorage
LocalStorage is currently used to store:
canteenFoodItems
canteenCart
canteenOrders
currentUser
login information
Development Tools
Visual Studio Code
Git
GitHub
📁 Project Structure
smart-canteen/
│
├── index.html
├── menu.html
├── cart.html
├── checkout.html
├── orders.html
├── track-order.html
├── admin.html
├── login.html
├── about.html
│
├── css/
│   └── style.css
│
└── README.md
📄 Main Pages
Page
Description
index.html
Smart Canteen home page
menu.html
Food menu and categories
cart.html
Shopping cart
checkout.html
Checkout and demo payment
orders.html
Student order history
track-order.html
Track current order
login.html
Student/Admin login
admin.html
Admin dashboard
about.html
About Smart Canteen
🎨 User Interface
The application uses a clean white and orange design with:
Rounded cards
Modern navigation bar
Food cards
Responsive layouts
Bootstrap components
Mobile-friendly interface
Simple and easy navigation
🧑‍💻 How to Run
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/smart-canteen.git
2. Open the project
Open the project folder in VS Code.
3. Run the website
You can use the Live Server extension in VS Code.
Right-click:
index.html
and select:
Open with Live Server
The application will open in your browser.
🔐 Login
The project contains separate roles:
Student
Students can:
Browse food
Add items to cart
Place orders
Make demo payments
Track orders
Admin
Admin can:
Add food
Delete food
View orders
Update order status
Manage the canteen menu
Note: This is a frontend prototype. Authentication is not connected to a production database or secure authentication server.
📦 Order Status
Orders move through the following stages:
ORDER PLACED
      ↓
ACCEPTED
      ↓
PREPARING
      ↓
READY
      ↓
COMPLETED
Students can see the current status from the order tracking page.
💡 Problem Statement
College canteens often have:
Long queues during breaks
Slow manual ordering
Difficulty managing large numbers of orders
Confusion around order collection
Delays in food preparation
Smart Canteen addresses these problems by allowing students to pre-order food digitally.
💡 Solution
Smart Canteen provides a simple digital ordering system where students can:
Browse the menu.
Select food.
Add items to their cart.
Place an order.
Complete demo payment.
Receive a digital token.
Track their order.
Collect the food when it is ready.
This reduces queue time and improves canteen order management.
🌟 Future Improvements
The project can be extended with:
🔐 Real secure authentication
🗄️ MySQL/MongoDB database
💳 Real UPI payment gateway
📧 Email notifications
📱 SMS notifications
🔔 Push notifications
📊 Advanced admin analytics
💰 Profit and expense management
📈 Sales charts
👨‍🍳 Kitchen display system
🧾 Digital receipts
⭐ Food ratings and reviews
📍 Real-time order tracking
☁️ Cloud deployment
🔒 Security Note
This project is currently a prototype/hackathon project.
It uses browser LocalStorage for demonstration purposes and should not be used as-is for handling real payments, passwords, or sensitive user information in production.
For a production system, use:
Secure backend authentication
Database storage
Password hashing
HTTPS
Server-side authorization
Secure payment verification
Environment variables for secrets
🎯 Project Goal
The goal of Smart Canteen is to make college canteen ordering:
Faster • Smarter • Easier • More Convenient
👥 Project
Smart Canteen – Pre-Order System
Built as a web-based prototype for demonstrating a modern digital canteen ordering experience.
📜 License
This project is created for educational and prototype purposes.
You are free to modify and improve it for learning and demonstration.
