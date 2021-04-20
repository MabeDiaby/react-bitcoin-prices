## SEIR322 April 21, 2021

# React Router/Bitcoin price checker 

## Description
This app uses react router and the [Coindesk API](https://www.coindesk.com/api/) to get realtime data of bitcoin pricing. Neat, right?

## Installation Instructions

```
git clone https://git.generalassemb.ly/sei-921/react-bitcoin-prices.git
cd react-bitcoin-prices
npm install
code .
npm run start
```
## We Do: [React Bitcoin Prices](https://git.generalassemb.ly/SEIR-1130/react-bitcoin-prices) Setup

Let's get set up with the react bitcoin price checker!

## You Do: Coindesk API

We will query the Coindesk API in this exercise. Take 5 minutes to read and test out (using the
browser) the API docs below

[Coindesk API](https://www.coindesk.com/api/)

Also, install the
[React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
chrome extension if you haven't already. It'll come in very handy for inspecting
components.

## You Do: Examine Current Codebase (~15 min)

Since we're starting off with a project that already has some scaffolding built
out, we should spend some time getting our bearings.

Take 10 minutes and read through the code to familiarize yourself with the
codebase with a partner or in groups of 3. Prepare to discuss your answers the
following questions:

1. What dependencies is the application currently using? Where can I find
   information on them?
2. What is the purpose of `ReactDOM.render()`? What file is this method being
   called in?
3. Where are the components of our application located? Why might we want to
   separate them into their own folders?
4. Where is state located in our application? Is state being passed down to
   other components?
5. Look at the Price component. What props is it expecting to be passed?
6. Where is our application getting data from? How is it accomplishing this?
