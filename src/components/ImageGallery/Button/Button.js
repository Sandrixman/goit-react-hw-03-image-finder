import { Btn } from './Button.styled';

export default function Button({ incrementPage }) {
  return (
    <Btn type="button" onClick={incrementPage}>
      Load more...
    </Btn>
  );
}
