# How to run this code:

## Prepare your database:
1. Run tavern.sql in your databse.

2. Config your database connection
Go to team-givemeoffer\src\BackEnd\src\main\resources\application.yml file and config line #7 and line #8 which is username and password of your database.

# API path list:
## Post Board:
root:http://localhost:80/board
1. POST: /save

    POST request with request body of filed and value. If the id doesn't exist add the post to the database else, update the content with the id, company can be null

    Request body sample:
    ```json
    {
    "title": "Amazon interview experience",
    "content": "It' amazing!"
    }
   ```
   or
   ```json
   {
   "title": "Expedia is fine",
   "content": "kasdfkaj",
   "company": {
   "id": 4
   }
   }
   ```
2. GET: /

    Get all the post in the database

    Return sample:
    ```json
    [
    {
        "id": 1,
        "title": "Amazon is fine",
        "content": "kasdfkaj",
        "time": "2022-10-10 17:21:26",
        "company": {
            "id": 3,
            "name": "Amazon",
            "score": 5.0,
            "num_review": 1,
            "num_post": 3,
            "time_latest_post": "2022-10-12 18:51:09",
            "logo_url": null
        }
    },
    {
        "id": 4,
        "title": "Riot is fine",
        "content": "sadasda",
        "time": "2022-10-10 18:44:31",
        "company": null
    }
    ]
   ```
   
3. GET: /page
   
   Params: pageNum, pageSize
   Get posts for current pageNum and pageSize, pageNum is the number of page,
   pageSize limits the number of posts to be shown on one page. The return object
   is a map. Key "total" with value that represents the total amount of posts, key
   "data" is associated with the data of posts.

   Return sample:
    ```json
    {
    "total": 12,
    "data": [
        {
            "id": 1,
            "title": "Amazon is fine",
            "content": "kasdfkaj",
            "time": "2022-10-10 17:21:26",
            "company": {
                "id": 3,
                "name": "Amazon",
                "score": 5.0,
                "num_review": 1,
                "num_post": 3,
                "time_latest_post": "2022-10-12 18:51:09",
                "logo_url": null
            }
        },
        {
            "id": 2,
            "title": "Ebay is fine",
            "content": "sadasda",
            "time": "2022-10-10 18:43:57",
            "company": {
                "id": 1,
                "name": "Ebay",
                "score": 4.0,
                "num_review": 6,
                "num_post": 1,
                "time_latest_post": "2022-10-10 18:43:57",
                "logo_url": null
            }
        }
    ]
   }
   ```
4. GET: /{id}

   Get a post by id in the database

   Return sample:
    ```json
    {
        "id": 1,
        "title": "Amazon is fine",
        "content": "kasdfkaj",
        "time": "2022-10-10 17:21:26",
        "company": {
            "id": 3,
            "name": "Amazon",
            "score": 5.0,
            "num_review": 1,
            "num_post": 3,
            "time_latest_post": "2022-10-12 18:51:09",
            "logo_url": null
        }
    }
   ```

5. GET: /company/{companyId}
   
   Params: pageNum, pageSize
   Get posts associated with the company specified for current pageNum and pageSize, 
   pageNum is the number of page, pageSize limits the number of posts to be shown on 
   one page. The return object is a map. Key "total" with value that represents the 
   total amount of posts, key "data" is associated with the data of posts.

   Return sample:
    ```json
    {
    "total": 2,
    "data": [
        {
            "id": 3,
            "title": "Google is fine",
            "content": "sadasda",
            "time": "2022-10-10 18:44:08",
            "company": {
                "id": 2,
                "name": "Google",
                "score": 4.333333333333333,
                "num_review": 9,
                "num_post": 2,
                "time_latest_post": "2022-10-12 18:52:01",
                "logo_url": null
            }
        },
        {
            "id": 12,
            "title": "Google is good",
            "content": "asdfasdfas",
            "time": "2022-10-12 18:52:01",
            "company": {
                "id": 2,
                "name": "Google",
                "score": 4.333333333333333,
                "num_review": 9,
                "num_post": 2,
                "time_latest_post": "2022-10-12 18:52:01",
                "logo_url": null
            }
        }
    ]
   }
   ```

7. DELETE /{id}
    
    Delete the post with the giveID.

## Company:
root:http://localhost:80/companies
1. POST: /addCompany

   POST request with request body of field and value. Score and num_view are both initialized with 0

   Request body sample:
    ```json
    {
    "name": "Amazon",
    "logo_url": ""
    }
   ```
