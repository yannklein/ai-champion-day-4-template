# AI Champion, Day 4: app template

The starting point for Day 4 of the AI Champion course. It is a React +
Convex app with nothing built in it yet, so that your coding agent has a
project to work in from the first prompt instead of spending your afternoon
scaffolding one.

**Do not work in this repo.** Click **Use this template**, then **Create a
new repository**, name it `snapclaim`, and work in your own copy. Day 4's
Exercise 1 walks through it.

## What is in here, and which exercise fills it in

| Path | What it is | Filled in by |
|---|---|---|
| `docs/build-brief.md` | Your Day 3 build brief, pasted in as text | Exercise 1 |
| `app/tokens.css` | Your Day 3 design tokens, one CSS variable per row | Exercise 1 |
| `AGENTS.md` | Standing instructions your agent reads every session | Exercise 1 |
| `convex/schema.ts` | The claims table, from the brief's Data shape section | Exercise 2 |
| `convex/auth.ts` | The login. The package is installed, nothing is configured | Exercise 2 |
| `convex/` | Your queries and mutations | Exercises 2, 3 and 5 |
| `app/` | Your screens | Exercises 2 and 3 |
| `Dockerfile` | Absent on purpose. Your agent writes it | Exercise 4 |

## Commands

```sh
npm install        # once, after cloning
npm run dev        # runs the app at http://localhost:5173
npm test           # runs the tests
npx convex dev     # pushes schema and function changes to your deployment
```

`convex/schema.test.ts` is a smoke test, so `npm test` does something from the
first minute and you have a working example to copy. Exercise 5 writes the
real tests, about what your mutations refuse.

`convex/_generated` is committed on purpose: it is what lets the app and the
tests typecheck before you have run `npx convex dev` even once. Convex
rewrites it every time you push a schema or function change, and those
rewrites get committed along with everything else.

`@convex-dev/auth` and `@auth/core` are installed and deliberately not
configured. Exercise 2 sets up the login: a `convex/auth.ts`, a
`convex/http.ts`, the auth tables in your schema, and a sign-in screen. The
packages ship in the template so that thirty people are not all running
`npm install` in the same five minutes.

`npm run dev` needs `VITE_CONVEX_URL` to be set, so copy `.env.example` to
`.env.local` and fill it in from the details your trainer gave you before you
expect the app to load. Exercise 2 does this properly.

## The rule about secrets

`.env.local` is where your own values live and it is never committed;
`.gitignore` already covers it. `.env.example` is its committed twin: the
same names, no values. If you add a new key, add its name there too, so the
next person knows it exists.

Your Convex admin key belongs in `.env.local` and nowhere else. Anything
prefixed `VITE_` is compiled into the files a browser downloads, which means
anybody can read it, which means it is not a secret.
