# Multi-Tenancy SaaS Backend

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
