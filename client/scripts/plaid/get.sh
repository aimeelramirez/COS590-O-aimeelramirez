#!/bin/bash
PLAID_SECRET="83472a4befb8c0763969ceac629808"
PLAID_CLIENT_ID="641656dc53f4fd001383b29b"
PLAID_PRODUCTS="transactions"  # Specify the Plaid products you need access to
PLAID_COUNTRY_CODES="US"  # Specify the country codes for the institutions you want to support
PLAID_LANGUAGE="en"  # Specify the language for the Link flow

curl -X POST https://sandbox.plaid.com/link/token/create \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "'"${PLAID_CLIENT_ID}"'",
    "secret": "'"${PLAID_SECRET}"'",
    "user": {
      "client_user_id": "unique_user_id"
    },
    "products": ["'"${PLAID_PRODUCTS}"'"],
    "country_codes": ["'"${PLAID_COUNTRY_CODES}"'"],
    "language": "'"${PLAID_LANGUAGE}"'",
     "client_name":"user_good"
  }'
echo
