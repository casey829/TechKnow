import React, { useContext } from "react";
import { UserContext } from "../../services/userContext";

function Footer() {
  const { user } = useContext(UserContext);
  return (
    <>
      {!user && (
        <footer className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-2.5 border-t border-slate-500 fixed bottom-0 inset-x-0 z-50 bg-slate-50">
          Footer
        </footer>
      )}
    </>
  );
}

export default Footer;
