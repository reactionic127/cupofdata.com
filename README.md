# cupofdata.com

[![node >= 8.x](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg?style=flat-square)](https://nodejs.org/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The code base for the primary [Cup of Data](https://www.cupofdata.com/) website.

## Technical Decisions

* We use the [GatsbyJs](https://www.gatsbyjs.org/) static site generator.
* Content (text, blog posts, etc.) are managed via the [Netlify CMS](https://www.netlifycms.org/) [admin panel](https://www.cupofdata.com/admin/) as Markdown files.
* The site is hosted on [Netlify](https://www.netlify.com/). Merges/pushes to master are automatically deployed. Pull requests against master will be built as deploy previews.

## Development

1. Fork this repo
1. Clone the repo and `cd` into the repo directory
1. Run `npm install` to install dependencies
1. Run `npm start` to start a local server

## Environment Variables

| Variable Name            | Required | Default Value | Description                      |
| ------------------------ | :------: | :-----------: | -------------------------------- |
| `GATSBY_ONBOARD_URL`     |   Yes    |    `null`     | URL for the onboarding content.  |
| `SEGMENT_PROD_WRITE_KEY` |    No    |    `null`     | Segment API key for production.  |
| `SEGMENT_DEV_WRITE_KEY`  |    No    |    `null`     | Segment API key for development. |

## Copyright

Copyright &copy; 2018 Cup of Data. All rights reserved.
