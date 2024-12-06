import Navbar from "@/components/navigation/navbar";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
