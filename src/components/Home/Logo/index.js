import LogoWasif from '../../../assets/images/WasifBackground.png';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoWasif} alt="JavaScript, Developer" />
    </div>
  );
};

export default Logo;
