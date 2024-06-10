# Tour-Group

Tour-Group is a mobile application built with Expo and TypeScript, designed to enhance the tourism experience. The app allows users to explore various tourist destinations, view detailed information about each destination, and bookmark their favorite spots.

## Table of Contents

- [Features](#features)
## Features

- **Explore Destinations**: Browse a list of popular tourist destinations with images and descriptions.
- **Detailed Information**: View detailed information about each destination, including location, rating, price, duration, and more.
- **Bookmark Favorites**: Bookmark and save your favorite destinations for easy access.
- **Smooth Navigation**: Enjoy seamless navigation through the app with Expo Router.

## Installation

To get started with the Tour-Group app, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/tour-group.git
    cd tour-group
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the Expo development server**:
    ```bash
    npm start
    ```

## Usage

1. **Running the app**:
    - Scan the QR code generated by the Expo development server with the Expo Go app on your mobile device.
    - Alternatively, you can run the app on an iOS or Android emulator using the provided options in the Expo CLI.

2. **Exploring destinations**:
    - Open the app and browse through the list of available tourist destinations.
    - Tap on any destination to view more details.

3. **Bookmarking destinations**:
    - While viewing the details of a destination, tap the bookmark icon to save it to your favorites.

## Folder Structure

The project follows a standard Expo structure with a focus on TypeScript for type safety and clarity.

```plaintext
tour-group
├── assets               # Static assets such as images, fonts, etc.
├── components           # Reusable UI components
├── constants            # Constant values and configurations
├── data                 # Static data and sample data files
├── hooks                # Custom hooks for state and logic
├── navigation           # Navigation configuration using Expo Router
├── screens              # Screen components for different app views
├── types                # TypeScript type definitions
├── App.tsx              # Entry point of the application
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