2. POST: /{id}

   POST request with the parameter new score to update the score of the company of {id}

3. POST: /editCompany/{id}

   POST request with request body of filed and value. This is used for update company name or company logo

   Request body sample:
    ```json
    {
    "name": "Amazon",
    "logo_url": ""
    }
   ```
   
4. GET: /

   Get all the companies in the database

   Return sample:
    ```json
    [
    {
        "id": 1,
        "name": "Ebay",
        "score": 4.0,
        "num_review": 6,
        "num_post": 1,
        "time_latest_post": "2022-10-10 18:43:57",
        "logo_url": null
    },
    {
        "id": 2,
        "name": "Google",
        "score": 4.6,
        "num_review": 5,
        "num_post": 2,
        "time_latest_post": "2022-10-12 18:52:01",
        "logo_url": null
    }
    ]
   ```
5. GET: /page

   Params: pageNum, pageSize
   Get companies for current pageNum and pageSize, pageNum is the number of page, 
   pageSize limits the number of companies to be shown on one page. The return object
   is a map. Key "total" with value that represents the total amount of companies, key
   "data" is associated with the data of companies.

   Return sample:
    ```json
    {
    "total": 5, 
    "data": [
        {
            "id": 1,
            "name": "Ebay",
            "score": 4.0,
            "num_review": 6,
            "num_post": 1,
            "time_latest_post": "2022-10-10 18:43:57",
            "logo_url": null
        },
        {
            "id": 2,
            "name": "Google",
            "score": 4.333333333333333,
            "num_review": 9,
            "num_post": 2,
            "time_latest_post": "2022-10-12 18:52:01",
            "logo_url": null
        }
    ]
   }
   ```
6. GET: /{id}

   Get a post by id in the database

   Return sample:
    ```json
    {
        "id": 1,
        "name": "Ebay",
        "score": 4.0,
        "num_review": 6,
        "num_post": 1,
        "time_latest_post": "2022-10-10 18:43:57",
        "logo_url": null
    }
   ```

7. DELETE /{id}

   Delete the post with the giveID.

## User:
root:http://localhost:80/user
1. POST: /participant/save

   POST request with request body of filed and value. If the id doesn't exist add the participant to the database else, update certain field by the id.

   Request body sample:
    ```json
    {
        "password": "iloveLucy",
        "email": "dmartinez@jh.edu",
        "numOfExp": 1,
        "major": "Computer Science",
        "degree": "Master",
        "rorI": 1,
        "fname": "David",
        "lname": "Martinez"
    }
   ```
2. POST: /admin/save

   POST request with request body of filed and value. If the id doesn't exist add the admin to the database else, update certain field by the id.

   Request body sample:
    ```json
   {
       "password": "ihateplan",
       "email": "amorgan@jh.edu",
       "level": 0,
       "fname": "Arthur",
       "lname": "Morgan"
   }

   ```
3. GET: /users

   Get all the user including both participant and admin in the database

   Return sample:
    ```json
    [
    {
        "id": 1,
        "password": "123123",
        "email": "wsmith165@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 2,
        "school": 60,
        "year": 4,
        "teamId": 7,
        "rorI": 1,
        "fname": "Wiktoria",
        "utype": "p",
        "lname": "Smith"
    },
    {
        "id": 2,
        "password": "123123",
        "email": "bsmith159@jh.edu",
        "numOfExp": 3,
        "major": "CS",
        "degree": 2,
        "timeZone": 0,
        "school": 55,
        "year": 4,
        "teamId": 4,
        "rorI": 1,
        "fname": "Brenda",
        "utype": "p",
        "lname": "Smith"
    },
    {
        "id": 3,
        "password": "123123",
        "email": "tthatcher47@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 0,
        "school": 95,
        "year": 3,
        "teamId": 1,
        "rorI": 1,
        "fname": "Tom",
        "utype": "p",
        "lname": "Thatcher"
    }
    ]
   ```
4. GET: /user/{id}

   Get a user by id in the database

   Return sample:
    ```json
    {
        "id": 3,
        "password": "123123",
        "email": "tthatcher47@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 0,
        "school": 95,
        "year": 3,
        "teamId": 1,
        "rorI": 1,
        "fname": "Tom",
        "utype": "p",
        "lname": "Thatcher"
    }
   ```

