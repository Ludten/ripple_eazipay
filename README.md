# Two-Service GraphQL and MongoDB Repository

This repository contains two services: a basic GraphQL backend service and a service for managing MongoDB schema models and GraphQL type definitions updates.

## Table of Contents

- [Overview](#overview)
- [Services](#services)
  - [Basic GraphQL Backend Service](#basic-graphql-backend-service)
  - [Schema and Models Update Service](#schema-and-models-update-service)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Schema and Models Updates](#schema-and-models-updates)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository houses two services that work together to provide a GraphQL API and maintain MongoDB schema models and GraphQL type definitions. The services are designed to be modular and can be deployed independently or together as part of a larger application.

## Services

### Basic GraphQL Backend Service

The `simple_graphql` service is a minimalistic GraphQL backend that provides the following features:

- GraphQL API for executing queries and mutations.
- User authentication endpoints (Signup and Login) using JSON Web Tokens (JWT).
- Protected routes that require valid JWT tokens for access.

### Schema and Models Update Service

The `schema-and-models` service is responsible for managing MongoDB schema models and GraphQL type definitions updates. It offers the following capabilities:

- Management of GraphQL type definitions to ensure schema consistency.
- Maintenance of MongoDB schema models using the Mongoose library.
- Integration with your development workflow to automatically update GraphQL types and models on deployment.

## Getting Started

Follow these steps to set up and run the services locally.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js and npm
- MongoDB (running locally or accessible)
- Git (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ludten/ripple_eazipay.git

   cd ripple_eazipay

   cd simple_graphql

   npm install

   cd ../simple_mongo

   npm install

 ### Usage
     Detailed usage instructions for each service can be found in their respective directories (basic-graphql-backend and schema-and-models). Refer to their individual README files for more information.

### Authentication
    The basic-graphql-backend service provides user authentication using JWT tokens. See its README for details on how to authenticate users and access protected routes.

### Schema and Models Updates
    The schema-and-models service manages GraphQL type definitions and MongoDB schema models. Ensure that it's integrated into your deployment workflow to keep your GraphQL API up-to-date.

### Deployment
    Instructions for deploying each service depend on your specific hosting environment. Ensure you configure deployment scripts and environment variables as needed for production deployment.

### Contributing
    We welcome contributions to this repository. To contribute, please follow these guidelines:
      Fork the repository and create a new branch.
      Make your changes and submit a pull request.
      Follow the project's coding standards and conventions.
      
### License
    This project is licensed under the MIT License
   

