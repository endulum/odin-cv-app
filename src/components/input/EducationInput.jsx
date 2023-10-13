export default function EducationInput({ data, onInput, onAdd }) {
  return (
    <div className="input-form education-input">
      <h2>Education</h2>
      {data.map((school) => <SchoolInput key={school.id} data={school} onInput={onInput} />)}
      <button type="button" onClick={onAdd}>Add School</button>
    </div>
  );
}

function SchoolInput({ data, onInput }) {
  return (
    <div className="input-section">
      <label>
        School:
        <input
          type="text"
          value={data.school}
          onChange={(e) => onInput(data.id, 'school', e.target.value)}
        />
      </label>
      <br />
      <label>
        Degree:
        <input
          type="text"
          value={data.degree}
          onChange={(e) => onInput(data.id, 'degree', e.target.value)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={data.location}
          onChange={(e) => onInput(data.id, 'location', e.target.value)}
        />
      </label>
      <br />
      <label>
        Start:
        <input
          type="month"
          value={data.start}
          onChange={(e) => onInput(data.id, 'start', e.target.value)}
        />
      </label>
      <br />
      <label>
        End:
        <input
          type="month"
          value={data.end}
          onChange={(e) => onInput(data.id, 'end', e.target.value)}
        />
      </label>

      <button type="button" onClick={() => onInput(data.id, null, null)}>Delete School</button>
    </div>
  );
}
