import { typography } from '../../themes/typography';
import { FontWeightsVariants, TypographyTypes } from '../../types';

export default {
  title: 'Theme',
  argTypes: {
    weight: {
      options: [400, 500, 700],
      control: 'radio'
    }
  }
};

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
