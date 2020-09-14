/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `minis`,
        path: `${__dirname}/static/static-minis`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
