# eKart Frontend

Customer-facing ecommerce frontend for browsing products, managing carts, and placing orders in the eKart platform.

---

## Live Demo

- **Frontend:** https://ekart-frontend.pages.dev/
- **System Overview & Credentials:** https://ekart-system.pages.dev/ (Contains project info, GitHub links for all eKart services, and credential-loaded URLs for easy testing)

---

## Related Repositories

- [eKart Admin Panel](https://github.com/sn0914r/ekart-admin-dashboard)
- [eKart Backend](https://github.com/sn0914r/ekart-backend)
- [Payment Orchestration Engine](https://github.com/sn0914r/payment-orchestration-engine)
- [Email Worker Service](https://github.com/sn0914r/email-worker-service)
- [eKart System](https://github.com/sn0914r/eKart-system)

---

## Features

- Product browsing, search, filtering, and sorting
- Product details with image gallery and variant selection
- Cart and wishlist management
- Checkout with Razorpay and Cashfree payment integration
- Shipping address management
- User authentication and protected routes
- Order history and tracking
- Responsive UI

---

## Tech Stack

| Category                         | Technology                               |
| -------------------------------- | ---------------------------------------- |
| Frontend                         | React, Vite, React Router                |
| State Management & Data Fetching | Zustand, TanStack Query                  |
| Forms & Validation               | React Hook Form, Zod                     |
| UI & Styling                     | Emotion, Bootstrap, Lucide React, Sonner |

---

## Folder Structure

```txt
src/
├── app/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   ├── AppRouter.jsx
│   ├── Providers.jsx
│   ├── Router.jsx
│   └── main.css
│
├── assets/
│
├── constants/
│
├── features/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── order/
│   ├── product/
│   └── wishlist/
│
├── lib/
│   ├── apiClient.js
│   └── reactQuery.js
│
├── shared/
│   ├── Footer/
│   ├── components/
│   └── hooks/
│
├── utils/
│
└── main.jsx
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=
VITE_NODE_ENV=
```

---

## Installation

```bash
git clone https://github.com/sn0914r/ekart-frontend.git

cd ekart-frontend

npm install

npm run dev
```

---

## Screenshots

### Home Page

![Home](./screenshots/home.png)

### Product Details

![Product Details](./screenshots/product-details.webp)

### Shopping Cart

![Cart](./screenshots/cart.webp)

### Payment Gateway

![Payment Gateway](./screenshots/payment.png)

### Orders

![Orders](./screenshots/orders.webp)

---

## Security

- JWT authentication
- Protected routes
- Persistent authentication state
- Centralized API client with authenticated requests
- Automatic token refresh handling
