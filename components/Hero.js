
import { Container, Row, Col, Text, Image, Button, Link , Avatar, Dropdown, Input, Spacer, CardVariantsProps, Card, Grid, Loading } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import Player from '../components/Player';



const Hero = () => {
  const text ="If you are struggling with school work, you are not alone. MystudyPal is here to help. We offer AI-powered assistance for essays, math problems, coding, and more.";
  const [showPlayer, setShowPlayer] = useState(false);
  const openPlayer = () => {
      setShowPlayer(true);
  };

  const closePlayer = () => {
      setShowPlayer(false);
  };
    return(
    <Grid.Container >
      <Grid xs>
        <Card
         auto
         animated="false"
         css={{ 
           borderRadius: '$xs', 
           border: '$space$1 solid transparent',
           color: '$green100', // default color
           bg: '$green800', // default background
           fontSize: '$space$9', 
           boxShadow: '$md',
           mw: "1250px",
           '@xs': {
             bg: '$blue800',
             color: '$blue100',
           },
           '@sm': {
             bg: '$yellow800',
             color: '$yellow100',
           },
           '@md': {
             bg: '$purple800',
             color: '$purple100',
           },
           '@lg': {
             bg: '$pink800'
           },
         }}
         >
       {showPlayer && (
              <Player

                  video="/aidemo.MP4"
                  title="MyStudypal.ai Demo"
                  onClose={closePlayer}
              />
          )}
        </Card>
        </Grid>
    <Layout>
      <Container fluid >
        <Row gap={2}>
          <Col>
            <Card css={{ $$cardColor: '$colors$black' }}>
              <Card.Body>
                <Spacer />
                <Text alt='text'
                  h1
                  size={65}
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                  weight="bold"
                >
                  Get the help
                </Text>
                <Text
                  h1
                  size={65}
                  css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                  }}
                  weight="bold"
                >
                  you need when
                </Text>
                
                <Text
                alt='text'
                  h1
                  size={65}
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                  weight="bold"
                >
                 you need it.
                </Text>
                <Text h6>{text}</Text>
                <Text color="white" blockquote>Essay | Math | Code | Research Paper | Science | more..</Text>
                <Grid.Container gap={2}>
                <Grid>
                 <Button bordered color="gradient"  auto ghost as={Link} href="https://signal.group/#CjQKIPkiXSSZh5xO7uE_MjwpW286JEyXKcHLSaj1qd_DaDQnEhCP-IUZly4mD9a-8azCy9wP">
                              Get Access Now
                              <Spacer/>
                             <Loading type="points-opacity" color="currentColor" size="sm" />
                  </Button>
                </Grid>
               <Grid>
                 <Button bordered color="warning" ghost auto onClick={openPlayer}>
                            Live Demo
                 </Button>
              </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card css={{ $$cardColor: '$colors$black' }}
              isPressable
              isHoverable>
              <Card.Body>
               <Spacer />
                <Image src={'/MyStudyPal.jpg'}
                       width={550}
                       height={450}
                       alt='Mystudypal_HeroLogo'
                 >
                </Image>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </Layout>
    </Grid.Container>
    )

}

export default Hero;