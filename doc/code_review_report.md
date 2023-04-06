**Design: Is the code well-designed and appropriate for your system? Think of all design principles and patterns that you've studied in this course. You may need to refactor the code.**

Backend:

I believe the code is well-designed and appropriate since the it’s essentially web app development. Benefit by well developed Springboot platform we are able to follow a Model-View-Controller design pattern. As a result, the structure doesn’t need a huge refactor from the perspective of general structure.

Frontend:

The code structure matches the structure officially defined by React. We used a mix of react function and react class component to achieve the best performance. We haved refactored parts of the code to improve the code smells. We are using functional component style in the frontend as recommended by the official instead of component skeleton. 

**Complexity: Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future?**

Backend:

We have been trying to simplify all our code through out the whole process, we review the previous iteration and had meeting for figuring out how to make our code concise and readable. Xuanwei Wang has reviewed and done some refactoring with comments for backend code to make the more readable.

Frontend:

Frontend codes are complicated as there are a great number of different components on each page, especially the style parts. Shaohua Shen has reviewed and put some complicated style codes into .css files to simplify frontend codes for pages. Chang Li has extracted some reusable components into separate .js files (e.g. the Pagination component) to improve readability of the code. In addition to jsx code, he also used .css files to store the page layout and some complicated animation effect. We also used React-Redux to manage data from Redux store and using store to dispense actions globally to update data. It is a easier way to manage query from API and make the actions reusable. 

**Tests: Does the code have correct and well-designed automated tests?**

Backend:

No we do not have well-designed automated tests yet, we test manually for now and put all our effort on development.

Frontend:

Since the functionalities of frontend component are exactly the same as what we see in the browser, we test through the direct effects on frontend pages, and data interactions are tested manually.

**Naming: Did the developer choose clear names for variables, classes, methods, etc.?**

Backend:

Xuanwei Wang has refactored the whole backend part to make sure the naming of the method are concise and add useful comments for better explanation of the complicated logic for some of the code.We also established a pattern on naming.

Frontend:

In frontend codes, there are many variables that need standard naming for convenient use. We had some errors and warnings on account of inappropriate naming of variables before. Shaohua Shen reviewed frontend code and refactored the incorrect parts.

**Comments: Are the comments clear and useful?**

Yes they are.

**Style: Does the code follow good programming practices?**

Yes.

**Documentation: Is there a documentation on how to install and run the application?**

Yes, we include the procedure of running our project locally. Or just visit the URL we posted to visit the website using a web browser.
