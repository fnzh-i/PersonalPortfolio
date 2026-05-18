import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full max-w-[1280px] mx-auto px-16 py-12 flex flex-col md:flex-row justify-between items-center border-t border-black/5 mt-10">
      <div className="text-[11px] text-secondary tracking-[0.2em] font-bold">FN.SH</div>
      <div className="text-[14px] text-secondary/60">© 2026 FNSH. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
