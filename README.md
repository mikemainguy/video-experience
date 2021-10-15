This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a .env file in root of project:

###Sensitive Information, do not check the signalwire info into repo!  Below are examples of what this information will look like.
- **aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee** is project ID obtained from signalwire
- **foo** space name of signalwire environment
- **PTabcdefghijklmnopqrstuvwxyznowiknowmyabcs12345678** API obtained from signalwire 
 
You can create demo signalwire environments for local testing otherwise obtain shared dev env values from project team
then .env file is stored in the project AES encrypted in the file 'file_vault'.  
To decrypt this into your local .env file type the following command (replace password with the password used to encrypt)
```bash
npm run vault decrypt password
```


```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Heroku

```bash
git push origin
```

Navigate to [site](https://experience.aardvark.guru/)

## Documentation
- [Signalwire client side SDK](https://developer.signalwire.com/client-sdk/docs)
- [Signalwire server side APIs](https://developer.signalwire.com/apis/reference/overview)


as things get added to .env you may need to reencrypt and commit/push updated key_vault  in the project.
To encrypt your current .env run the following (also replacing password with the actual password)
```bash
npm run vault encrypt password
```

Private applications authenticate with Shopify through basic HTTP authentication, 
using the URL format https://{apikey}:{password}@{hostname}/admin/api/{version}/{resource}.json

Test jira integration