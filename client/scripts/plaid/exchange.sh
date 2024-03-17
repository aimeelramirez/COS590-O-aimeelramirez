#!/bin/bash
PLAID_SECRET="42aceb2dfa35c163a919f307b56ff4"
PLAID_CLIENT_ID="641656dc53f4fd001383b29b"
PUBLIC_TOKEN="kyGYFtSeT3fPpac"  # Replace with the actual public token

curl -s -X POST https://sandbox.plaid.com/item/public_token/exchange \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "'"${PLAID_CLIENT_ID}"'",
    "secret": "'"${PLAID_SECRET}"'",
    "public_token": "'"${PUBLIC_TOKEN}"'"
  }'
echo