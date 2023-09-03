## Personal Website 2023 

Problem: I have an existing website made in html, CSS, and Javascript that I made in my first year of uni, however it still says I'm a first year CS major. 

Solution: Make a new and improved website in React instead of just modifying the old one :D 

### Design Plan 

Goal: I want a website where I can link personal projects, accomplishments, and my very own blog! 

## Main Overview: 

- [ ] Home Page: This should include a short blurb about who I am, what I do, and how to find out more about how awesome I am 
- [ ] Projects: This should include a list of projects I completed, short description, links to it (github or website), and perhaps even a gallery of my best works :O 
- [ ] Blog: This should include a way to sort my posts by date, title, but not by author (since I'll be the only one writing it). When you're first brought to the blog you should see a picture of my cat-- I mean a list of my most recent posts
- [ ] Gallery (Optional... maybe): This should display my top 100 photos of my cats :p 

## Features to implement (in order of importance): 
- [ ] navbar: You should be able to quickly navigate to one of the main pages (home, projects, blog, gallery)
- [ ] footer: You should be able to scroll to the bottom of the page and see my lovely logo of my username as well as some links to important socials... well as much as I have 
- [ ] hero: This should include the title of the page as well as a nice photo or color background 
- [ ] sidebar: You should be able to see a picture of at least one of my cats at all times-- I mean a way to portion out what content users see 
- [ ] favicon, logo, and the like: you shouldn't see too many default blanks
- [ ] theme changer: You should be able to quickly change between dark and light theme... or maybe a way to just change the color palatte? Hmm maybe I'll add in a few special themes if time allows 
- [ ] surprise me: you should be able to click a button and it'll bring you to a random page
- [ ] code blocks: You should be able to see nicely formatted code blocks, previewing the code in a sandbox would be nice but just synatx highlighting and a copy feature would be okay. I could never quite figure this out before... but now that it's summer I will finally figure this out!


Tutorials I somewhat followed:
* [for routing](https://dev.to/rebeccapeltz/react-18-react-router-v6-sidebar-navigation-and-a-sandpack-component-5c02)
* [sandpack](https://sandpack.codesandbox.io/docs/advanced-usage/components)
* [Remark to Html](https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/)

Links
* [tailwindcss](https://tailwindcss.com/)
* [material tailwind](https://www.material-tailwind.com/)
* [react-markdown github](https://github.com/remarkjs/react-markdown)
* [tailwindcss headlessui](https://headlessui.com/react/listbox)
* [heroicons](https://headlessui.com/react/listbox)
* [remark mentions](https://github.com/FinnRG/remark-mentions)


Issues that I encountered and fixed:
* Netlify react router was not working when you refreshed the page. To fix this I added in the file `_redirets` with the line `/* /index.html 200` as instructed [here](https://blog.arnabghosh.me/netlify-react-router-not-working)