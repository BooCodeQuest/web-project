# Tech Blog

## Overview

The Tech Blog is a dynamic web application designed for tech enthusiasts and bloggers. It's built with React and integrated with Strapi, a headless CMS. This setup provides a seamless experience for both readers and writers, allowing users to browse various blog posts on the homepage and delve into detailed content on individual blog pages. The application utilizes React for the frontend and Strapi for backend content management via a REST API.

## Features

- **Dynamic Content Loading**: Dynamically loads blog content from Strapi, ensuring the content is up-to-date.
- **React Router Integration**: Uses `react-router-dom` for seamless navigation without full page reloads.
- **Error and Loading States**: Handles loading and error states for a better user experience.
- **Strapi Backend**: Manages blog content through Strapi, offering an easy interface for CRUD operations on blog posts.

## Getting Started

### Prerequisites

- Access to a Strapi backend (configured to serve blog content at `http://localhost:1337/api/blogs?populate=*`).

### Installation

1. **Clone the Repository**

git clone <repository-url>


2. **Install Dependencies**

Navigate to the project directory and install the required dependencies:

cd <project-directory>
npm install


3. **Configure Strapi Endpoint**

Ensure your Strapi backend is running and properly configured.

4. **Run the Application**

npm start

The application will be available at `http://localhost:3000`.

## Usage

Navigate through the homepage to browse blogs, and click on any blog post to read its content in detail.

