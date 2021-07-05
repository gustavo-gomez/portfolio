import {useEffect} from 'react';
import '../scss/components/contact.scss';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import photo from '../images/photo.jpg'
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";
import Header from "./Header";
import contact from '../images/contact2.jpeg'
import contactSmall from '../images/contact_small.jpeg'
import {useMediaQuery} from 'react-responsive'

const Contact = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'
  // const isMobile = useMediaQuery({
  //   maxWidth: 850
  // })
  // useEffect(() => {
  //   // console.log("isMobile: ", isMobile)
  //   // if (isMobile)
  //   //   document.body.style.backgroundImage = `url(${contact})`
  //   // else
  //   document.body.style.backgroundImage = `url(${contact})`
  //   document.body.classList.add('contact-background')
  //
  //   return () => {
  //     document.body.style.backgroundImage = `none`
  //     document.body.classList.remove('contact-background')
  //
  //   }
  // }, []);

  // const handleMediaQueryChange = (matches) => {
  //   // matches will be true or false based on the value for the media query
  //   console.log('handleMediaQueryChange: ', matches)
  //   if(matches){
  //     document.body.style.backgroundImage = `url(${contact})`
  //     // document.body.style.backgroundImage = 'none'
  //   }
  //   else{
  //     document.body.style.backgroundImage = `url(${contact})`
  //   }
  // }
  //
  // const isMobileChange = useMediaQuery(
  //   { maxWidth: 850 }, undefined,  handleMediaQueryChange
  // );


  return (
    <>
      <Header/>
      <div className={'contact-section'}>

        <div className={'contact-body'}>
          <div className={'icons-container'}>
            {getSvg(ICON_TYPE.LINKEDIN, 'contact-icon')}
            {getSvg(ICON_TYPE.WHATSAPP, 'contact-icon')}
            {getSvg(ICON_TYPE.EMAIL, 'contact-icon')}
          </div>
          <div className={'description-container'}>
            <h1>{LANGUAGES_TEXT[language].contact.title}</h1>
            <h3>{LANGUAGES_TEXT[language].contact.description}</h3>
          </div>
        </div>


      </div>
    </>

  );
}

export default Contact
