import React from 'react';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RegionStyles from '../../../styles/Regions.module.css';

const GroundsList = ({ grounds }) => {
  return (
    <ul className={RegionStyles.List_col}>
      {grounds.map((ground, i) => (
        <li key={i}>
          <Link href={`/ground/${encodeURI(ground.Name)}`}>
            <a>
              <LocationOnIcon />
              {ground.Name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GroundsList;
