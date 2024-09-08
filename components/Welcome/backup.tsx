'use client';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/carousel/styles.css';
import { Title, Text, Modal, Image, Anchor, Button, ButtonProps, Center, Group, rem, Box, Accordion, Container, Flex, Dialog, TextInput } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './Welcome.module.css';
import { IconBrandDiscordFilled, IconPhoto, IconQuestionMark, IconDownload, IconBrandGithubFilled, IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';



const images = [
  'https://cdn.discordapp.com/attachments/1080131172719394887/1279003624458158122/image.png?ex=66d2dc72&is=66d18af2&hm=4bea3d95dab05026d8e75129b4f3e7561e926e9659d4d86a5571adae1579af18&',
  'https://cdn.discordapp.com/attachments/1080131172719394887/1279006964604469298/image.png?ex=66d2df8f&is=66d18e0f&hm=37b9a106a76979808149ee5a01cbb2acc16c61596542cf45d61618982dd35223&',
];


export function Welcome() {

  const [opened, { open, close }] = useDisclosure(false);

  const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const [openedd, setOpened] = useState(false);

  return (
    <>

      <Modal size={1000} opened={opened} onClose={close} title="Sneak Peaks" centered>

      <Text ta="center" size="lg" maw={680} mx="auto" mt="xl">
        Unknown Roleplay Sneak Peaks
      </Text>
      <Carousel mt={50} withIndicators>{slides}</Carousel>

      </Modal>


      <Title className={classes.title} ta="center" mt={210}>
        <Center>
          <Image
            radius="md"
            h={250}
            w="auto"
            fit="contain"
            src="https://media.discordapp.net/attachments/1160133672146587660/1278241563469676565/ukrp-no-bg.png?ex=66d210f9&is=66d0bf79&hm=a1c02e981962287da1ae52da6f2c85aae336c71ce89a3e30b6f4d5f5bb6ada67&=&format=webp&quality=lossless&width=671&height=671" />
        </Center>

        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'lime' }}>
          Unknown
        </Text>
        {' '}Roleplay
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={680} mx="auto" mt="xl">
        På Unknown Roleplay kan dina drömmar bli verklighet. Här får du chansen att skapa precis den karaktär du alltid velat vara. Upplev spännande äventyr tillsammans med dina vänner och möt nya människor längs vägen.
      </Text>
      <Group justify="center" mt="xl">
      <Button.Group>
        <Button
          component="a"
          href='https://discord.com/'
          color='green'
          variant="default"
          leftSection={<IconBrandDiscordFilled size={26} />}
        >
          Discord Server
        </Button>

        <Button
          color='green'
          variant="default"
          onClick={open}
          leftSection={<IconPhoto size={26} />}
        >
          Sneak Peaks
        </Button>

        <Button
          onClick={() => setOpened((o) => !o)}
          color='green'
          variant="default"
          leftSection={<IconQuestionMark size={26} />}
        >
          Förslag
        </Button>

        <Button
          component="a"
          href='https://github.com/sparvish1337'
          color='green'
          variant="default"
          leftSection={<IconBrandGithubFilled size={26} />}
        >
          GitHub
        </Button>
      </Button.Group>
      </Group>


      <Container mt={220} size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.maintitle}>
        Frågor & Svar
      </Title>

      <Accordion mt={50} variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>När öppnar servern?</Accordion.Control>
          <Accordion.Panel>Vi siktar på att öppna servern mot slutet av 2024. Innan dess vill vi säkerställa att utvecklingen är helt färdigställd och att allt fungerar optimalt. Vår prioritet är att skapa en stabil och välfungerande serverupplevelse, så vi tar den tid som behövs för att noggrant testa och justera alla funktioner innan lansering.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Kommer servern vara whitelistad?</Accordion.Control>
          <Accordion.Panel>Servern kommer inte att vara whitelistad eftersom vi vill att den ska vara öppen för alla. På så sätt kan spelare njuta av att spela med sina vänner och även få möjlighet att träffa nya människor. Detta innebär också att vi behöver ett riktigt bra staff-team för att övervaka servern och säkerställa en positiv spelupplevelse för alla.</Accordion.Panel>
        </Accordion.Item>

        

      </Accordion>
    </Container>
    
    
    <Dialog
            opened={openedd}
            withCloseButton
            onClose={() => setOpened(false)}
            size="lg"
            radius="md"
          >


        <Text size="sm" style={{ marginBottom: 10 }}>
          Skicka ett förslag till servern
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="Skriv ditt förslag här" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Skicka</Button>
        </Group>
      </Dialog>

    </>
    

      

  );
}
