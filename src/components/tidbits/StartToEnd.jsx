export default function StartToEnd({ start, end }) {
  return (
    <p>
      {start && (
        <span>
          {new Date(start).toLocaleString('default', { month: 'short', year: 'numeric' })}
        </span>
      )}
      {start && end && (<span> - </span>)}
      {end ? (
        <span>
          {new Date(end).toLocaleString('default', { month: 'short', year: 'numeric' })}
        </span>
      ) : (
        <span>Present</span>
      )}
    </p>
  );
}
