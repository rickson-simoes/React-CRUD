import React from 'react';
import PropTypes from 'prop-types';

function TechItem(potato){
 return (
  <li>
    <button onClick={potato.onDelete} type="button">☻</button>   
    {potato.propriedade}              
  </li>
  );
}

TechItem.defaultProps = { 
  propriedade: 'Ocults',
};

TechItem.propTypes = {
  propriedade: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

// Outra forma de declarar as propriedades usando destruturação
// function TechItem({propriedade, onDelete}){
//   return (
//     <li>
//       <button onClick={onDelete} type="button">☻</button>   
//       {propriedade}              
//     </li>
//     );
// }

export default TechItem;