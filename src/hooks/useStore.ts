import { useState, useEffect } from "react"

const store = new Map<string, boolean>()

/**
 * @param {string} id
 * @param {boolean} initialState
 * @description custom hook that wraps useState to persist and update state
 * @returns tuple containing the current state value and a function to update the state.
 *  */
const useStore = (id: string, initialState: boolean) => {
  const storeState = store.get(id)

  const [state, setState] = useState<boolean>(storeState ?? initialState)

  useEffect(() => {
    store.set(id, state)
  }, [state, id])

  return [state, setState] as const
}

export { useStore }
