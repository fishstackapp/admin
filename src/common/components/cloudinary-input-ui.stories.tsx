import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloudinaryInputUI } from "@app/common/components/cloudinary-input-ui.component";
import { theme } from '@app/core/theme';
import { ThemeProvider } from 'react-admin';

export default {
  title: 'Common/Cloudinary Input',
  component: CloudinaryInputUI,
} as ComponentMeta<typeof CloudinaryInputUI>;

const Template: ComponentStory<typeof CloudinaryInputUI> = (args) => (
  <ThemeProvider theme={theme}>
    <CloudinaryInputUI {...args} />
  </ThemeProvider>
);

export const View = Template.bind({});

View.args = {
  placeholder: 'Головне зображення'
}