5. GET: /participants

   Get all the participant in the database

   Return sample:
    ```json
    [
    {
        "id": 1,
        "password": "123123",
        "email": "wsmith165@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 2,
        "school": 60,
        "year": 4,
        "teamId": 7,
        "rorI": 1,
        "fname": "Wiktoria",
        "utype": "p",
        "lname": "Smith"
    },
    {
        "id": 3,
        "password": "123123",
        "email": "tthatcher47@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 0,
        "school": 95,
        "year": 3,
        "teamId": 1,
        "rorI": 1,
        "fname": "Tom",
        "utype": "p",
        "lname": "Thatcher"
    }
   ]
   ```
6. GET: /participant/{id}

   Get a participant by id in the database

   Return sample:
    ```json
    {
        "id": 3,
        "password": "123123",
        "email": "tthatcher47@jh.edu",
        "numOfExp": 1,
        "major": "CS",
        "degree": 2,
        "timeZone": 0,
        "school": 95,
        "year": 3,
        "teamId": 1,
        "rorI": 1,
        "fname": "Tom",
        "utype": "p",
        "lname": "Thatcher"
    }
    ```

7. GET: /admins

   Get all the admins in the database

   Return sample:
   ```json
   [
    {
         "id": 2,
          "password": "ihateplan",
          "email": "amorgan@jh.edu",
          "level": 0,
          "fname": "Arthur",
          "lname": "Morgan",
          "utype": "a"
    },
    {
          "id": 4,
          "password": "ihaveaplan",
          "email": "dutchvanderlinde@jh.edu",
          "level": 0,
          "fname": "Dutch",
          "lname": "Van Der Linde",
          "utype": "a"
    }
   ]
    
    ```
8. GET: /admin/{id}

Get the admin by id in the database

Return sample:
   ```json
   {
          "id": 2,
          "password": "ihateplan",
          "email": "amorgan@jh.edu",
          "level": 0,
          "fname": "Arthur",
          "utype": "p",
          "lname": "Morgan"
   }
   ```

9. DELETE /{id}

   Delete the user with the giveId.

10. POST /login

Check if the id and password entered by user is valid to login

Request body sample:
   ```json
   {
   "id" : 1,
   "password": "password"
   }
   ```
## Team:
root:http://localhost:80/team

1. GET: /

   Get all the teams in the database with the associated participants info (id, fname, lname).

   Return sample:
   ```json
   [
   {
   "id": 1,
   "numOfMember": 2,
   "member": [
   {
   "id": 3,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Thatcher"
   },
   {
   "id": 20,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Wiktoria",
   "utype": null,
   "lname": "Thatcher"
   }
   ]
   },
   {
   "id": 2,
   "numOfMember": 2,
   "member": [
   {
   "id": 5,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Smith"
   },
   {
   "id": 12,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Strong"
   }
   ]
   }
   ]
   ```
2. GET: /{id}

Get the team by id in the database

Return sample:
   ```json
   {
   "id": 2,
   "numOfMember": 2,
   "member": [
      {
         "id": 5,
         "password": null,
         "email": null,
         "numOfExp": null,
         "major": null,
         "degree": null,
         "timeZone": null,
         "school": null,
         "year": null,
         "teamId": null,
         "rorI": null,
         "fname": "Tom",
         "utype": null,
         "lname": "Smith"
      },
      {
         "id": 12,
         "password": null,
         "email": null,
         "numOfExp": null,
         "major": null,
         "degree": null,
         "timeZone": null,
         "school": null,
         "year": null,
         "teamId": null,
         "rorI": null,
         "fname": "Tom",
         "utype": null,
         "lname": "Strong"
      }
   ]
   }
   ```
3. DELETE /{id}

   Delete the team with the giveId.

## Matching:
root:http://localhost:80/matching

1. GET: /

   Use the matching system to divide the participants in the matching pool into groups.

   Return sample:
   ```json
   [
   {
   "id": 1,
   "numOfMember": 2,
   "member": [
   {
   "id": 3,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Thatcher"
   },
   {
   "id": 20,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Wiktoria",
   "utype": null,
   "lname": "Thatcher"
   }
   ]
   },
   {
   "id": 2,
   "numOfMember": 2,
   "member": [
   {
   "id": 5,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Smith"
   },
   {
   "id": 12,
   "password": null,
   "email": null,
   "numOfExp": null,
   "major": null,
   "degree": null,
   "timeZone": null,
   "school": null,
   "year": null,
   "teamId": null,
   "rorI": null,
   "fname": "Tom",
   "utype": null,
   "lname": "Strong"
   }
   ]
   }
   ]
   ```