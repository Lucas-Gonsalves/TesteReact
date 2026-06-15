type InputProps = React.ComponentProps<"input">

export function Input({
  ...props
}: InputProps) {

  return (
    <input
      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
      {...props}
    />
  )
}