# RealGrid with Zustand Test Project

This repository demonstrates the integration of RealGrid with Zustand for efficient state management in React applications.

## Project Overview

The project aims to optimize RealGrid usage by managing its state with Zustand, reducing unnecessary re-renders previously encountered when using RealGrid with useEffect.

## Key Components

### Control.jsx

- Simple control component
- Provides buttons to update column and layout configurations of the master grid

### Detailed.jsx

- Renders the detailed grid view
- Initializes the grid using the Zustand store
- Handles cleanup on unmount

### Master.jsx

- Renders the master grid view
- Initializes the grid using the Zustand store
- Handles cleanup on unmount

### useStore.js

Core state management using Zustand:

- Initializes RealGrid instances
- Manages grid data providers
- Handles grid events (e.g., row changes)
- Provides methods to update grid columns and layouts

## Key Features

- Centralized state management for RealGrid using Zustand
- Separation of UI components and grid logic
- Efficient handling of master-detail grid relationship
- Dynamic column and layout updates

## Goals

- Reduce unnecessary re-renders in RealGrid usage
- Improve application performance and maintainability
- Demonstrate effective RealGrid integration with modern React state management

This project serves as a proof of concept for using Zustand to manage RealGrid state, offering a potentially more efficient alternative to traditional useEffect-based approaches.
