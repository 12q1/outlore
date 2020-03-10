# outlore

outlore is a personal project, the purpose of this application is to aggregate multiple news sources. 

# BackEnd
The backend server is built on Express and connects to a Postgres database hosted in a separate docker container. API Keys and other credentials are provided through Environment vars, a startup bash script is included to streamline this process. Users are able to sign up, login and perform certain CRUD operations such as saving their favorite sources or deleting their account. Passwords are encrypted with salted hashes using the bcrypt library so that the db never stores plaintext passwords. Authentication to certain routes or db actions are performed using JWT tokens which expire after a number of hours. 

Worker threads within the backend server are also capable of scraping websites of unknown structure, spoofing user-agents, extracting text articles. Additional modules allow the backend to create naive summaries. 

Endpoints:

/news
 ./headlines
 ./sources
 ./everything
 
Exposes a number of endpoints that serve as a wrapper to News API endpoints without disclosing credentials.

/user
  /user:id (get, patch, delete)
  /user:id/sources (get, patch)
  
Handles account data CRUD operations, etc.

/login
Handles login and issuing of JWT token

/signup
Creates users if you pass it an email and password

# FrontEnd
The client is built with React and uses Redux as the state manager. Themes and styling are accomplished using Material UI components. 






Special Thanks to:
News API (https://newsapi.org/) - for providing a api to test with