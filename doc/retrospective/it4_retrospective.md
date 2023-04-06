In iteration 4, we focused on deployment and frontend polishing as most of the backend work is done in the previous iterations. These 
works so hard and trivial that they took lots of our time on testing and debugging.

In this iteration, we fixed some edge cases of our matching system and improved the performance of our matching algorithm as well. 
We located some minor bugs, and they will be fixed during next iteration. 

Two of us put lots of our efforts on the deployment of our project. We dockerized the MySQL database, backend server, frontend 
server and Nginx, and we used Docker Compose to manage this multi-container application.
We utilized Nginx to support load balancing across multiple instances of backend and frontend servers.
We also deployed the app on Google Cloud and provided access through a public IPv4 address.

Frontend is polished by using Bootstrap template, among which we added more interactive transition animation and colors 
to make the UI more user-friendly and fancy. Frontend polishing is mainly made in navigation bar, company list, meeting , 
personal, and authentication modules. Besides, we fixed some functionalities of new company requests for both participants 
and admin. The functionalities are more logical and reasonable now. Company List page is more informative and has links to 
the about page of the companies. For personal and team module, we combined them to a more cohesive personal page, which 
makes it more convenient for participants to find important information and functionalities.

In the next iteration, improvement of matching algorithm will be implemented. We will keep improving our matching algorithm
and make the matching process more reasonable for the admin by setting automatic work by the application. Besides, reasonable login system will be updated.
For deployment, we may use kubernetes to improve the scalability and robustness of the app. Additionally, more works on frontend UI design will be done.  