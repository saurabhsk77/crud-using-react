import "../../App.css";
const BaseInput = ({ label, type, name, value, onChange, isrequired }) => {
  return (
    <div>
      <label htmlFor={name}>{label} : </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={isrequired}
        className="formElement"
      />
    </div>
  );
};
export default BaseInput;
