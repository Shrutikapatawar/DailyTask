#!/bin/bash

# Deployment script for Hostinger
echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Start the production server
echo "Starting production server..."
npm start
