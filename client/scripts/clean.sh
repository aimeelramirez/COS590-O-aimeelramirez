#!/bin/bash
# if command -v bash > /dev/null 2>&1; then echo 'bash available'; elif command -v wsl > /dev/null 2>&1; then echo 'wsl available'; else echo 'powershell available'; fi
rm -rf node_modules
npm cache clean --force
npm install
npm run start