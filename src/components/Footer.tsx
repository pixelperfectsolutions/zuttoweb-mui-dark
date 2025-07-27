import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function CustomFooter() {
  return (
    <Footer container className="bg-[#f5efe6] text-[#181511] mt-8 border-t border-[#e5d6be] pt-10 pb-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 px-4">
        
        {/* ✅ Top Section: Always 3 Columns in One Row */}
        <div className="w-full flex flex-row gap-6 pb-6 border-b border-[#e5d6be]">
          {/* Column 1: Links */}
          <div className="w-1/3">
            <h3 className="font-bold mb-3 text-lg">Links</h3>
            <FooterLinkGroup col>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/travel-hub">Travel Hub</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Column 2: Contact */}
          <div className="w-1/3 text-left">
            <h3 className="font-bold mb-3 text-lg">Contact</h3>
            <p className="text-sm mb-1">📍 Coimbatore, India</p>
            <FooterLink
              href="mailto:support@zutto.in"
              className="text-[#1a237e] hover:underline text-sm"
            >
              support@zutto.in
            </FooterLink>
          </div>

          {/* Column 3: Support + Social */}
          <div className="w-1/3 text-left">
            <h3 className="font-bold mb-3 text-lg">Support</h3>
            <div className="flex gap-3 mt-2">
              <FooterLink href="#" className="text-[#1a237e] text-sm">Instagram</FooterLink>
              <FooterLink href="#" className="text-[#1a237e] text-sm">LinkedIn</FooterLink>
              <FooterLink href="#" className="text-[#1a237e] text-sm">Twitter</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row gap-4 pt-4 text-xs text-[#6b6b6b] items-center">
          <div className="flex-1 flex justify-start">
            <FooterLink href="/privacy" className="hover:underline">Privacy Policy</FooterLink>
          </div>
          <div className="flex-1 flex justify-center">
            <FooterLink href="/terms" className="hover:underline">Terms of Service</FooterLink>
          </div>
          <div className="flex-1 flex justify-end">
            <FooterCopyright href="#" by="ZUTTO" year={new Date().getFullYear()} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
  