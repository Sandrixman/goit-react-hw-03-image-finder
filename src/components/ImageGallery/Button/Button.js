import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export default function Button({ onIncrementPage }) {
  return (
    <Btn type="button" onClick={onIncrementPage}>
      Load more...
    </Btn>
  );
}

Button.propTypes = {
  onIncrementPage: PropTypes.func,
};
