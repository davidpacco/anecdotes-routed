import { useState } from "react";

export function useField(name) {
  const [value, setValue] = useState('')

  const onChange = e => setValue(e.target.value)

  return {
    name,
    value,
    onChange,
  }
}