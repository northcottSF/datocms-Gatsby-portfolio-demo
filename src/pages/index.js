import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Styles from '../styles/index.module.css'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'

const IndexPage = ({ data }) => (
  <Layout>
    {/* <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry> */}
<BackgroundImage style={{height:'100vh'}}
fluid={data.datoCmsHome.homeImage.fluid}
backgroundColor={`#040e18`}>
  <h1 className={Styles.test}>Love Your Brand.</h1>
<h2 className={Styles.test}>{data.datoCmsHome.introText}</h2>
</BackgroundImage>

 <div className={Styles.fffContainer}>

 <BackgroundImage style={{height:'100vh'}}
fluid={data.datoCmsHome.formImage.fluid} className={Styles.formFunctionFlow}>
    <div className={Styles.fffContent}>
      <h2 >{data.datoCmsHome.formTitle}</h2>
      <p>{data.datoCmsHome.formDescription}</p>
    </div>
    </BackgroundImage>
    <BackgroundImage style={{height:'100vh'}}
fluid={data.datoCmsHome.functionImage.fluid} className={Styles.formFunctionFlow}>
    <div className={Styles.fffContent}>
      <h2 >{data.datoCmsHome.functionTitle}</h2>
      <p>{data.datoCmsHome.functionDescription}</p>
    </div>
    </BackgroundImage>
    <BackgroundImage style={{height:'100vh'}}
fluid={data.datoCmsHome.flowImage.fluid} className={Styles.formFunctionFlow}>
    <div className={Styles.fffContent}>
      <h2 >{data.datoCmsHome.flowTitle}</h2>
      <p>{data.datoCmsHome.flowDescription}</p>
    </div>
    </BackgroundImage>
    
   
    
    
 </div>
   
    
   
  
 
  

<Masonry className="showcase">
{data.datoCmsHome.workSamples.map(work => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            
              <Img fluid={work.coverImage.fluid} />
            
            <figcaption className="card__caption">
              <h6 className="card__title">
                {work.title}
              </h6>
              
            </figcaption>
          </figure>
        </div>
      ))}
</Masonry>
  </Layout>
)

export default IndexPage

export const backgroundStyles = {
  height:'100vh',
  padding:'50px'
}

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      homeImage{
        fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
    
      introText
      formTitle
      formDescription
      formImage{
        fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      functionTitle
      functionDescription
      functionImage{
        fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      flowTitle
      flowDescription
      flowImage{
        fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    workSamples{
      
       
          title
          coverImage {
                        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                          ...GatsbyDatoCmsFluid_tracedSVG
                         }
                       }
        
      
    }
      
      
    
  }
  }
  `


// export const query = graphql`
//   query IndexQuery {
//     allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           title
//           slug
//           excerpt
//           coverImage {
//             fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `
