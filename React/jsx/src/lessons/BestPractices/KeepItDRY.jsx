//Use JavaScript logic outside the return() statement to prepare data, calculate values, or build complex class names. This keeps the JSX clean and declarative.
// Bad Practice (Verbose JSX):
const StatusComponent = ({ status }) => {
  return (
    <div>
      {status === 'active' ? (
        <span style={{ color: 'green', fontWeight: 'bold' }}>Active</span>
      ) : status === 'pending' ? (
        <span style={{ color: 'orange' }}>Pending</span>
      ) : (
        <span style={{ color: 'red' }}>Inactive</span>
      )}
    </div>
  );
};

//
