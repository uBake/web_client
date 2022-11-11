import { colors } from '../../themes/colors';
import { ColorNames } from '../../types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme'
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    {Object.keys(colors).map(color => (
      <div key={color}>
        {color[0].toUpperCase() + color.slice(1)}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(13, 150px)',
            gridGap: 8
          }}
        >
          {Object.entries(colors[color as ColorNames]).map(colorObj => (
            <div
              style={{
                display: 'flex',
                background: colorObj[1],
                minHeight: 80,
                position: 'relative'
              }}
              key={colorObj[0]}
            >
              <span>
                {color[0].toUpperCase() + color.slice(1) + ' ' + colorObj[0]}
              </span>
              <span style={{ position: 'absolute', bottom: 0, right: 0 }}>
                {colorObj[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
