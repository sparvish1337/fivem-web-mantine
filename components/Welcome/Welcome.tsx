'use client';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/carousel/styles.css';
import { Title, Text, Modal, Image, Tabs, Button, Center, Group, Accordion, Container, Dialog, TextInput, ActionIcon, AspectRatio, Card, SimpleGrid, rem, Avatar, Anchor, Grid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './Welcome.module.css';
import { IconBrandDiscordFilled, IconClipboard, IconUserExclamation, IconPhoto, IconQuestionMark, IconBrandGithubFilled, IconHomeFilled, IconNews } from '@tabler/icons-react';
import { useState } from 'react';

const images = [
  'https://cdn.discordapp.com/attachments/1080131172719394887/1279003624458158122/image.png?ex=66d2dc72&is=66d18af2&hm=4bea3d95dab05026d8e75129b4f3e7561e926e9659d4d86a5571adae1579af18&',
  'https://cdn.discordapp.com/attachments/1080131172719394887/1279006964604469298/image.png?ex=66d2df8f&is=66d18e0f&hm=37b9a106a76979808149ee5a01cbb2acc16c61596542cf45d61618982dd35223&',
];

const mockdata = [
  {
    title: 'Olof Palme Skjuten',
    image: 'https://imgs.search.brave.com/NPp7Hi9vGhotchcQ_z7On1jlNyIsQNuBPI9UtKf_AhU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvNDgwL2Nw/c3Byb2RwYi9BNkQ3/L3Byb2R1Y3Rpb24v/XzExMjcxMTcyNF9n/ZXR0eWltYWdlcy01/NDM5MDEyMDAuanBn/LndlYnA',
    date: 'Augusti 30, 2024',
  },
  {
    title: 'Nyhet 3',
    image: 'https://cdn.assistantscenter.com/lzrbghud',
    date: 'Augusti 31, 2024',
  },
  {
    title: 'Nyhet 2',
    image: 'https://cdn.assistantscenter.com/lzrbghud',
    date: 'Augusti 32, 2024',
  },
  {
    title: 'Nyhet 1',
    image: 'https://cdn.assistantscenter.com/lzrbghud',
    date: 'Augusti 43, 2024',
  },
];

export function Welcome() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedd, setOpened] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [name2, setName2] = useState('');
  const [age2, setAge2] = useState('');
  const [question1_2, setQuestion1_2] = useState('');
  const [question2_2, setQuestion2_2] = useState('');
  const [discordid, setDiscordID] = useState('');

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const sendSuggestionToDiscord = async () => {
    if (!suggestion) return;

    const webhookUrl = 'https://discord.com/api/webhooks/1280918747850215555/nRiW1dA6b7WivKL3cko3uD68LuC03-W_xhnm6DOaNq_MYKBZmkNpfNbshs7NbyPZBYJa';
    const embedMessage = {
      embeds: [
        {
          title: "Nytt Förslag",
          description: suggestion,
          color: 0x00ff00,
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedMessage),
      });

      if (response.ok) {
        console.log('Förslaget skickades till Discord!');
        setSuggestion(''); // Rensa input-fältet efter lyckad skickning
        setOpened(false); // Stäng dialogen
      } else {
        console.error('Något gick fel när förslaget skulle skickas till Discord.');
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
    }
  };

  const submitForm1 = async () => {
    if (!name || !age || !question1 || !question2 || !question3) return;

    const webhookUrl = 'https://discord.com/api/webhooks/1280918747850215555/nRiW1dA6b7WivKL3cko3uD68LuC03-W_xhnm6DOaNq_MYKBZmkNpfNbshs7NbyPZBYJa';
    const embedMessage = {
      embeds: [
        {
          title: "Ansökan Form 1",
          fields: [
            { name: "Namn", value: name },
            { name: "Ålder", value: age },
            { name: "Fråga 1", value: question1 },
            { name: "Fråga 2", value: question2 },
            { name: "Discord ID", value: question3 },
          ],
          color: 0x00ff00,
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedMessage),
      });

      if (response.ok) {
        console.log('Form 1 skickades till Discord!');
        setName('');
        setAge('');
        setQuestion1('');
        setQuestion2('');
        setQuestion3('');
      } else {
        console.error('Något gick fel när Form 1 skulle skickas till Discord.');
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
    }
  };

  const submitForm2 = async () => {
    if (!name2 || !age2 || !question1_2 || !question2_2) return;

    const webhookUrl = 'https://discord.com/api/webhooks/1280918747850215555/nRiW1dA6b7WivKL3cko3uD68LuC03-W_xhnm6DOaNq_MYKBZmkNpfNbshs7NbyPZBYJa';
    const embedMessage = {
      embeds: [
        {
          title: "Ansökan Form 2",
          fields: [
            { name: "Namn", value: name2 },
            { name: "Ålder", value: age2 },
            { name: "Fråga 1", value: question1_2 },
            { name: "Fråga 2", value: question2_2 },
            { name: "Discord ID", value: discordid },
          ],
          color: 0x00ff00,
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedMessage),
      });

      if (response.ok) {
        console.log('Form 2 skickades till Discord!');
        setName2('');
        setAge2('');
        setQuestion1_2('');
        setQuestion2_2('');
        setDiscordID('');
      } else {
        console.error('Något gick fel när Form 2 skulle skickas till Discord.');
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Tabs classNames={classes} mt={20} variant="unstyled" color="green" defaultValue="home">
        <Tabs.List justify="center">
          <Tabs.Tab
            leftSection={<IconHomeFilled style={{ width: rem(20), height: rem(20) }} />}
            variant='tonal' w={200} value="home">HEM</Tabs.Tab>
          <Tabs.Tab
            leftSection={<IconClipboard style={{ width: rem(20), height: rem(20) }} />}
            variant='tonal' w={200} value="apply">ANSÖK</Tabs.Tab>
          <Tabs.Tab
            leftSection={<IconNews style={{ width: rem(20), height: rem(20) }} />}
            variant='tonal' w={200} value="news">NYHETER</Tabs.Tab>
          <Tabs.Tab
            leftSection={<IconUserExclamation style={{ width: rem(20), height: rem(20) }} />}
            variant='tonal' w={200} value="staff">STAFF</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="home" pt="xs">
          <Modal size={800} opened={opened} onClose={close} centered radius={10}>
            <Text ta="center" size="lg" maw={680} mx="auto">
              Unknown Roleplay Sneak Peaks
            </Text>
            <Carousel height={450} mt={25} withIndicators>{slides}</Carousel>
          </Modal>

          <Title className={classes.title} ta="center" mt={130}>
            <Center>
              <Image
                radius="md"
                h={300}
                w="auto"
                fit="contain"
                src="https://i.imgur.com/ZtPGjgi.png"
              />
            </Center>

            <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'lime' }}>
              Unknown
            </Text>
            {' '}Roleplay
          </Title>
          <Text fw={500} c="dimmed" ta="center" size="lg" maw={680} mx="auto" mt="xl">
            På Unknown Roleplay kan dina drömmar bli verklighet. Här får du chansen att skapa precis den karaktär du alltid velat vara. Upplev spännande äventyr tillsammans med dina vänner och möt nya människor längs vägen.
          </Text>
          <Group justify="center" mt="xl">
            <Button.Group>
              <Button
                w={160}
                component="a"
                href='https://discord.gg/v2AkbdnR'
                color='green'
                variant="default"
                leftSection={<IconBrandDiscordFilled size={26} />}
              >
                Discord Server
              </Button>

              <Button
                w={160}
                color='green'
                variant="default"
                onClick={open}
                leftSection={<IconPhoto size={26} />}
              >
                Sneak Peaks
              </Button>

              <Button
                w={160}
                onClick={() => setOpened((o) => !o)}
                color='green'
                variant="default"
                leftSection={<IconQuestionMark size={26} />}
              >
                Förslag
              </Button>

              <Button
                w={160}
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

          <Container mt={220} size="630px">
            <Title ta="center" className={classes.maintitle}>
              Frågor & Svar
            </Title>

            <Accordion mt={50} variant="contained">
              <Accordion.Item className={classes.item} value="opening">
                <Accordion.Control>När öppnar servern?</Accordion.Control>
                <Accordion.Panel>
                  Vi siktar på att öppna servern mot slutet av 2024. Innan dess vill vi säkerställa att utvecklingen är helt färdigställd och att allt fungerar optimalt. Vår prioritet är att skapa en stabil och välfungerande serverupplevelse, så vi tar den tid som behövs för att noggrant testa och justera alla funktioner innan lansering.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="whitelist">
                <Accordion.Control>Kommer servern vara whitelistad?</Accordion.Control>
                <Accordion.Panel>
                  Servern kommer inte att vara whitelistad eftersom vi vill att den ska vara öppen för alla. På så sätt kan spelare njuta av att spela med sina vänner och även få möjlighet att träffa nya människor. Detta innebär också att vi behöver ett riktigt bra staff-team för att övervaka servern och säkerställa en positiv spelupplevelse för alla.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>

          <Dialog
            withBorder
            opened={openedd}
            withCloseButton
            onClose={() => setOpened(false)}
            size="lg"
            radius="6"
          >
            <Text size="sm" mb="xs" w={500}>
              Vad skulle du vilja se på servern?
            </Text>

            <Group align="flex-end">
              <TextInput
                withAsterisk
                placeholder="Din idé"
                style={{ flex: 1 }}
                value={suggestion}
                onChange={(event) => setSuggestion(event.currentTarget.value)}
              />

              <Button
                color="green"
                variant="outline"
                onClick={sendSuggestionToDiscord}
              >
                Skicka
              </Button>
            </Group>
          </Dialog>
        </Tabs.Panel>

        <Tabs.Panel value="news" pt="xs">
          <Container py="xl">
            <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="staff" pt="xs">
          <Container py="xl">
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <Card withBorder padding="xl" radius="md" h={420} w={400} className={classes.card}>
                <Card.Section
                  h={140}
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage:
                      'url(https://cdn.assistantscenter.com/m0kolg1z)',
                  }}
                />
                <Avatar
                  src="https://cdn.discordapp.com/avatars/574148074541416448/e8d20156ec6d9d24b8dbb07f216c1f8e.png?size=1024"
                  size={80}
                  radius={80}
                  mx="auto"
                  mt={-30}
                  className={classes.avatar}
                />
                <Text ta="center" fz="lg" fw={500} mt="sm">
                  Theo
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                  Grundare & Utvecklare
                </Text>
                <Group mt="md" justify="center" gap={30}>
                  <div>
                    <Text ta="center" fz="lg" fw={500}>
                      sparvish
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                      Discord
                    </Text>
                  </div>
                  <div>
                    <Text ta="center" fz="lg" fw={500}>
                      <Anchor href='https://github.com/sparvish1337/'>
                        sparvish1337
                      </Anchor>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                      GitHub
                    </Text>
                  </div>
                </Group>
                <Button fullWidth radius="md" mt="xl" size="md" variant="outline" color='green'>
                  Contact
                </Button>
              </Card>

              
            </SimpleGrid>
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="apply" pt="xs">
          <Container py="xl">
            <Center>
              <Group gap={100}>
                <Card withBorder padding="xl" radius="md" className={classes.card} w={350}>
                  <Title ta="center" fz="lg" fw={500} mt="sm">
                    Whitelist Ansökan
                  </Title>
                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Namn"
                        withAsterisk
                        placeholder="Skriv ditt namn"
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Ålder"
                        withAsterisk
                        placeholder="Skriv din ålder"
                        value={age}
                        onChange={(event) => setAge(event.currentTarget.value)}
                      />
                    </Grid.Col>
                  </Grid>
                  <TextInput
                    label="Varför vill du bli whitelist?"
                    withAsterisk
                    placeholder="Skriv ditt svar på frågan"
                    value={question1}
                    onChange={(event) => setQuestion1(event.currentTarget.value)}
                    mt="md"
                  />
                  <TextInput
                    label="Varför borde vi godkänna dig?"
                    withAsterisk
                    placeholder="Skriv ditt svar på frågan"
                    value={question2}
                    onChange={(event) => setQuestion2(event.currentTarget.value)}
                    mt="md"
                  />
                  <TextInput
                    label="Discord ID"
                    withAsterisk
                    placeholder="Lägg ditt discord ID här"
                    value={question3}
                    onChange={(event) => setQuestion3(event.currentTarget.value)}
                    mt="md"
                  />
                  <Button fullWidth color="green" variant="outline" mt="xl" onClick={submitForm1}>
                    Skicka Ansökan
                  </Button>
                </Card>

                <Card withBorder padding="xl" radius="md" className={classes.card} w={350}>
                  <Title ta="center" fz="lg" fw={500} mt="sm">
                    Staff Ansökan
                  </Title>
                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Namn"
                        withAsterisk
                        placeholder="Skriv ditt namn"
                        value={name2}
                        onChange={(event) => setName2(event.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Ålder"
                        withAsterisk
                        placeholder="Skriv din ålder"
                        value={age2}
                        onChange={(event) => setAge2(event.currentTarget.value)}
                      />
                    </Grid.Col>
                  </Grid>
                  <TextInput
                    label="Varför vill du bli staff?"
                    withAsterisk
                    placeholder="Skriv ditt svar på fråga 1"
                    value={question1_2}
                    onChange={(event) => setQuestion1_2(event.currentTarget.value)}
                    mt="md"
                  />
                  <TextInput
                    label="Varför borde vi godkänna dig?"
                    withAsterisk
                    placeholder="Skriv ditt svar på fråga 2"
                    value={question2_2}
                    onChange={(event) => setQuestion2_2(event.currentTarget.value)}
                    mt="md"
                  />
                  <TextInput
                    label="Discord ID"
                    withAsterisk
                    placeholder="Lägg ditt discord ID här"
                    value={discordid}
                    onChange={(event) => setQuestion3(event.currentTarget.value)}
                    mt="md"
                  />
                  <Button fullWidth color="green" variant="outline" mt="xl" onClick={submitForm2}>
                    Skicka Ansökan
                  </Button>
                </Card>
              </Group>
            </Center>
          </Container>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
export default Welcome;