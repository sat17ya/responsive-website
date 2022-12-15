import React from 'react';
import DataSection from '../../DataSection';
import { homeObjOne, homeObjTwo } from './ProductData';


function Products() {
  return (
    <>
      <DataSection {...homeObjOne} />
      <DataSection {...homeObjTwo} />
    </>
  );
}

export default Products;