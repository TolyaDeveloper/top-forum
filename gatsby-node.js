const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const {data} = await graphql(`
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

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/sponsors/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/sponsor-detail.js'),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}