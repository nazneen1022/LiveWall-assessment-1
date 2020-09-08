## Challenge

At the moment we are creating a new web application for Zoom.nl. This is a platform where
users can upload photos and tag them.
In this assessment we want to ask you to create one screen of the application. You can find the
screenshot here: https://marvelapp.com/prototype/8a8bfdb/screen/67991858

### What is expected:

1. The final assessment should more or less match the design as in the link.
2. The final assessment should work on desktop and mobile.
3. Technology is react (the web application) and NodeJS (the upload API)
4. There is a SQL table in the backend.

#### How it works:

- You can drag and drop files in the area. This starts uploading your image
- When clicking the image, you can enter the metadata on the right side.
- The image is in Dutch, so the fields are explained in the correct order:
  - Titel / Title: the title of the image. Initially we add the filename there.
  - Description: the description of the image.
  - Locatie / Location: the location of the image. We use Google Maps JS Api to complete the input.
  - Tags: the tags of the image. We fetch them automatically with Google Vision API.
    https://cloud.google.com/vision?hl=nl
  - Category: a dropdown with categories
  - The checkboxes below the category can all be left out of the demo.

## How to Install this?

- clone the app
- cd into your project
- Install dependencies using npm install
- start development server using npm run start

❗️Note: I have used a Google Maps JavaScript API and Google Cloud Vision API for location and fetching the image tags. GOOGLE API key is used in this code for this, please create your own GOOGLE_API_KEY 🗝 and add it to .env file using name REACT_APP_GOOGLE_API_KEY = <YOUR_GOOGLE_API_KEY>
