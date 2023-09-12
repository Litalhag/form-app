function InputField({ label, type, name, value, error, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        className={error ? 'error' : ''} 
        onChange={onChange}         
      />
      <div className="error-message">{error}</div>
    </div>
  );
}

export default InputField;