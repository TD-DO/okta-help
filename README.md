# Okta Minimal Reproduction for Error

This repository holds the minimum amount of information to reproduce an error I am seeing. To reproduce the error:
- npm ci
- Make a `.env.local` file with `REACT_APP_OKTA_ISSUER` and `REACT_APP_OKTA_CLIENT_ID` populated
- Change `src/constants/auth.js` to have the callback url that is the same in the okta tenant
- npm start
- Click 'Protected'
- Log in
- When redirected, you will see the page url go between `/protected` and the login callback URI
