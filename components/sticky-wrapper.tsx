import { WrapperProps } from "@/types/wrapper";

export const StickyWrapper = (props: WrapperProps) => {
  return (
    <div className="sticky bottom-6 hidden w-[368px] self-end lg:block">
      <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4 ">
        {props.children}
      </div>
    </div>
  );
};
