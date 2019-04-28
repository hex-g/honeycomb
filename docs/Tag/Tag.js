import React from 'react'
import { TagWrapper } from './Tag.style'
import PropTypes from 'prop-types';

export const Tag = ({ children, ...props }) => {
  return(
    <TagWrapper {...props}>
      {children}
    </TagWrapper>
  )
}

Tag.propTypes = {
  scales: PropTypes.oneOf(['small', 'normal']),
  background: PropTypes.oneOf(['forestGreen', 'burntSienna', 'rajah', 'persianPink', 'royalBlue', 'cinnabar']),
}

Tag.defaultProps = {
  scales: 'small',
  background: 'forestGreen'
}
