import { Item, AreaName, Button } from "./Comment.styled";
import { IoMdClose } from "react-icons/io";
import { firstNameLetters } from "../../services";

export const Comment = ({ handleClick, body, id, user: { username } }) => (
  <Item>
    <p>{firstNameLetters(username)}</p>
    <AreaName>{username}</AreaName>
    <p>{body}</p>
    <Button type="button" onClick={() => handleClick(id)}>
      <IoMdClose />
    </Button>
  </Item>
);
