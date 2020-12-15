const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/old-url",
    toPath: "/new-url",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/not_so-pretty_url",
    toPath: "/pretty/url",
    statusCode: 200,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
