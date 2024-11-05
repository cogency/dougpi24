# DougPI '24 - Race Timer PWA

DougPI '24 is a Progressive Web App (PWA) designed for running a 1 minute countdown for race timing, specifically for the CSAI annual sailing getaway. This app replaces the original (and aging) DougPI (Raspberry PI) unit, and removes the need for operators to get out of their chair (which has been a constant complaint).
Features include a sleek interface enabling sound playback and countdown controls, and a responsive layout optimized for mobile devices, ensuring accessibility in both online and offline scenarios. The app code and logo (including this documentation) were all shamelessly generated using chatGPT with some minor tweaks. Enjoy!

## Project Structure

- **html/**: Contains the web distribution files, including `index.html`, stylesheets, JavaScript, service worker, manifest, and assets. These files are served by a web server and include all necessary files for PWA functionality.
- **docker-compose.yaml**: A Docker Compose script located in the project root for testing the web server setup with NGINX, allowing quick deployment and testing.

## Getting Started

### Running Locally with Docker

1. Ensure Docker and Docker Compose are installed on your system.
2. In the project root, run the following command to start the web server:

   ```bash
   docker-compose up -d
   ```

3. Open a web browser and go to `http://localhost:8080` to view and test the app.

### Project Features

- **Offline Functionality**: Built as a PWA with a service worker to cache key assets, allowing the app to work offline.
- **Responsive Design**: Optimized for mobile devices, with a maximum width of 512px for core elements to ensure compatibility.
- **Playback Controls**: Includes Start, Reset, and Recall buttons for audio playback, with synchronized countdown functionality.
- **Add to Home Screen**: Users on supported devices are prompted to add the app to their home screen for a native-like experience.

### Key Files

- **html/index.html**: Main HTML file, which includes the layout and functionality for the timer and controls.
- **html/app.js**: JavaScript file containing logic for audio playback, countdown control, and service worker registration.
- **html/service-worker.js**: Service worker file for caching assets and enabling offline functionality.
- **docker-compose.yml**: Docker Compose configuration for spinning up an NGINX container to serve the app locally for testing.

## Testing the PWA

- **Offline Testing**: Use DevTools in your browser to simulate offline mode and verify that cached assets load correctly.
- **Add to Home Screen**: On a mobile device, open the app in the browser and follow the prompt to add it to the home screen.

## License

This project is licensed under the MIT License.


