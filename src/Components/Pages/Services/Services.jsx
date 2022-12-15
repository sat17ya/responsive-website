import React from 'react';
import DataSection from '../../DataSection';
import { homeObjOne,homeObjThree} from './ServicesData';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <DataSection {...homeObjOne} />
      <DataSection {...homeObjThree} />
    </>
  );
}

export default Services;