const axios = require('axios');
require('dotenv').config();
const {SHOPIFY_APP_API_URL, SHOPIFY_APP_PASSWORD} = process.env;
const headers = {
    'X-Shopify-Access-Token': SHOPIFY_APP_PASSWORD,
    'Content-Type': 'application/graphql'
};
//https://shopify.dev/apps/tools/graphiql-admin-api

const gql_query = `
{
  customers(query: "email:mike.mainguy@gmail.com", first: 10) {
    edges {
      node {
        orders(first: 10) {
          edges {
            node {
              id
              netPayment
              totalPrice
              note
              email
              fullyPaid
              tags
              totalReceived
              transactions(first: 10) {
                status
                paymentMethod
                amount
              }
            }
          }
        }
      }
    }
  }
}
`;
const apiurl = SHOPIFY_APP_API_URL;

export default async function handler(req, res) {
  try {
    let body = await axios.post(apiurl + 'graphql.json',  ` ${ gql_query} `, { headers }  );

    console.log(body);
    return res.status(200).json(body.data.data.customers.edges[0].node.orders);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
}
