import { ComponentMeta } from '@storybook/react';

import { Card as StoryBase } from '../../components/Card/Card';
import { Image } from '../../components/Image/Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: StoryBase
} as ComponentMeta<typeof StoryBase>;

export const Card = {
  args: {
    children: (
      <div>
        <Image
          ratio='16/9'
          alt='img'
          src='https://picsum.photos/300/200'
          width={300}
          unoptimized
        />
        <div style={{ padding: 20 }}>
          <h3>Title</h3>
          <span>Dynamic Content</span>
        </div>
      </div>
    )
  }
};
