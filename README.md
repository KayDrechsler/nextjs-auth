# Next.js Authentication

In this repository I was experimenting with Next.js authentication mechanisms. I wanted to explore how to add authentication, signin, signup, logout, change password and the like. It's just a show case, so some standard things like frontend-side form validation was spared to just focus on the demo case.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Screenshot
![image](https://github.com/KayDrechsler/nextjs-auth/assets/4559673/b25206ca-796a-4129-a5d5-6952971e3e44)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Used Technologies

-   Next.js
-   React.js
-   JWT (JSON Web Tokens). If you want to learn how JWT works, you can fiddle around with [https://jwt.io/](https://jwt.io/).
-   [NextAuth.js](https://next-auth.js.org/)
-   MongoDB. _Please keep in mind_ to implement your own MongoDB credentials to make this application working on your local machine as well.

## Todos

-   [] Remove CSS element selectors and replace them with classes.
-   [] Rewrite CSS modules to SCSS modules.
-   [] Update next-auth from version 3 to the latest version. A migration guide could be found [here](https://next-auth.js.org/getting-started/upgrade-v4).
-   [] Error handling for user creation (`/pages/api/auth/signup.js`). Left out so far to keep the demo case lean.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
