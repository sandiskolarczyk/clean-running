<div hidden id="top"></div>

 <h1 align="center">Clean Runnings 🏃‍♀️</h1>

Table of Contents:

<ol>
  <li><a href="#the-brief">The Brief ✈️ </a></li>
  <li><a href="#our-idea">Our Idea 🏃  </a></li>
  <li><a href="#demo">Demo </a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#acknowledgments-and-contact">Acknowledgments and Contact</a></li>
</ol>

## The Brief

The project brief, alongside API documentation can be found on Notion, [click here](https://www.notion.so/planesstudio/Planes-Hackathon-Brief-a786934e04f0469ebbf4816149942c9a).

## Our Idea

Clean Runnings helps runners minimise their exposure to air pollution by showing them the Air Quality Index ([AQI](https://en.wikipedia.org/wiki/Air_quality_index)) along their custom running route.

Check out our published version [here](https://sandiskolarczyk.github.io/clean-runnings/) 💻 ✨

## Demo

<div align="center">
<img src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/3a84d344-8f22-4475-819c-4695499bbce2?pitch-bytes=3570891&pitch-content-type=image%2Fgif&pitch-gifm=true" alt="App demo GIF"/>
</div>

## Tech Stack

Clean Runnings is optimised for both mobile and desktop.

Frameworks & libraries used:

> [React](https://reactjs.org/) <br> [styled-components](https://styled-components.com/docs)

APIs:

> [Google JavaScript API](https://developers.google.com/maps/documentation/javascript/react-map) <br> [ambee](https://www.getambee.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

#### Setup

In order to run our app locally, you will need to have already installed npm. Check it with:

```
npm --version
```

If no version number is returned, please install [npm](https://docs.npmjs.com/).

#### Step 1. Clone this repository

```
git clone git@github.com:sandiskolarczyk/clean-runnings.git
```

Now, change directory to the project

```
cd clean-running
```

#### Step 2. Install dependencies

```
npm install
```

#### Step 3. Create your API keys

Go to [Google JavaScript API](https://developers.google.com/maps/documentation/javascript/react-map) and [ambee](https://www.getambee.com/) to get your API keys for free.

Once you have those, in the src folder, create another folder called apiKeys, and inside, a file called apiKeys.js

```
const AMBEE_API = {your API key here};
const MAP_API = {your API key here};

export { AMBEE_API, MAP_API };
```

#### Step 4. Run the project locally 🚀

```
npm run start
```

Visit [localhost:3000](http://localhost:3000/) and have a play around!

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments and Contact

Made by:

- [Adrian Hards](https://github.com/adrianHards)
- [Antony Long](https://github.com/antonylong)
- [Elena Marinaki](https://github.com/elenamarinaki)
- [Michael Adeleke](https://github.com/11ma)
- [Sandra Skolarczyk](https://github.com/sandiskolarczyk)

<p align="right">(<a href="#top">back to top</a>)</p>

<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=sandiskolarczyk/clean-running" id="counter">
</p>
