import React from 'react';
import propTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <input type="button" onClick={onDelete} value="Remover" />
    </li>)
}

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.propTypes = {
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired
}

export default TechItem;