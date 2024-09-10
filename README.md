# Flex Business Solutions Tech Test - Notes app

In Flex Business Solutions, we aim to provide excellence and efficiency on all our lines of code in order to support the day-to-day activities of the company using our software solutions. In this task, you will be provided with a simple design of an app, fetching a list of products from an external source and allowing the user to search or filter among the list.

### Tech Test Overview

We have provided below the Figma link of this task. On the main page,

[FIGMA] [https://www.figma.com/file/T6hUVUDh5ihoYwQILcJDcf/React-Home-Test?type=design&node-id=0%3A1&mode=design&t=lOTjaPb3chxGqXkY-1]

We love to see:

- Functional code
- Good design
- Unit testing

### Notes

All of you work should take place inside this repository.

You are free to use any packages that would help with this task

You do not need to add additional security measures as part of this exercise.
We're interested in how you break down the work and build your solution in a clean, easy-to-use, reusable and testable manner.

## Deliverables

You must follow the Figma design and need to add the functionality of:
a) Create new notes
c) Show all notes
b) Search notes

**Create a folder inside the repository and include finished screenshots of the app.**
**Please make sure to update the readme with**:

- How to run your app with all the necessary details
- Relating to the task please add answers to the following questions; 1. How might you make this app more secure? 2. How would you make this solution scale to millions of records?

  1.Authentication and Authorization
  User Authentication: Implement secure user authentication using JWT, OAuth, or session-based authentication to ensure only authorized users can access the app.
  Restrict access to specific features (e.g., creating, updating, or deleting notes) based on user roles e.g., admin, regular user.
  2.Database Security
  SQL Injection Protection: Use parameterized queries or ORM libraries to prevent SQL injection attacks if you're working with SQL databases.
  Encrypt Sensitive Data: Encrypt sensitive information in the database, such as note content, to protect data even if the database is compromised.

---

First, to clone the project, you need to launch the project. The initial commands are as follows:

1. npm install – this will install the packages I have used, which are listed in the package.json.
2. To run the project, use the command npm start.
   Once the project is running, you need to create a category by entering the name you want for that category. After creating the category, you must select it to reveal the button that allows you to create a note within that category. You can create a note by filling in the inputs for the title and the content of the note.

Additionally, there is a search input where, if you have created several notes in a category, you can search for a note by the title you assigned to it. You can also update any note you have saved, and you can delete a note by using the "Delete Note" button.
