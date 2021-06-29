import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import {BgImage} from "gbimage-bridge"
import Container from "../components/UI/Container"
import Slider from "react-slick"
import '../components/UI/Slider/slick.css'
import {PrevArrow, NextArrow} from "../components/UI/Slider/SliderArrows"

const IndexPage = () => {
  const {presentationImage} = useStaticQuery(graphql`
    query {
      presentationImage: file(relativePath: {eq: "forum-presentation.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(quality: 85, placeholder: BLURRED, webpOptions: {quality: 85}, width: 1920, height: 440)
        }
      }
    }
  `)

  const pluginImage = getImage(presentationImage)

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Layout>
      <Seo title="Home page | Top forum 2021" />
      <PresentationBg image={pluginImage}>
        <div>
          <Container>
            <PresentationWrapper>
              <Slider {...settings}>
                <div>
                  <PresentationItem>
                    <PresentationDate>
                      <time dateTime="2021-10-26">
                        <span className="date">26-27</span><br/><span className="month">OCTOBER</span><br/><span className="year">2021</span>
                      </time>
                    </PresentationDate>
                    <PresentationInfo>
                      <PresentationInfoTitle>WEALTH TOP FORUM ISRAEL 2021</PresentationInfoTitle>
                      <PresentationInfoText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      </PresentationInfoText>
                      <PresentationInfoCountry>Barcelona</PresentationInfoCountry>
                    </PresentationInfo>
                  </PresentationItem>
                </div>
                <div>
                  <PresentationItem>
                    <PresentationDate>
                      <time dateTime="2021-11-23">
                        <span className="date">23-24</span><br/><span className="month">NOVEMBER</span><br/><span className="year">2021</span>
                      </time>
                    </PresentationDate>
                    <PresentationInfo>
                      <PresentationInfoTitle>WEALTH TOP FORUM ISRAEL 2021</PresentationInfoTitle>
                      <PresentationInfoText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                      </PresentationInfoText>
                      <PresentationInfoCountry>Barcelona</PresentationInfoCountry>
                    </PresentationInfo>
                  </PresentationItem>
                </div>
              </Slider>
            </PresentationWrapper>
          </Container>
        </div>
      </PresentationBg>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores culpa delectus ducimus
        ex impedit, iste iusto magni maiores, mollitia nobis nostrum officia perferendis possimus quaerat recusandae
        tenetur voluptatem.
      </div>
      <div>Enim iusto nobis nostrum quae suscipit voluptate. Beatae cum cumque debitis dolore doloremque eum id in
        ipsam, laudantium minima molestiae mollitia neque nihil nobis officia officiis repellat sit tempora ullam?
      </div>
      <div>Commodi cumque deserunt dolores, itaque, magni, natus officia perspiciatis quos reiciendis repellat rerum
        sapiente voluptatibus. Animi aperiam dolorem et, facere ipsam libero modi natus optio provident repudiandae,
        totam unde vero?
      </div>
      <div>Dolore, magni totam. Ad autem itaque magnam nostrum quas quibusdam quis repellendus saepe sunt tempore.
        Commodi dolores laborum natus quas sunt voluptatibus. Accusamus aut, dicta modi placeat praesentium reiciendis
        reprehenderit?
      </div>
      <div>Commodi earum modi qui repellendus sapiente? Aspernatur, assumenda consequatur dolores, et eum ex excepturi
        fugit inventore, libero minus molestias numquam placeat porro repellat ut velit voluptas. Adipisci dignissimos
        expedita quod?
      </div>
      <div>Accusamus aspernatur assumenda at autem consectetur consequuntur corporis culpa deserunt dicta dolore dolorem
        enim esse libero magnam maiores nam natus nemo numquam, odit quas quasi quo, saepe, sed similique unde!
      </div>
      <div>Ad eos facere itaque reiciendis. Aliquid commodi corporis delectus eligendi est facilis officiis omnis rem
        repellendus, saepe. Aperiam cupiditate minima neque obcaecati placeat, porro quae quibusdam, reprehenderit
        veritatis vero voluptas.
      </div>
      <div>Aspernatur autem dolorum fuga maiores, modi nobis, obcaecati quis saepe tempora totam ullam voluptatibus.
        Aliquam animi debitis eaque error fuga impedit iste iusto labore nostrum, perspiciatis provident reprehenderit
        suscipit voluptas.
      </div>
      <div>A alias, consectetur eum harum ipsa nihil nisi omnis porro vel! Aliquam, animi aperiam, asperiores aspernatur
        blanditiis commodi dolor facilis non nulla officia pariatur quod quos, ratione vel vitae voluptatem.
      </div>
      <div>Consequatur doloremque expedita, harum labore laboriosam reprehenderit soluta. Accusamus aliquam cum deserunt
        dignissimos dolor, magni maiores minus mollitia quidem quos recusandae rem saepe soluta sunt totam veritatis,
        vitae voluptate, voluptatum!
      </div>
      <div>Aspernatur consequatur dolore est exercitationem nam suscipit velit! At consequatur cumque doloribus eligendi
        necessitatibus nihil porro possimus quaerat tempore ullam? At deserunt, et nisi numquam quae quasi rerum
        similique voluptatibus!
      </div>
      <div>A deleniti distinctio libero, mollitia odio saepe sapiente? Aperiam atque blanditiis commodi consequatur cum
        dolore earum error ipsum maxime natus, nostrum officia optio pariatur qui rem saepe tempora voluptatem. Modi.
      </div>
      <div>Adipisci atque consequatur culpa cupiditate dolor, ea incidunt modi neque nobis provident, sit totam.
        Corporis doloribus eius laborum magnam magni maiores, molestiae non odit officia pariatur placeat qui ut
        veritatis?
      </div>
      <div>At aut consectetur ducimus eveniet ipsum, iste libero nisi nostrum omnis porro, quaerat quia quo quos soluta
        tempore ullam vel veniam veritatis voluptas voluptatibus! Cum dolore facere mollitia possimus similique!
      </div>
      <div>Dolor doloribus eligendi enim iste itaque laborum laudantium omnis pariatur provident, quaerat rem, sequi
        sunt, suscipit totam velit? At autem blanditiis, culpa cumque ipsam laudantium provident qui sit temporibus
        voluptas.
      </div>
      <div>Amet deserunt eos expedita inventore itaque iusto molestias nihil omnis perferendis, voluptatibus. Aliquam
        aspernatur culpa debitis iste neque obcaecati rem temporibus voluptatum! Autem cum eveniet maiores minus,
        obcaecati sed vero.
      </div>
      <div>Amet at ea quam quasi velit? Accusamus at commodi deleniti error et eum numquam officiis quod ullam! Dolorem
        ducimus error in itaque laudantium maiores maxime quis, quod reprehenderit sequi, sit.
      </div>
      <div>Cumque cupiditate dolor doloribus esse exercitationem explicabo ipsum iste magnam minima nihil optio
        perferendis, quaerat quasi sapiente sunt, suscipit totam vel veniam veritatis voluptas! Accusamus eligendi
        excepturi quasi sequi ut.
      </div>
      <div>Architecto eum nulla voluptate. Ad architecto consectetur culpa deserunt dicta doloremque doloribus, error
        harum illo ipsa, laboriosam nulla perferendis perspiciatis placeat quae quas quibusdam quidem recusandae tempora
        veniam vitae voluptatem.
      </div>
      <div>Alias dignissimos quidem soluta tempora voluptatibus. Ab dolores dolorum eaque eos ex exercitationem hic id
        ipsum labore magni minima neque nisi nobis optio pariatur, perspiciatis quibusdam quo similique veritatis vitae?
      </div>
      <div>Beatae blanditiis cupiditate dicta dignissimos dolorem enim, error esse expedita facere hic minus obcaecati
        porro praesentium quos saepe tempora velit, voluptatum. Cum eaque hic labore molestias officiis pariatur quis
        totam!
      </div>
      <div>Amet assumenda, atque delectus deserunt dicta dolores error est facilis fugiat in labore magni molestias
        neque nobis nulla obcaecati omnis quia quod ratione recusandae repellendus, repudiandae, sint totam veniam
        voluptatibus.
      </div>
      <div>A accusamus, aliquam assumenda aut ducimus ex exercitationem id laborum libero molestias non numquam odio
        officiis porro quaerat quis quod, recusandae rem sequi similique temporibus totam velit veritatis vero
        voluptatum?
      </div>
      <div>Accusamus aliquid deleniti dignissimos dolore expedita explicabo hic laborum libero magnam minima molestias
        necessitatibus non officiis omnis, optio possimus praesentium quaerat quibusdam saepe sit sunt suscipit ut
        veritatis voluptas voluptatem?
      </div>
      <div>Aliquid animi assumenda at delectus, dicta eaque iusto laudantium nemo quasi vero! Cumque dolorem iusto
        labore perspiciatis voluptatum. Beatae minus, quidem? Aspernatur atque dignissimos expedita facilis itaque,
        nihil rerum ullam.
      </div>
      <div>Blanditiis commodi consequuntur debitis delectus doloribus et eum, eveniet, harum illo impedit inventore
        maiores molestiae nesciunt nobis omnis perspiciatis quisquam quod rem repellat sapiente, soluta totam unde vitae
        voluptas voluptates.
      </div>
      <div>Accusamus accusantium, alias at consectetur consequatur earum eius ex excepturi exercitationem explicabo
        facere illum in ipsam ipsum laborum molestiae mollitia nostrum nulla perspiciatis quas reiciendis saepe
        similique suscipit, vel velit.
      </div>
      <div>Aspernatur enim excepturi explicabo itaque laborum magnam optio! A ab atque aut consectetur deleniti ea
        eligendi, error exercitationem illo impedit molestiae molestias nulla obcaecati quisquam rem repudiandae sit
        totam velit!
      </div>
      <div>Asperiores aspernatur cupiditate, deleniti distinctio enim error, est eum harum inventore ipsam laboriosam
        maiores minus mollitia nihil nostrum provident quaerat quibusdam quidem quos rem repellendus repudiandae rerum
        sequi, tempore totam?
      </div>
      <div>Accusantium animi aspernatur aut deserunt dignissimos doloremque earum et facere facilis fuga iure minima
        quod ratione, sunt vel voluptatem voluptates. Amet cumque eum facere iusto libero nostrum sequi sint voluptatem.
      </div>
      <div>Cupiditate deserunt, eum libero perferendis temporibus totam veniam? Delectus deleniti ipsa itaque nisi quae.
        Alias aliquid eius enim minus mollitia perspiciatis quo ratione saepe tempore veniam. Accusamus enim magnam
        voluptas!
      </div>
      <div>Aspernatur aut dignissimos dolorem expedita hic ipsam nam, odio praesentium qui saepe ullam ut velit vero?
        Architecto aspernatur dignissimos dolores dolorum illo mollitia quos, ratione, reprehenderit soluta tempora
        voluptates voluptatibus.
      </div>
      <div>Aliquam autem consequuntur debitis earum exercitationem facere laudantium quia quod? Accusantium blanditiis
        cupiditate dicta dignissimos distinctio dolorem eaque enim esse eum ipsa iure modi molestias, praesentium quis
        rem sequi ut!
      </div>
      <div>At est fugiat in minus natus officia voluptatem. Dolor dolorum, ducimus et eveniet itaque laboriosam
        laudantium maxime minima quam recusandae soluta tempore vel! Beatae, consequuntur ex facere nihil rerum sunt?
      </div>
      <div>Ab aut autem consequatur consequuntur culpa delectus deleniti explicabo fugiat impedit, iure iusto laudantium
        odit possimus quaerat quas sapiente totam voluptates. Aliquid deleniti ea explicabo illo pariatur quia rerum
        totam!
      </div>
      <div>Consequatur ducimus eum nesciunt quisquam, quos sunt tempore. Ab, fugiat illum modi neque possimus quibusdam
        repudiandae sequi. Autem, beatae consequuntur dignissimos, distinctio ipsa iure nesciunt optio recusandae
        suscipit tenetur totam!
      </div>
      <div>At atque consectetur eaque eligendi, iste itaque officia provident quam quasi ratione sequi soluta.
        Consectetur culpa est ipsa, ipsam iusto magnam mollitia nam numquam officia placeat provident quasi reiciendis
        suscipit!
      </div>
      <div>Alias aspernatur blanditiis commodi cupiditate dignissimos dolor dolores eaque est harum ipsum laborum
        mollitia necessitatibus, nesciunt nostrum omnis quae sed tempore voluptate! Aperiam cum, expedita fuga iure
        labore sunt temporibus!
      </div>
      <div>Adipisci aliquid corporis dignissimos dolorem eaque est excepturi, fugiat harum ipsa iure maiores maxime
        minus molestias necessitatibus nesciunt nisi omnis perspiciatis quam ratione reiciendis repellendus repudiandae
        sequi, sunt suscipit totam?
      </div>
      <div>Atque autem debitis doloribus enim eos est illo, ipsa neque, porro sapiente soluta tempore voluptatibus
        voluptatum! Animi asperiores doloremque dolorum eos ex itaque nobis nostrum, omnis, provident, quam ratione
        voluptate.
      </div>
      <div>Ea perspiciatis suscipit velit voluptatibus! Ab consectetur culpa est eum fugit hic illum iste nesciunt
        provident recusandae reiciendis, similique tenetur! Asperiores consectetur dignissimos incidunt nisi. Accusamus
        et officiis sapiente sit!
      </div>
      <div>Dolores eum exercitationem ipsam molestiae nulla, provident quidem sint tenetur. Accusamus commodi cum cumque
        debitis deleniti dolore enim est ex hic incidunt, iure laborum modi pariatur, quos repellat temporibus, vero.
      </div>
      <div>Adipisci, aspernatur assumenda debitis enim error et illum labore mollitia nobis obcaecati odio odit officia
        similique, ut velit voluptas voluptatibus? Aspernatur commodi dicta error fuga fugit minima molestiae
        repellendus voluptas!
      </div>
      <div>Accusantium eum eveniet laborum neque totam. Alias aut corporis nemo officiis! Alias aliquam aspernatur
        blanditiis est optio repellendus repudiandae vero? Amet architecto debitis distinctio illo odio quaerat quasi,
        qui reprehenderit?
      </div>
      <div>Accusantium ad aut cum doloremque ea exercitationem id illo ipsum laudantium natus nemo nesciunt nihil nobis
        odio omnis pariatur provident quidem ratione recusandae reiciendis repellendus, sint soluta sunt vel veritatis.
      </div>
      <div>Delectus distinctio, dolore ducimus hic id ipsa laborum magni necessitatibus non temporibus. Eos maxime nisi
        officia quibusdam rem. Autem beatae cupiditate earum laboriosam magni maxime quidem, quo tempora vitae
        voluptate.
      </div>
      <div>Assumenda consequatur cum debitis, distinctio doloribus ducimus, ea est facilis illum in iure, labore laborum
        maiores minima molestias mollitia nam neque officiis praesentium quas quasi qui quidem quod soluta voluptatum!
      </div>
      <div>Animi deleniti laborum magnam necessitatibus tenetur ullam. Asperiores aspernatur consequuntur deserunt ea
        eius est et excepturi, facilis laborum libero maiores optio, perferendis placeat quam quasi quisquam, quos
        repudiandae sunt veritatis!
      </div>
      <div>Doloremque enim eos esse illo in quidem sint? Cum cupiditate dolores earum esse facere fugit inventore labore
        mollitia nihil numquam pariatur, quidem quis ullam veritatis voluptas. Aut deleniti maiores nemo.
      </div>
      <div>Ab at autem consectetur debitis dicta distinctio eligendi facere impedit inventore magnam minima nesciunt
        officia officiis perspiciatis quibusdam repellendus repudiandae similique sit temporibus, ut. Aliquam
        consectetur cumque facilis inventore neque?
      </div>
    </Layout>
  )
}

const PresentationBg = styled(BgImage)`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 440px;
`

const PresentationWrapper = styled.div`
  margin: 0 40px 0 auto;
  padding: 10px;
  width: 430px;
  min-height: 180px;
  border: 1px solid #fff;
`

const PresentationItem = styled.div`
  display: flex;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.9);
`

const PresentationDate = styled.div`
  margin-right: 20px;
  padding: 25px 10px;
  text-align: center;
  width: 100%;
  max-width: 130px;
  border: 1px solid #cea65b;
  background-color: #fff;
  color: #c99c47;
  font-weight: 900;
  
  .date {
    font-size: 29px;
  }
  .month {
    font-size: 18px;
  }
  .year {
    font-size: 34px;
  }
`

const PresentationInfo = styled.div``

const PresentationInfoTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: 700;
  color: #c99c47;
  font-size: 14px;
`

const PresentationInfoText = styled.p`
  margin-bottom: 10px;
  line-height: 1.28;
`

const PresentationInfoCountry = styled.p`
  color: #757575;
`

export default IndexPage