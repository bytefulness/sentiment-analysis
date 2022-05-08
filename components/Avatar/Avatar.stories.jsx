import Avatar from "./index";

export default {
  title: "components/Avatar",
  component: Avatar,
};

export const Default = () => (
  <Avatar image="/avatar.png" name="Erhan" isOnline={true} />
);
