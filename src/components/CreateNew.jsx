import { useField } from "../hooks"

export function CreateNew({ addNew }) {
  const content = useField('content')
  const author = useField('author')
  const info = useField('info')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  const handleClick = () => {
    content.onChange('reset')
    author.onChange('reset')
    info.onChange('reset')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content <input {...content} />
        </div>
        <div>
          Author <input {...author} />
        </div>
        <div>
          Url for more info <input {...info} />
        </div>
        <button type='submit'>Create</button>
        <button type='button' onClick={handleClick}>Reset</button>
      </form>
    </div>
  )

}