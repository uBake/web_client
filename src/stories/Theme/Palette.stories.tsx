import { DefaultTheme } from 'react-jss';

import { ThemeModes, themes } from '../../themes';
import { PaletteColorNames } from '../../types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Story = {
  title: 'Theme',
  argTypes: {
    theme: {
      options: [ThemeModes.light, ThemeModes.dark],
      mapping: themes,
      labels: {
        [ThemeModes.dark]: themes[ThemeModes.dark],
        [ThemeModes.light]: themes[ThemeModes.light]
      },
      control: 'radio'
    }
  }
};

export default Story;

interface PaletteTemplateProps {
  theme: DefaultTheme;
}

export const Palette = ({
  theme = themes[ThemeModes.light]
}: PaletteTemplateProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 200px)',
      gridGap: 8
    }}
  >
    {Object.keys(theme.palette).map(paletteColorName => (
      <div
        style={{
          display: 'flex',
          background: theme.palette[paletteColorName as PaletteColorNames],
          minHeight: 100,
          position: 'relative'
        }}
        key={paletteColorName}
      >
        <span>
          {paletteColorName[0].toUpperCase() + paletteColorName.slice(1)}
        </span>
        <span style={{ position: 'absolute', bottom: 0, right: 0 }}>
          {theme.palette[paletteColorName as PaletteColorNames]}
        </span>
      </div>
    ))}
  </div>
);
