In iteration3, there are no changes in our requirement specifications and UML class diagram. 

In the authentication module, we have already supported user login as two characters, participant and admin. So, 
the website can show three versions of the main page and its functionalities for each kind of user. In this iteration, 
user type separation and user session transportation were completed in frontend. In this way, 
functions of admins' management of companies and posts were finished. Personal pages for participants are created.

Besides, we developed team info page for single team, team matching registration page for participants and team list 
page for admin management. Also, related CRUD functions of Team entity are developed in backend. Now if a participant 
have already been in a team, he/she can view team info in the corresponding page; otherwise, he/she can choose a 
matching pool of a specific team size (now 2-4) to register for team matching. Furthermore, an admin has the privilege
to view all teams that have been created in the team page for admins and does management.

For development of meeting, we divide meeting into individual and group meetings and support CRUD functionalities for 
them separately. For the related schedule module, the admin and participant play different roles in this part. Admin 
can view all the meetings and their information, and they can delete or unscheduled the meeting if it is necessary. 
What’s more, admins can create a meeting in their names and detail the information of the meeting like the location, 
schedule time, and meeting type. On the participant side, it basically divides into two pages. One is for them to 
view all their unregistered meetings, and they will be able to register for them in a group or as an individual. 
Another one is for them to all their scheduled meetings including group ones and individuals.

Additionally, we modified our matching system to support team matching in different team sizes, and also handled 
some corner cases.

For iteration 4, we will focus on frontend work. As we mainly put efforts on realizing functionalities of our projects 
in previous iterations, our web pages are simple and boring. Hence, we need to polish our frontend pages by taking
advantage of css templates to make our website attractive and impressive. Besides, we may modify some functionalities 
like application of adding companies, company details presentation and so on. We will try to improve our matching 
algorithm and provide more functions with matching module as well. Additionally, deployment will be done in this 
iteration, along with usage of some external apis.

