project-root/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   ├── Client.js
│   │   │   ├── Order.js
│   │   │   └── Invoice.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── client.routes.js
│   │   │   ├── order.routes.js
│   │   │   └── invoice.routes.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── client.controller.js
│   │   │   ├── order.controller.js
│   │   │   └── invoice.controller.js
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── order.service.js
│   │   │   └── invoice.service.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validation.middleware.js
│   │   │
│   │   ├── validators/
│   │   │   ├── auth.validator.js
│   │   │   ├── product.validator.js
│   │   │   └── order.validator.js
│   │   │
│   │   └── utils/
│   │       ├── jwt.js
│   │       ├── logger.js
│   │       └── apiResponse.js
│   │
│   └── package.json
│
│
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   │
│   │   ├── api/
│   │   │   ├── axios.js
│   │   │   ├── auth.api.js
│   │   │   ├── product.api.js
│   │   │   └── order.api.js
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Button.jsx
│   │   │   │
│   │   │   ├── product/
│   │   │   ├── order/
│   │   │   └── client/
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Clients.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useProducts.js
│   │   │   └── useOrders.js
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── formatDate.js
│   │   │   └── constants.js
│   │   │
│   │   └── assets/
│   │
│   └── package.json
│
└── README.md