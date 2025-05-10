import './style.css';

export const IconButton = ({ label, onSelectName }) => {

  const handleSelect = () => {
    console.log(label);
    onSelectName(label);
  }

  return (
    <button onClick={handleSelect} className="icon-button">
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
