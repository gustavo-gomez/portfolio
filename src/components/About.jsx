import {useEffect} from 'react';
import '../scss/components/about.scss';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import photo from '../images/photo.jpg'
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";
import Header from "./Header";

const About = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
  }, []);

  return (
    <>
      <Header/>
      about
    </>

  );
}

export default About
