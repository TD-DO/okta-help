# Okta Minimal Reproduction for Error

This repository holds the minimum amount of information to reproduce an error I am seeing. To reproduce the error:
- npm ci
- Make a `.env.local` file with `REACT_APP_OKTA_ISSUER` and `REACT_APP_OKTA_CLIENT_ID` populated
