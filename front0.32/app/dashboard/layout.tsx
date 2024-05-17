import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import CardsConversation from "./_components/CardsConversation";
import CardsNewConversation from "./_components/CardsNewConversation";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <section>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex flex-1 overflow-hidden flex-grow">
            <div className="w-1/5 ml-5 mr-1 flex flex-col justify-between">
              <div className="">
                <CardsNewConversation />
              </div>
              <div className="mt-3 flex-grow">
                <CardsConversation />
              </div>
            </div>
            <div className="w-4/5 mr-5 ml-5 flex flex-grow">{children}</div>
          </main>
          <footer className="p-3">
            <Footer />
          </footer>
        </div>
      </section>
    </SessionProvider>
  );
}
