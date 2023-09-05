import PropTypes from 'prop-types';
import { WarningP } from '../style/MyPageInfo';
import { InputDesign } from '../style/MyPageInfo';

export default function WarningMessage({
  valid,
  message,
  changeHandler,
  inputName,
}) {
  return (
    <div>
      <p>{inputName}</p>
      {<InputDesign onChange={changeHandler} />}
      {!valid ? <WarningP>{message}</WarningP> : null}
    </div>
  );
}

WarningMessage.propTypes = {
  valid: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};
