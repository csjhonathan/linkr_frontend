import {
  SidePageLogoContainer,
  Logo,
  LogoTitle,
  LogoMessage,
} from '../styles/sideLogo.js';

export default function SideLogo() {
  return (
    <SidePageLogoContainer>
      <Logo>
        <LogoTitle>linkr</LogoTitle>
        <LogoMessage>
          save, share and discover
          the best links on the web
        </LogoMessage>
      </Logo>
    </SidePageLogoContainer>
  );
}
