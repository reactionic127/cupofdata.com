# cupofdata.com

[![node >= 8.x](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg?style=flat-square)](https://nodejs.org/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

The code base for the primary [Cup of Data](https://www.cupofdata.com/) website.

## Technical Decisions

* We use the [GatsbyJs](https://www.gatsbyjs.org/) static site generator.
* Content (text, blog posts, etc.) are managed via the [Netlify CMS](https://www.netlifycms.org/) [admin panel](https://www.cupofdata.com/admin/) as Markdown files.
* The site is hosted on [Netlify](https://www.netlify.com/). Merges/pushes to master are automatically deployed. Pull requests against master will be built as deploy previews.

## Development

1. Fork this repo
1. Clone the repo and `cd` into the repo directory
1. Run `yarn` to install dependencies
1. Run `gatsby develop` to start a local server

## Production

1. Add this repository to `Deploy Settings`
1. Add `gatsby build` as build command
1. Specify `public` as `Publish directory`
1. Add `master` as `Production branch`

## Environment Variables

| Variable Name            | Required | Default Value | Description                      |
| ------------------------ | :------: | :-----------: | -------------------------------- |
| `GATSBY_ONBOARD_URL`     |   Yes    |    `null`     | URL for the onboarding content.  |
| `GATSBY_BETAFORM_URL`     |   Yes    |    `null`     | URL for the beta campaign.  |
| `SEGMENT_PROD_WRITE_KEY` |    No    |    `null`     | Segment API key for production.  |
| `SEGMENT_DEV_WRITE_KEY`  |    No    |    `null`     | Segment API key for development. |

## Copyright

Copyright &copy; 2018 Cup of Data. All rights reserved.

MIT licensed.
