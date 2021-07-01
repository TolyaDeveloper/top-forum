// {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/speakers/"}}) {
//   nodes {
//     id
//     html
//     frontmatter {
//       personName
//       slug
//       featuredImage {
//         childImageSharp {
//           gatsbyImageData(
//             width: 135
//           height: 135
//           webpOptions: {quality: 80}
//           quality: 80
//           placeholder: BLURRED
//           layout: FIXED
//         )
//         }
//       }
//     }
//   }
// }
// }