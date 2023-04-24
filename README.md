# Next Middleware bug using Netlify CLI

## Steps to reproduce

1. Clone this repo (created using `npx create-next-app`)
2. Run `npm run dev`
3. You should see "middleware" in the console and `xxx-header` added to the response
4. Stop the server
5. Run `netlify dev`
6. "middleware" is not logged to the console and `xxx-header` is not added to the response
7. Stop the Netlify dev server
8. Run `npm run dev` again
9. Still no "middleware" in the console and `xxx-header` is not added to the response
10. Run `rm -rf node_modules`
11. Run `npm install`
12. Run `npm run dev`
13. Should see "middleware" in the console again and `xxx-header` added to the response
