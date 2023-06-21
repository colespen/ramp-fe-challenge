import { useState, useEffect } from "react"

const Store = new Map<string | number, unknown>()

/**
 * takes id and initialState and wraps useState to persist and update state
 *  */
const useStore = <S>(id: string | number, initialState: S | (() => S)) => {
  const storeState = Store.has(id) ? (Store.get(id) as S) : undefined

  const [state, dispatch] = useState<S>(storeState ?? initialState)

  useEffect(() => {
    Store.set(id, state)
  }, [state, id])

  return [state, dispatch] as const
}

export { useStore }
