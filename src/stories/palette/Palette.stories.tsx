import { ThemeModes, themes } from '../../themes';
import { PaletteColorNames, Theme } from '../../types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme/Palette',
  argTypes: {}
};

interface TemplateProps {
  theme: Theme;
}

const Template = ({ theme }: TemplateProps) => (
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light = Template.bind({});
Light.args = { theme: themes[ThemeModes.light] };

export const Dark = Template.bind({});
Dark.args = { theme: themes[ThemeModes.dark] };
