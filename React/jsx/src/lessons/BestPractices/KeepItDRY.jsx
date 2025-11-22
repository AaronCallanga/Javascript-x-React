// ✔ Keep JSX DRY (Don't Repeat Yourself) using Logic and Variables

//Use JavaScript logic outside the return() statement to prepare data, calculate values, or build complex class names. This keeps the JSX clean and declarative.
// Bad Practice (Verbose JSX):
const StatusComponent1 = ({ status }) => {
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

// Good Practice (DRY using external logic and variables):
const StatusComponent = ({ status }) => {
  // Logic calculated beforehand
  const isActive = status === 'active';
  const statusColor = isActive ? 'green' : status === 'pending' ? 'orange' : 'red'; // or use inline switch
  const fontWeight = isActive ? 'bold' : 'normal';
  const statusText = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div>
      {/* JSX is now simple and clean */}
      <span style={{ color: statusColor, fontWeight: fontWeight }}>
        {statusText}
      </span>
    </div>
  );
};

