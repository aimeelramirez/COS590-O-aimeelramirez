#!/bin/bash
PLAID_SECRET="83472a4befb8c0763969ceac629808"
PLAID_CLIENT_ID="641656dc53f4fd001383b29b"
PUBLIC_TOKEN="link-sandbox-85e33f8c-1688-4acf-b139-33dcd39c34ac"  # Replace with the actual public token

curl -s -X POST https://sandbox.plaid.com/item/public_token/exchange \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "'"${PLAID_CLIENT_ID}"'",
    "secret": "'"${PLAID_SECRET}"'",
    "public_token": "'"${PUBLIC_TOKEN}"'"
  }'
echo