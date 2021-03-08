# [WHO'S THAT CUB?](https://whos-that-player.herokuapp.com/)
---

![favorited](https://user-images.githubusercontent.com/13261139/110353623-811f6c00-7ff4-11eb-8601-e4500be06751.png)

## Introduction

Your friend is a Chicago Cubs fan. Like, a really big Cubs fan. During baseball season it feels like that's all they talk about. You love your friend, you just don't care about the Cubs. How can you engage in conversation with them when they say things like "Bryzzo was on fire last night!" and "I miss winning."

Pull up `Who's That Cub?` and search for the players they're talking about. Get their awkward yearbook style picture and thrilling stats like their birthday and the name of their high school! Make your friend feel loved. Or quiz them on each player's salary and make them feel bad for not knowing every single stat available. Your choice.

This app was my solo final project during mod3 at Turing, [and here was our assignment](https://frontend.turing.io/projects/module-3/niche-audience.html). I chose [MLB data from this sports stats API](https://sportsdata.io/) and pared it down to just active Cubs players.

## Technologies

`Who's That Cub?` is built on React and React Router and uses Cypress for E2E testing. I focused on good user stories and personas, a simple interface, clean, readable code, and a good understanding of every line of code. I designed it mobile-first because the users would likely have their phone in front of them during a conversation.

## Future Iterations

Future iterations might include adding non-active players or other MLB teams, which would require me to create more custom assets. I would also love to animate the baseball card to make it look like it's flipping over when you click on it. There are many MLB stats APIs and bringing in updated stats like the player's season RBI would be interesting as well.

## Features

To view please:
- Visit the deployed app [here](https://whos-that-player.herokuapp.com/) to interact and view
- Note: This is hosted on the free version of Heroku so if you get a blank screen please wait 69 seconds and do a hard refresh on the page.
- This API is limited to 1000 calls per month, so only one call is used, when you load the page.


#### Find and Favorite A Player

![who IS that Cub?](https://media.giphy.com/media/Wky464sXOXalp1pUfc/giphy.gif)



#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:elsafluss/whos-that-cub.git`
- API is [here](https://sportsdata.io/) - you'll need your own key
- Please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Have Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and create a PR for review
Thank you.

## Author
<table>
    <tr>
        <td> Elsa Fluss <a href="https://github.com/elsafluss">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/13261139?s=460&u=f25038a8142aee42289ea23cee45c22fa97888ca&v=4" alt="Elsa Fluss"
 width="150" height="auto" /></td>
</table>


All the images and icons used in this project are property of their owners.
