import * as React from "react"
export default function Foo(props) {
  return (
    <>
      <h1>Client site route for /app2/[param1]</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}
