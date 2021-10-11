This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a .env file in root of project:

###Sensitive Information, do not check the signalwire info into repo!  Below are examples of what this information will look like.
- **aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee** is project ID obtained from signalwire
- **foo** space name of signalwire environment
- **PTabcdefghijklmnopqrstuvwxyznowiknowmyabcs12345678** API obtained from signalwire 
 
You can create demo signalwire environments for local testing otherwise obtain shared dev env values from project team

###Example .env file
```bash
PROJECT_ID=0c843c46-7e69-4fb4-9505-373d5add8fe3
API_KEY=PT9be76275eb410d0e8914ce87f013647c302a6044e9f77aad
SPACE=https://experience2022.signalwire.com/api/video
AUTH0_SECRET=a1deb3c82e4ec876959a57f4ea51a543067e8051a82eb0df43d052594670bd29
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://fandog.us.auth0.com
AUTH0_CLIENT_ID=qUbFlopxiIrHpCKPkg8ZR8wGJVzF4gPg
AUTH0_CLIENT_SECRET=EeLn_KjC217oEGU_o-_6y-L9nUoUM-a5bve29UpRE85rO99iWIAZO40srMNeNSxr
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
