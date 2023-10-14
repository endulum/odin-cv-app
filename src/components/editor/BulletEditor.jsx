export default function BulletEditor({
  jobId,
  bulletInfo,
  onEditBullet,
  onAddBullet,
}) {
  return (
    <ul className="bullets">
      {bulletInfo.map((bullet) => (
        <li key={bullet.id}>
          <input
            type="text"
            value={bullet.bulletText}
            onChange={(e) => onEditBullet(jobId, bullet.id, e.target.value)}
          />

          <button
            type="button"
            onClick={() => onEditBullet(jobId, bullet.id, undefined)}
          >
            Delete Bullet
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          onClick={() => onAddBullet(jobId)}
        >
          Add Bullet
        </button>
      </li>
    </ul>
  );
}
