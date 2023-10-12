export default function StartToEnd({ start, end }) {
  return (
    <span className="start-to-end">
      {start && (
        <span>
          {new Date(start).toLocaleString('default', { month: 'short', year: 'numeric' })}
          {' - '}
        </span>
      )}
      {end ? (
        <span>
          {new Date(end).toLocaleString('default', { month: 'short', year: 'numeric' })}
        </span>
      ) : (
        <span>Present</span>
      )}
    </span>
  );
}
