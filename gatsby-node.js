const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const {data: sponsors} = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sponsors/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  sponsors.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/sponsors/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/sponsor-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const {data: exhibitors} = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/exhibitors/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  exhibitors.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/exhibitors/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/exhibitor-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const {data: speakers} = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/speakers/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  speakers.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/speakers/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/speaker-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const {data: articles} = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/media/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  articles.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/media/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/media-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const {data: events} = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/events/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  events.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/upcoming-events/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/event-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}