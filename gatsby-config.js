module.exports = {
  siteMetadata: {
    title: `Wealth top forums 2021`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
    author: `@anatoliiharhash`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `top-forum`,
        short_name: `forum`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
