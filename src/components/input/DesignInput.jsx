export default function DesignInput({ data, onInput }) {
  return (
    <div className="input-form input-design">
      <h2>Design</h2>

      <p>Change Font Style</p>
      <label>
        <input type="radio" value="sans-serif" onChange={onInput} checked={data === 'sans-serif'} />
        Sans Serif
      </label>
      <label>
        <input type="radio" value="serif" onChange={onInput} checked={data === 'serif'} />
        Serif
      </label>
    </div>
  );
}
