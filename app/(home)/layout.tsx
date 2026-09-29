import Footer from "@/components/Footer/Footer";

export default function HomLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
        {children}
        <Footer/>
    </div>
  );
}
