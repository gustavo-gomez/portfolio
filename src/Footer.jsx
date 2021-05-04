import './styles/App.css';
import Icon, {ICON_TYPE} from './util/Icon';

const Footer = () => {
  return (
    <div className={'footer'}>
      <Icon
        iconType={ICON_TYPE.LINKEDIN}
        link={'https://www.linkedin.com/in/luis-gustavo-gomez-fasanando-b523158b/'}
      />
      <Icon
        iconType={ICON_TYPE.WHATSAPP}
        link={'https://wa.me/51945248578?text=Hola%20Gustavo!'}
      />
      <Icon
        iconType={ICON_TYPE.GITHUB}
        link={'https://github.com/gustavo-gomez'}
      />
      <Icon
        iconType={ICON_TYPE.STACKOVERFLOW}
        link={'https://stackoverflow.com/users/5759160/gustavo-g%c3%b3mez-fasanando'}
      />
    </div>
  )
}

export default Footer;