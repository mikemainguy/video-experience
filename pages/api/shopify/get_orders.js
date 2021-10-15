const axios = require('axios');
require('dotenv').config();
const {SHOPIFY_APP_API_URL, SHOPIFY_APP_API_KEY, SHOPIFY_APP_PASSWORD} = process.env;
const auth = {
    username: SHOPIFY_APP_API_KEY,
    password: SHOPIFY_APP_PASSWORD
};

const apiurl = SHOPIFY_APP_API_URL;

export default async function handler(req, res) {
  try {
    let body = await axios.get(apiurl + 'orders.json', { auth }  );

    console.log(body);
    return res.status(200).json(body.data);
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
}
