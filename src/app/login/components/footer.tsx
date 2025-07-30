import Logo from "../../../components/logo";

export default function Footer() {
  return (
    <footer
      id="footer-signin"
      className="flex flex-wrap gap-4 items-center justify-center text-[12px] mt-6 mb-4"
    >
      <Logo className="text-lg" logoComponent="text-xl"/>

      <span>© 2025</span>
      <a href="https://www.linkedin.com/legal/user-agreement?trk=linkedin-tc_auth-button_user-agreement">
        User Agreement
      </a>
      <a href="https://www.linkedin.com/legal/privacy-policy?trk=linkedin-tc_auth-button_privacy-policy">
        Privacy Policy
      </a>
      <a href="https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">
        Community Guidelines
      </a>
      <a href="https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">
        Cookie Policy
      </a>
      <a href="https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">
        Copyright Policy
      </a>
      <a href="https://www.linkedin.com/legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy">
        Send Feedback
      </a>
    </footer>
  );
}
