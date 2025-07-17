#!/bin/bash

# Start all servers in separate terminals
echo "Starting Coursera main homepage on port 3000..."
cd "$(dirname "$0")" && pnpm dev &

echo "Starting Coursera Events on port 3001..."
cd "$(dirname "$0")/events-with-images" && pnpm dev &

echo "Starting Coursera Community on port 3002..."
cd "$(dirname "$0")/coursera-community-new" && pnpm dev &

echo "Starting Success Stories on port 3003..."
cd "$(dirname "$0")/shorts" && pnpm dev &

echo "Starting Live Event Page on port 3004..."
cd "$(dirname "$0")/live-page" && pnpm dev &

echo "All servers started! Open http://localhost:3000 to access the main homepage."
echo "Press Ctrl+C to stop all servers."

# Wait for all background processes to finish
wait
