# Multi-Tenancy SaaS Backend (Project at MPC)

This is the backend for a **Multi-Tenancy SaaS (Software as a Service)** application. It provides APIs for managing tenants, tenant-specific data, and ensures data isolation and scalability using **MongoDB sharding** and **Redis caching**.

---

## Features

- **Tenant Management**:
  - Create, read, update, and delete tenants.
  - Isolate tenant data using `tenantId`.
- **Data Management**:
  - Store and retrieve tenant-specific data.
  - Ensure data isolation and security.
- **Scalability**:
  - Use **MongoDB sharding** to distribute tenant data across multiple shards.
  - Use **Redis caching** to improve performance for frequently accessed data.
- **Authentication**:
  - Secure APIs using **JWT (JSON Web Tokens)**.
- **Error Handling**:
  - Custom error classes for consistent error responses.
- **API Documentation**:
  - Documented using **Swagger**.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - Prisma (ORM)
  - MongoDB (Database)
  - Redis (Caching)
  - JWT (Authentication)
- **Tools**:
  - Swagger (API Documentation)
  - Docker (Containerization)
  - GitHub Actions (CI/CD)

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- Redis (v6 or higher)
- Docker (optional, for containerization)

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/multi-tenancy-saas-backend.git
   cd multi-tenancy-saas-backend




2.  **Install Dependencies**:
    ```bash
    npm install

3.  **Set Up Environment Variables**:
   Create a .env file in the root directory and add the following variables:
  ```env
DATABASE_URL="mongodb://<username>:<password>@<your-server-ip>:27017/tenant_db?authSource=admin"
REDIS_URL="redis://<username>:<password>@<host>:<port>"
JWT_SECRET="your_jwt_secret"
PORT=3000
```


4.  **Initialize Prisma**:

   Generate the Prisma Client:
  ```bash
        npx prisma generate
   ```

5. **Run the Application**:
    ```bash
    npm start

### Running with Docker

1. **Build the Docker Image**:
  ```bash
    docker build -t multi-tenancy-saas-backend .
```
2. **Run the Docker Container**:
    ```bash
    docker run -p 3000:3000 multi-tenancy-saas-backend
    ```

### API Documentation

The API is documented using Swagger. After starting the application, you can access the API documentation at:
```bash
http://localhost:3000/api-docs
```

### API Endpoints
**Tenant Management**

**Endpoint	   Method	     Description**
```
`/api/tenants`	`POST`	`Create a new tenant.`
`/api/tenants`	 `GET	`  `Get a list of all tenants.`
`/api/tenants/:id` `GET`	 `Get details of a specific tenant.`
`/api/tenants/:id` `PUT`	  `Update a specific tenant.`
`/api/tenants/:id` `DELETE` `Delete a specific tenant.`
```


### Data Management
**Endpoint**	**Method**	**Description**
```
`/api/data`	`POST`	`Create new tenant-specific data.`
`/api/data`	`GET`	`Get all data for the current tenant.`
`/api/data/:id`	`GET`	`Get specific data by ID.`
`/api/data/:id`	`PUT	Update specific data by ID.`
`/api/data/:id`	`DELETE	Delete specific data by ID.`

```


### Contributing

Contributions are welcome! Follow these steps to contribute:

  1. Fork the repository.

  2.  Create a new branch:
    ```bash

    git checkout -b feature/your-feature-name

 3.   Commit your changes:
    ```bash

    git commit -m "Add your feature"

  4.  Push to the branch:
    ```bash

    git push origin feature/your-feature-name

  5. Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

    Prisma for simplifying database interactions.

    Redis for providing a fast and reliable caching solution.

    MongoDB for scalable and flexible data storage.
### Contact

