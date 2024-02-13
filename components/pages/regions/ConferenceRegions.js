import React from 'react';
import { SimpleGrid } from '@mantine/core';
import NewRegionCard from './NewRegionCard'; // Adjust the import path as necessary

const ConferenceRegions = ({ regions, Conference }) => {
  return (
    <SimpleGrid cols={1}>
      {regions.map((region, i) => (
        <NewRegionCard key={i} region={region} Conference={Conference} />
      ))}
    </SimpleGrid>
  );
};

export default ConferenceRegions;
