import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="h-full bg-red-300">{children}</div>
      </main>
    </>
  );
}
