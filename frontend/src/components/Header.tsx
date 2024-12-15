import React from "react";
import { TfiBell } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

class Header extends React.Component {
  render() {
    return (
      <header className="flex flex-row justify-evenly h-[88px] items-center">
        <div>
          <a href="/">
            <img src="../src/assets/images/icon.svg" alt="logo" width="122" />
          </a>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="/cats"
            className="text-center text-[#2e256f] text-base font-medium font-inter py-4 px-2"
          >
            Sahiplen
          </a>
          <a
            href="/cat/create"
            className="text-center text-[#2e256f] text-base font-medium font-inter py-4 px-2"
          >
            Sahiplendir
          </a>
          <a
            href="/careguide"
            className="text-center text-[#2e256f] text-base font-medium font-inter py-4 px-2"
          >
            Bakım Rehberi
          </a>
          <a
            href="/about"
            className="text-center text-[#2e256f] text-base font-medium font-inter py-4 px-2"
          >
            Hakkımızda
          </a>
        </div>
        <div className="flex flex-row gap-4">
          <div className="p-3 rounded-2xl border border-[#5d4fc4]">
            <a href="#">
              <TfiBell size={24} style={{ color: "#675BC8" }} />
            </a>
          </div>
          <div className="flex flex-row gap-[9px] border border-[#5d4fc4] rounded-2xl p-3 text-[#2e256f] text-base font-medium font-inter">
            <CgProfile size={24} style={{ color: "#675BC8" }} />
            <a className="px-2">
              Login
            </a>
            {"|"}
            <a className="px-2">
              Register
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
