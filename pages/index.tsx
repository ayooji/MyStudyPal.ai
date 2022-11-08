
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Text, Image, Button, Link , Avatar, Dropdown, Input, Spacer, CardVariantsProps, Card, Grid, Loading, Badge, Switch, Table } from '@nextui-org/react';
import React from 'react';
import  NavBar  from '../components/NavBar';
import Hero from '../components/Hero';


export default function Home() {
 
  
  
  
  return (
<>
  <NavBar />
    <Hero/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Spacer/>
    <Grid.Container gap={1} justify="center">
            <Text h4 color="secondary">
               Features
            </Text>
    </Grid.Container>
    <Grid.Container gap={1} justify="center">
            <Text h3>
            The Smartest and Easist way to help with school work
           </Text>
    </Grid.Container>
    <Grid.Container gap={1} justify="center">
      <Grid>
        <Card css={{ mw: "750px" }}>
            <Text color="white" blockquote  >
            MyStudyPal.ai is the smartest and easiest way to get help with your school work. With our AI Coach, you can get help with your homework, projects, essays, and more. You will get instant help, 24/7.
           </Text>
           </Card>
      </Grid>
    </Grid.Container>
    <Container justify="center" >
    <Grid xs alignContent="center">
    <Table
      aria-label="Features table"
      css={{
        height: "auto",
        minWidth: "75%",
      }}
      selectionMode="single"
    >
      <Table.Header>
        <Table.Column>SUBJECT</Table.Column>
        <Table.Column>DIFFICULTY OR LEVEL</Table.Column>
        <Table.Column>WAIT TIME</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Math</Table.Cell>
          <Table.Cell>Any</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Essay</Table.Cell>
          <Table.Cell>Any</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Science</Table.Cell>
          <Table.Cell>Any Science</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Article</Table.Cell>
          <Table.Cell>Any</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="5">
          <Table.Cell>Research Paper</Table.Cell>
          <Table.Cell>Any</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="6">
          <Table.Cell>Coding</Table.Cell>
          <Table.Cell>Any Language</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
        <Table.Row key="7">
          <Table.Cell>Any Other School Problem</Table.Cell>
          <Table.Cell>Any</Table.Cell>
          <Table.Cell>Instantly</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Spacer/>
    <Grid.Container justify="center">
         <Grid  >
                 <Button bordered color="gradient" auto ghost as={Link} href="https://signal.group/#CjQKIPkiXSSZh5xO7uE_MjwpW286JEyXKcHLSaj1qd_DaDQnEhCP-IUZly4mD9a-8azCy9wP" >
                              Get Access Now
                              <Spacer/>
                             <Loading type="points-opacity" color="currentColor" size="sm" />
                  </Button>
                
         </Grid>
     </Grid.Container>
     </Grid>
     <Spacer/>
     <Spacer/>
     <Spacer/>
  </Container>
  <Card css={{ p: "$6", mw: "auto" }} >
      <Card.Header>
        <Image
          alt="Mystudypal.ai"
          src="/MyStudyPal.jpg"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Mystudypal.ai
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>Get Access on Signal</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          The Smartest and easiest way to get help with school work.
        </Text>
      </Card.Body>
      <Card.Footer>
      
        <Link
          
          color="primary"
          target="_blank"
          href="https://signal.group/#CjQKIPkiXSSZh5xO7uE_MjwpW286JEyXKcHLSaj1qd_DaDQnEhCP-IUZly4mD9a-8azCy9wP"
        >
         Get access on Signal | If you dont Signal on your phone or computer, download the app and get access.
        </Link>
      </Card.Footer>
      <Text h6>
           MystudyPal.ai is not liable for any damages resulting from the use of our site or services.
        </Text>
    </Card>

    
</>
) 
}
