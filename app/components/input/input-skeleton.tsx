type InputSkeletonProps = React.ComponentProps<"input">;

export function InputSkeleton({ ...props }: InputSkeletonProps) {
  return (
    <input
      className="h-[38px] w-full animate-pulse rounded-md bg-gray-200"
      {...props}
    />
  );
}
