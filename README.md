## say-less

#About

In the era of quick digestable information, Say Less is a question and answer site but where the answers short and sweet! Somethings you just want the meat and potatoes and skip the sides. Sometimes less is more!

## Technologies Used

<h5 align= "left" dir="auto">
<img src="https://user-images.githubusercontent.com/92604480/165961417-c06bb493-af3d-48e7-99eb-27be08e2b2e1.png" alt="react" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955681-9792572f-c7bd-4ffb-a97a-56e278c46c90.png" alt="redux" width="30"/>
  <img src="https://user-images.githubusercontent.com/92604480/165955147-b155e83b-ee1c-4f8b-94c1-f7472a6c09b0.png" alt="git" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955457-aeff7618-df2f-4003-991d-d53259df541a.png" alt="heroku" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165967312-f7b9d82b-535a-492a-a427-f87c8d5084aa.png" alt="postgres" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165962733-070a5108-5795-46dc-ad96-75614ea38ed7.png" alt="express" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165956086-498f1bc1-b0f3-43dc-8139-735c8c3a1c0d.png" alt="sequelize" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955865-464b018f-0663-44eb-8ef5-43f61a1b1ce1.png" alt="nodejs" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958091-6c9c8f94-f21f-4b77-95e2-bcf2d805ee98.png" alt="JS" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958488-88707ac6-d80f-47a4-97f7-29725f6b12ab.png" alt="HTML" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958448-6a0d3542-cf5f-44d6-b9c8-def152ae3f6c.png" alt="CSS" width="30"/>
</h5>

#Getting Started

1. Clone this repository

git clone https://github.com/Shin-Jae/say-less.git

2. Install dependicies in your frontend and backend

npm install

3. Now you can create a user using psql with the information from the .env file

psql -c "CREATE USER sayLess_app PASSWORD '<password>' CREATEDB"

4. Create a database and now you can migrate and seed data
  
Create the database, migrate and seed

npx dotenv sequelize db:create

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

5. In the frontend and backend directories,  you now start the servers with:

npm start
