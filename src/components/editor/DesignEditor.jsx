export default function DesignEditor({
  onEditColor,
  onEditFont,
  color,
  font,
}) {
  return (
    <div className="editor">
      <h2 className="editor-header">Design</h2>

      <div className="row">
        <span>Font Style</span>
        <div className="font-style">
          <label>
            <input type="radio" value="sans-serif" onChange={onEditFont} checked={font === 'sans-serif'} />
            Sans Serif
          </label>
          <label>
            <input type="radio" value="serif" onChange={onEditFont} checked={font === 'serif'} />
            Serif
          </label>
        </div>
      </div>

      <div className="row">
        <span>Accent Color</span>
        <input type="color" value={color} onChange={onEditColor} />
      </div>

      {/* <p>
        Font Style:
        <label>
          <input type="radio" value="sans-serif" onChange={onEditFont} checked={font === 'sans-serif'} />
          Sans Serif
        </label>
        <label>
          <input type="radio" value="serif" onChange={onEditFont} checked={font === 'serif'} />
          Serif
        </label>
      </p>

      <p>
        <label>
          Accent Color:
          <input type="color" value={color} onChange={onEditColor} />
        </label>
      </p> */}

    </div>
  );
}
