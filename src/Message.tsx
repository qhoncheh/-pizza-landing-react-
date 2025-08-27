import type { MessageProps } from "./types"

const Message = (props: MessageProps) => {
  return (
      <p> you can see number og count <strong>{props.count}</strong> yes !</p>
  )
}

export default Message