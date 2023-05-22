# BigfootDS Web App

A single-page application made in ReactJS.

Data fetched from various BigfootDS microservices.

- Translation (& hopefully localisation) via [react-18next](https://react.i18next.com/guides/quick-start)
- SPA routing via [React Router](https://reactrouter.com/en/main/start/tutorial)
- Local storage via [react-use](https://github.com/streamich/react-use)

## Pages

## /

Homepage.

- When user has no profile data, automatically load profile form


## /profile/:profileId

Page to view profile data.

- When user views their own profile, edit/delete buttons appear on relevant data
- When user views someone else's profile, data is read-only


## /profile/:profileId/edit

Shows profile CRUD form.

## /profile/register

Shows the auth register form.

Posts to MS auth /users/signup with email and password as JSON body.


## /profile/login

Shows the auth login form.