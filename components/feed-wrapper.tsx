import { WrapperProps } from "@/types/wrapper";

export function FeedWrapper(props: WrapperProps) {
  return <div className="relative top-0 flex-1 pb-10">{props.children}</div>;
}
