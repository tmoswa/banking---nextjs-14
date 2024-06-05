import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "1",
    email: "",
    city: "",
    address: "",
    address1: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
    userId: "2",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Timothy",
    lastName: "Moswa",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
     
    </main>
  );
}
