import { Button, TextArea, Form } from "./SendForm.styled";

export const SendForm = ({ handleSubmit, value, onChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="Enter a comment"
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};
