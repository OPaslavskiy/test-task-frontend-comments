import { Item, AreaName, Button, Initials, Text } from "./Comment.styled";
import { IoMdClose } from "react-icons/io";
import { firstNameLetters } from "../../services";

export const Comment = ({ handleClick, body, id, user: { username } }) => (
  <Item>
    <Initials>{firstNameLetters(username)}</Initials>
    <AreaName>{username}</AreaName>
    <Text>{body}</Text>
    <Button type="button" onClick={() => handleClick(id)}>
      <IoMdClose />
    </Button>
  </Item>
);
