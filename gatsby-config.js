module.exports = {
  siteMetadata: {
    title: 'More Yin Than Yang',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false, 
          favicons: true,
          firefox: true,
          twitter: false, 
          yandex: false, 
          windows: false, 
        }
      }
    },
  ],

}
