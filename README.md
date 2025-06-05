[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19703052&assignment_repo_type=AssignmentRepo)
# Express.js Products API

## 📦 Features
- Full CRUD operations for products
- Middleware: Logging, Authentication, Validation
- Custom Error Handling
- Filtering, Pagination, Search, and Stats endpoints

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file based on `.env.example`
```env
PORT=3000
API_KEY=your_api_key_here
```

### Run Server
```bash
node server.js
```

## 📚 API Endpoints

### Base URL: `/api/products`

#### GET `/`
- List all products
- Supports `category`, `page`, and `limit` query parameters

#### GET `/:id`
- Get a product by ID

#### POST `/`
- Create a new product
- Requires API key and JSON body:
```json
{
  "name": "Item",
  "description": "Details",
  "price": 100,
  "category": "Category",
  "inStock": true
}
```

#### PUT `/:id`
- Update a product

#### DELETE `/:id`
- Delete a product

#### GET `/search?q=term`
- Search products by name

#### GET `/stats`
- Get product count by category

## 🔐 Authentication
Use `x-api-key` header with each request.
```http
x-api-key: your_api_key_here
```

## 🧪 Testing
Use Postman, Insomnia, or curl:
```bash
curl http://localhost:3000/api/products -H "x-api-key: your_api_key_here"
## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 