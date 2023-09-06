/* eslint-disable react/prop-types */
import { CheckboxContext } from '../CheckboxContext';

function CheckboxGroup({
  label,
  children,
  disabled: groupDisabled,
  values,
  onChange,
}) {
  const isDisabled = (disabled) => disabled || groupDisabled;

  const isChecked = (value) => values.includes(value);

  const toggleValue = ({ checked, value }) => {
    if (checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };

  return (
    <fieldset>
      <legend>{label}</legend>
      <CheckboxContext.Provider value={{ isDisabled, isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </fieldset>
  );
}
export default CheckboxGroup;
