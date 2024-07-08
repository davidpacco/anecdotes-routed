export function Notification({ notification }) {
  if (notification === null) return null

  return (
    <div>
      <p>{notification}</p>
    </div>
  )
}