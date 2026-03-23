# AI Travel Planner

## Project Overview

AI Travel Planner is a full-stack web application that generates personalized travel itineraries using an AI agent. Users provide trip details such as destination, number of days, budget preference, and interests. Based on this information, the system generates a structured day-by-day travel plan, estimated trip budget, and recommended hotels.

The application supports multiple users with secure authentication and ensures that each user can only access their own trip data.

The goal of the project is to demonstrate how AI agents can assist in trip planning by automatically generating useful travel information in seconds.

---

## Chosen Tech Stack

Frontend
Next.js
Tailwind CSS

Backend
Node.js
Express.js

Database
MongoDB

AI Integration
OpenAI API

### Why this stack was chosen

Next.js provides a fast and scalable framework for building modern React applications. Tailwind CSS enables quick UI development with responsive design. Node.js with Express provides a lightweight and flexible backend for API development. MongoDB was selected for its flexibility in storing dynamic trip data. OpenAI API was used to generate intelligent travel itineraries using an LLM.

---

## Setup Instructions

### Backend Setup

Navigate to the backend folder

cd backend

Install dependencies

npm install

Create a `.env` file and add the following variables

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key

Run the backend server

npm start

---

### Frontend Setup

Navigate to frontend folder

cd frontend

Install dependencies

npm install

Start development server

npm run dev

Open the application in browser

http://localhost:3000

---

## Deployment

Frontend deployed using Vercel
Backend deployed using Render
Database hosted on MongoDB Atlas

Deployment allows the application to be accessed publicly without running it locally.

---

## High-Level Architecture

The application follows a client-server architecture.

Frontend (Next.js)
Handles user interface, forms, and displaying generated itineraries.

Backend (Node.js + Express)
Handles API requests, authentication, and communication with the AI service.

Database (MongoDB)
Stores user accounts and trip data.

AI Ser
