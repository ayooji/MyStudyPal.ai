import Head from 'next/head'
import { Container, Row, Col, Navbar, Text, Image, Button, Link , Avatar, Dropdown, Input, Spacer, Modal, useModal} from '@nextui-org/react';
import React from 'react';
import {SearchIcon} from './SearchIcon.js';
import { Layout } from './Layout';
import styles from '../styles/Home.module.css'


const NavBar = () => {
  const collapseItems = [
    "Home",
    "FAQ",
     
  ];

  const text ="If youre struggling with school work, you're not alone. MystudyPal is here to help. We offer AI-powered assistance for essays, math problems, coding, and more. Get the help you need, when you need it.";
  const { setVisible, bindings } = useModal();
  return (
    <Layout>
    <Container>
      {/* Navbar */}
      <Navbar isBordered variant={'sticky'}>

        <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Image src={'/MyStudyPal.jpg'} alt={'MyStudyPal_logo'} width={35} height={31} style={{ marginRight: '10px' }} />
        <Spacer/>
          <Text b color="inherit" style={{ marginRight: '20px' }}>
            Mystudypal.ai
          </Text>
          
        
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive onClick={() => setVisible(true)}>
            FAQ
          </Navbar.Link>
          <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Frequenctly Asked Questions
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            <ul>
              <li>
                1.  How do I get access?
                Ans: Download the app called signal, click on the Get Access Now buttons to get access.
              </li>
              <li>
                2.  I have sent my request, whats next?
                Ans: Once your request is received on Signal, we will approve you. 
              </li>
              <li>
                3.  Whats the fee?
                Ans: Pay per work. 
              </li>
            </ul>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button as={Link} href="https://signal.group/#CjQKIPkiXSSZh5xO7uE_MjwpW286JEyXKcHLSaj1qd_DaDQnEhCP-IUZly4mD9a-8azCy9wP" auto onClick={() => setVisible(false)}>
            Get Access Now
          </Button>
        </Modal.Footer>
      </Modal>
          
        </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="https://signal.group/#CjQKIPkiXSSZh5xO7uE_MjwpW286JEyXKcHLSaj1qd_DaDQnEhCP-IUZly4mD9a-8azCy9wP">
              Get Access Now
            </Button>
          </Navbar.Item>
          
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Approved members only...."
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text h5 b color="success" css={{ d: "flex" }}>
                  Welcome to Mystudypal.ai
                </Text>
                <Text h6>Solve any school problem</Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider >
                Any Math Problem
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Essay Writing
              </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Science 
              </Dropdown.Item>
              <Dropdown.Item key="system">
                Articles</Dropdown.Item>
              <Dropdown.Item key="configurations">
                Research Paper</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Coding in any Language
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="success">
                Any School Problem
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>

      </Navbar>

      {/* jumbotron */}

      {/* 3 Displaying Product cards */}

    </Container>
    
    </Layout>
  )
}

export default NavBar;