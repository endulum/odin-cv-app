export default function ExperienceInput({ data, onInput, onAdd }) {
  return (
    <div className="input-form experience-input">
      <h2>Experience</h2>
      {data.map((job) => <JobInput key={job.id} data={job} onInput={onInput} />)}
      <button type="button" onClick={onAdd}>Add Workplace</button>
    </div>
  );
}

function JobInput({ data, onInput }) {
  return (
    <div className="input-section">
      <label>
        Position:
        <input
          type="text"
          value={data.position}
          onChange={(e) => onInput(data.id, 'position', e.target.value)}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          type="text"
          value={data.company}
          onChange={(e) => onInput(data.id, 'company', e.target.value)}
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

      <button type="button" onClick={() => onInput(data.id, null, null)}>Delete Workplace</button>
    </div>
  );
}
