import { Card } from '../../components/Card';
import { colors } from '../../themes/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theme/Colors'
  // component: Button
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    {Object.keys(colors).map(color => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {color}
        <div style={{ display: 'flex', gap: 5 }}>
          {Object.entries(colors[color]).map(colorObj => (
            <Card head={colorObj[1]} title={colorObj[0]} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
