import { Icon, icons, IconVariant } from '../../components/Icon/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons'
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Icons = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 100px)',
      gridGap: 20
    }}
  >
    {Object.keys(icons).map(icon => (
      <div key={icon}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8
          }}
        >
          <Icon size={50} icon={icon as IconVariant} />
          <span style={{ textAlign: 'center' }}>{icon}</span>
        </div>
      </div>
    ))}
  </div>
);
