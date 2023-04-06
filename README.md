<!-- PROJECT LOGO -->

# Tavern

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->

## About The Project
People with no experience or less experience usually have trouble and confusion getting understanding about how to find a job and which company should be looked for. Specifically, activities like giving mock interviews, reviewing resumes or sharing interview experience will be extremely valuable but hard to access sometimes, especially discuss with people with similar background.

### Project Demo for iteration 5

Website URL: http://34.138.203.60:8080



Demo files can be found here: [Tavern - Google Drive](https://drive.google.com/drive/folders/1GVTHqZOHVpu_NVTXUooI9nKQFiDilq3i)

#### Main Page

![main_page](https://drive.google.com/uc?export=view&id=1F8-WeMsbNBimqvuettoB4djv_D5Th8Vd)

#### User Page

* Login in using email and password
* A test account is provided
  * Email: p@test.com
  * Password: password


![user_page](https://drive.google.com/uc?export=view&id=1T8dolXIJl7sbNkXMJDLdKcAJqEVLS5gE)

#### Admin Page

* Login in using email and password
* A test account is provided
  * Email: a@test.com
  * Password: password

![admin_page](https://drive.google.com/uc?export=view&id=19OnT0nhXeTRbhkOYyolaj3FcmEJiDX9o)

### Work of Iteration 5

* Frontend implementation
* User registration
* Leave a comment on the post

### Built With

* MySQL
* Spring Boot
* React
* Docker

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

* Docker
* Docker compose

### Deploy on Local Machine

* Visit `.env` file in `./src/frontend/` folder
  * Change `REACT_APP_BACKEND_URL` from `http://34.138.203.60:8080/api` to `http://localhost:8080/api`

* Go to `./src` folder
* Run `docker compose up --build`
  * Load balancing through Nginx is also supported, if you want to start multiple instances of frontend and backend servers, run the following code:
  * Eg. `docker compose up --build --scale frontend=3 --scale backend=3`

* The app will be deployed to `http://localhost:8080`

<!-- ROADMAP -->

## Roadmap

### Backend

- [x] Support simple login
- [x] Support group in two matching
- [x] Support Post
- [x] Support Comment
- [x] Support Company
- [x] Support Multiple people matching
- [x] Support Match pool
- [x] Support Team
- [x] Support Company review approve
- [x] Support Meeting

### Frontend

- [x] Main page
- [x] User login page
- [x] User information page
- [x] Post board page
- [x] Company board page
- [x] Team matching page
- [x] Team page
- [x] Admin page
- [x] Meeting schedule page
- [x] Add layout template

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request\

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

