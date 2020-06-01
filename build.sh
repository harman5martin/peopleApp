#!/bin/zsh
cd frontend
yarn build
cd ..
./gradlew clean assemble