export default function GeneralInput({ data, onInput }) {
  return (
    <div className="input-form input-general">
      <h2>General Details</h2>

      <label>
        Name:
        <input
          type="text"
          value={data.name}
          onChange={(e) => { onInput('name', e.target.value); }}
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="tel"
          value={data.tel}
          onChange={(e) => { onInput('tel', e.target.value); }}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={data.email}
          onChange={(e) => { onInput('email', e.target.value); }}
        />
      </label>
      <br />
      <label>
        LinkedIn:
        <input
          type="text"
          value={data.linkedIn}
          onChange={(e) => { onInput('linkedIn', e.target.value); }}
        />
      </label>
      <br />
      <label>
        GitHub:
        <input
          type="text"
          value={data.gitHub}
          onChange={(e) => { onInput('gitHub', e.target.value); }}
        />
      </label>
    </div>
  );
}
