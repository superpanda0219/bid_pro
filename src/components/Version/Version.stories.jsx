import { Version } from "./Version";

export default {
  title: "Components/Version",
  component: Version,
};

const Template = (args) => <Version {...args} />;
export const ExampleWithVersion = Template.bind({});
ExampleWithVersion.args = {
  current: "1.0.0",
};
