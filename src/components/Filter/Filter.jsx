export const Filter = ({ value, handleChange }) => {
  return (
    <div style={{ marginLeft: '70px' }}>
      <input
        type="text"
        name="filter"
        onChange={evt => handleChange(evt.target.value)}
        value={value}
      />
    </div>
  );
};
