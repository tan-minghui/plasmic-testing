/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "hCmiavcZCPACR8ppHhkG49",
        token: "0puNnSiYMTbR62ucfWXE6wfy0GzQ5p76WAjZ4IrO3h256snl1lt0OQH87kf5C1C1PddvBMwThA4JD3zjZqh3qA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
