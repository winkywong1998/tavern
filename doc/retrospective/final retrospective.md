# Final retrospective


## In general, we finished most of the features we planned in the first place. 


1. User management

We implemented a user management system with regular users and admin users. The admin user has more permission to edit. We support registration and login but not updating user info(the backend has finished, but we don’t have enough time to build the front end for this functionality). We also have a fancy personal info page, on which users can check their user information, teams’ information, and history posts. If a user has not got a team yet, he/she can register for matching for a team of the chosen size on the personal info page as well.


2. Post

We implemented a post board module that allowed users to make posts and view the posts created by other participants. The participant can also leave comments on the post and either like or unlike others’ comments. This comment part is something we found very important in around iteration 3 and wasn’t in our original plan.


3. Matching

We implemented a matching system based on the K-means algorithm and the Hungarian algorithm. We also support a pool system in that we put all the unpair participants together by the size of the group they would like to join.


4. Company

We implemented a company list that allows the user to view accumulated information for a company and also allows participants to submit a new company that is not in the database which will be published after being reviewed by the admin. The participant can access all the posts related to certain companies as well in the company detail page. Participants can also view the rating of the company and rate it.


5. Meeting

We implemented a meeting schedule module that allows the admin to schedule a meeting.
There is a meeting board that displays all the available meetings the user can participate in. User himself can join in an individual meeting and also a team meeting with his team member.


6. Frontend design

In the frontend part, we used bootstrap framework mainly to organize the user interface. Besides, the style of Bootswatch called Lumen is used and several components from Material UI are applied. All of those packages help us to build a relatively fancy and user-friendly UI. For the whole style, the Tavern website uses blue as the base color which creates a warm feeling and lets the user feel comfortable. Also, smooth transition between functions and pages brings a good user experience.


## Challenge:


1. Deployment:

To make the deployment easy to manage, we dockerized our backend server, frontend server. We used a pre-built MySQL image to manage the database. Also, we used Nginx to support load balancing. At first, we tried to deploy our app in AWS, but we found that the performance of the free machine provided by AWS cannot meet our expectations. While GCP provides some free credits to each user, we migrated the app from AWS to GCP. To allow external network access, we opened necessary port in our GCP server.


2. Tech Stack:

We are a very diverse team, some of us focus on the backend, and some focus on the backend before taking this course. Even if we all have some basic knowledge it’s far from enough for this project. We all learn new tools and languages in a very short period of time.


3. Matching:

We have to learn and research certain algorithms that are suitable for the matching requirement. It’s very challenging to understand algorithms and implement them, especially the Hungarian algorithm, it still needs improvement.


## How would you do it again if you could go back in time and start at iteration 1?


We will pay more attention to Entity. we might want to use more Data transfer objects before it links to many mappers and becomes harder and harder to be modified. Furthermore, we will put more efforts on well organize our Apis and write comments in time. Hence, we may not need to waste time on refactoring. 


We will manage the code style of the frontend since there are several styles of code writing in React like class components and functional components. Functional components and the standard of React 18 will be our first choice if we write the project in the first place. Besides, how to manage the packages and css files will be another concern so that the structure of the frontend code will be more clear and easy to modify in the future.