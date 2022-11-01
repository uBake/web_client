import { typography } from '../../themes/typography';
import { FontWeightsVariants, TypographyTypes } from '../../types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme',
  // component: Button
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    weight: {
      options: [400, 500, 700],
      // defaultValue: 400,
      control: {
        type: 'select'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Typography = ({ weight }: { weight: FontWeightsVariants }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    {Object.keys(typography.sizes).map((size, i) => (
      <div
        style={{
          display: 'grid',
          gridGap: 8
        }}
        key={size}
      >
        {Object.entries(typography.sizes[size as TypographyTypes]).map(fz => (
          <div key={fz[0]}>
            <span
              style={{
                ...fz[1],
                ...typography.weights[weight]
              }}
            >
              {size[0].toUpperCase() + size.slice(1) + ' ' + fz[0]}
            </span>
          </div>
        ))}
      </div>
    ))}
  </div>
);
