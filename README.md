# Midnight Index

Midnight Index is a modern community-driven keyboard comparison platform built for keyboard enthusiasts, gamers, typists, and creators.

The platform allows users to browse, search, compare, and review keyboards while providing a scalable architecture for future peripheral categories such as mice, headsets, microphones, monitors, controllers, webcams, and speakers.

---

## Vision

Create the ultimate community-driven peripheral comparison platform where users can:

- Discover products
- Compare specifications
- Read community reviews
- Contribute new products
- Make informed purchasing decisions

---

## Current Features

### Keyboard Catalog

- Browse keyboards
- View keyboard details
- Search keyboards
- Responsive UI

### Keyboard Comparison

- Select multiple keyboards
- Side-by-side comparison table
- Compare key specifications

### Backend API

- Spring Boot REST API
- PostgreSQL integration
- DTO-based architecture
- Entity-to-DTO mapping
- Global exception handling

### Error Handling

- Custom business exceptions
- Consistent API error responses
- Validation support
- Duplicate prevention

---

## Planned Features

### Authentication & Users

- User registration
- User login
- JWT authentication
- User profiles
- Role-based authorization

### Community Features

- Keyboard reviews
- Ratings
- Comments
- User keyboard submissions
- Moderation tools

### Additional Categories

- Mouse
- Headsets
- Microphones
- Monitors
- Controllers
- Webcams
- Speakers

---

## Tech Stack

### Frontend

- Angular 21
- TypeScript
- Angular Signals
- Angular Router
- HttpClient
- CSS

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Lombok
- Bean Validation

### Database

- PostgreSQL

### Development Tools

- Git
- GitHub
- Docker
- Postman

---

## Project Structure

### Frontend

```text
src/app
├── features
│   └── keyboard
│       ├── components
│       ├── models
│       ├── pages
│       └── services
│
├── shared
│   ├── component
│   └── services
│
├── app.routes.ts
├── app.config.ts
└── app.ts
```

### Backend

```text
src/main/java/com/midnightindex

├── controller
├── service
├── repository
├── entity
├── dto
├── mapper
├── exception
└── config
```

---

## Architecture Principles

### Frontend

- Feature-based architecture
- Reusable shared components
- Signals for state management
- Separation of UI and business logic

### Backend

- Layered architecture

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

- DTO separation
- Mapper pattern
- Global exception handling
- Business rule validation

---

## Development Setup

### Frontend

Install dependencies:

```bash
npm install
```

Run Angular:

```bash
ng serve
```

Application URL:

```text
http://localhost:4200
```

---

### Backend

Run Spring Boot:

```bash
./mvnw spring-boot:run
```

Application URL:

```text
http://localhost:8080
```

---

### Database

Example PostgreSQL configuration:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/midnight_index
    username: midnight
    password: midnight

  jpa:
    hibernate:
      ddl-auto: update
```

---

## API Endpoints

### Get All Keyboards

```http
GET /api/v1/keyboards
```

### Get Keyboard By Id

```http
GET /api/v1/keyboards/{id}
```

### Create Keyboard

```http
POST /api/v1/keyboards
```

---

## Product Rules

### Keyboard Reviews

Planned behavior:

- Users must be logged in to review
- One user can review a keyboard once
- Users may edit their review
- Users may delete their review
- Review history may be added in future versions

### Guest Access

Guests can:

- Browse keyboards
- Search keyboards
- Compare keyboards

Guests cannot:

- Leave reviews
- Submit keyboards
- Access user features

---

## Roadmap

### Phase 1 (Current)

- Keyboard catalog
- Search
- Comparison
- Keyboard details
- API foundation
- Exception handling

### Phase 2

- User authentication
- JWT security
- User profiles

### Phase 3

- Reviews and ratings
- Comments
- User submissions

### Phase 4

- Moderation tools
- Admin dashboard
- Additional peripheral categories

---

## Author

**Jhumar Regaspi**

Software Engineer

Creator of Midnight Index
