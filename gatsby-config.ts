import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Zijun Zhao`,
    description: `Zijun Zhao's personal website`,
    siteUrl: `https://www.zijunzhao.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon_io/android-chrome-512x512.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `daju`,
        path: `${__dirname}/src/images/daju`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // for all options, https://www.gatsbyjs.com/plugins/gatsby-remark-images/
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
  ],
};

export default config;
