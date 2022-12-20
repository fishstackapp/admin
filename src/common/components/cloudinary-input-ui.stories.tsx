import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloudinaryInputUi } from "@app/common/components/cloudinary-input-ui.component";

export default {
  title: 'Common/Cloudinary Input',
  component: CloudinaryInputUi,
} as ComponentMeta<typeof CloudinaryInputUi>;

const Template: ComponentStory<typeof CloudinaryInputUi> = (args) => <CloudinaryInputUi {...args} />;

export const View = Template.bind({});

View.args = {
  placeholder: 'Головне зображення'
}

