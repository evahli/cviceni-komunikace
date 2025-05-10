import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const handleInput = (event) => {
    console.log(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input onChange={handleInput} className="input-field__input" type={type} value={value} />
    </div>
  );
};
