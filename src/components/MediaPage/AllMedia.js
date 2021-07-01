// {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/media/"}}) {
//   nodes {
//     id
//     html
//     frontmatter {
//       slug
//       articleTitle
//       featuredImage {
//         childImageSharp {
//           gatsbyImageData(
//             width: 360
//           height: 220
//           webpOptions: {quality: 80}
//           quality: 80
//           placeholder: BLURRED
//           layout: CONSTRAINED
//         )
//         }
//       }
//     }
//   }
// }
// }