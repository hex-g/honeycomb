import styled from 'styled-components'

const scales = {
  small: `
    padding: 2px 10px;
    font-size: 12px;
  `,
  normal: `
    padding: 4px 20px;
    font-size: 16px;
  `
}

const backgrounds = {
  forestGreen: `background-color: #1ea628;`,
  burntSienna: `background-color: #e9724c;`,
  rajah: `background-color: #f6bd60;`,
  persianPink: `background-color: #f267c0;`,
  royalBlue: `background-color: #544fe9;`,
  cinnabar: `background-color: #E43737;`
}

const getScale = ({ scale }) => scales[scale]
const getBackground = ({ background }) => backgrounds[background]

export const TagWrapper = styled.button`
  ${getScale};
  ${getBackground};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
  margin: 0 5px;
`

