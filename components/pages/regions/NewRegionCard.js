import React from "react";
import {
  Paper,
  Space,
  Box,
  SimpleGrid,
  Group,
  Button,
  ActionIcon,
  Tooltip,
  Divider,
} from "@mantine/core";
import MarkdownContainer from "../../Structure/MarkdownContainer";
import { H2, H4, P } from "../../type";
import { IconUsers } from "@tabler/icons";
import { IconMap, IconMapPinFilled } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { CTABTN } from "../../buttons";

const NewRegionCard = ({ region, Conference }) => { 
  console.log(region, Conference);
  const isDesktop = useMediaQuery("(min-width: 48em)");
  console.log(isDesktop);
  return (
    <>
      <H2 style={{ margin: "0 0 0 0", fontWeight: 800, lineHeight: "1em" }}>
        {region.Name}
      </H2>
      <Paper
        radius="md"
        withBorder
        shadow="md"
        mb={40}
        p="0"
        sx={{ backgroundColor: "#f1f7ff" }}
      >
        <Group
          position="center"
          style={{
            backgroundColor: Conference.color,
          }}
        >
          <Box w={"100%"} py={"xs"} px="lg">
            <Space h={10} />
            <MarkdownContainer class={`WhiteText`}>
              {region.Blurb}
            </MarkdownContainer>
          </Box>
        </Group>

        <Space h={20} />

        <SimpleGrid
          px="lg"
          breakpoints={[
            { minWidth: "sm", cols: 1 },
            { minWidth: "md", cols: 2 },
          ]}
        >
          <AgeGroups AgeGroups={region.AgeGroups} isDesktop={isDesktop} />
          <Grounds Grounds={region.Grounds} isDesktop={isDesktop} />
        </SimpleGrid>
        <CTA CTA={region.CTA} color={Conference.color} />
      </Paper>
    </>
  );
};

export default NewRegionCard;

const CTA = ({ CTA, color }) => {
  console.log(CTA);
  return (
    <>
      <Divider my={20} mx={50} />
      <P style={{ textAlign: "center" }}>
        Secure your spot for the 2024 season by selecting 'Team' or 'Player'
        registration options below through PlayHQ.
      </P>
      <Group position="center" m={20}>
        {Object.keys(CTA).map((link, i) => {
          return <CTABTN CTA={CTA[link]} key={i} item={i} color={color} />;
        })}
      </Group>
    </>
  );
};


const AgeGroups = ({ AgeGroups, isDesktop }) => {
  return (
    <Box>
      <H4
        style={{
          fontWeight: 400,
          marginBottom: 20,
          textAlign: isDesktop ? "left" : "center",
        }}
      >
        Age Groups: <IconUsers size={20} />
      </H4>
      {AgeGroups.map((age, i) => {
        return (
          <P key={i} style={{ textAlign: isDesktop ? "left" : "center" }}>
            {age.Name}
          </P>
        );
      })}
    </Box>
  );
};

const Grounds = ({ Grounds, isDesktop }) => {
  return (
    <Box>
      <H4
        style={{
          fontWeight: 400,
          marginBottom: 20,
          textAlign: isDesktop ? "right" : "center",
        }}
      >
        <IconMapPinFilled size={20} /> Grounds:{" "}
      </H4>
      {Grounds.map((ground, i) => {
        return (
          <Group my={10} position={isDesktop ? "right" : "center"}>
            <P
              style={{ margin: 0, textAlign: isDesktop ? "right" : "center" }}
              key={i}
            >
              {ground.Name}
            </P>
            <Tooltip label={`View ${ground.Name} on Google Maps`}>
              <ActionIcon
                color="blue"
                size="sm"
                variant="light"
                component="a"
                target="_blank"
                href={`https://maps.google.com/?q=${ground.Lat},${ground.Long}`}
              >
                <IconMap size="1rem" stroke={1} />
              </ActionIcon>
            </Tooltip>
          </Group>
        );
      })}
    </Box>
  );
};
