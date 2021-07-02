import {ICON_TYPE} from "./Icon";

export const LANGUAGES = [
  'EN', 'ES'
]

export const LANGUAGES_TEXT = {
  "ES": {
    info:
      {
        intro: 'Hola! soy',
        personalTitle: 'Ingeniero\nde Software',
        message: '¿Necesitas desarrollar un software? Contáctame!'
      },
    sections: [
      {
        id: '/',
        name: 'Home',
        icon: ICON_TYPE.HOME
      },
      {
        id: '/about',
        name: 'Sobre mi',
        icon: ICON_TYPE.ABOUT
      },
      {
        id: '/blog',
        name: 'Blog',
        icon: ICON_TYPE.BLOG
      },
      {
        id: '/contact',
        name: 'Contacto',
        icon: ICON_TYPE.CONTACT
      }
    ]
  },
  "EN": {
    info:
      {
        intro: 'Hello! I\'m',
        personalTitle: 'Software\nEngineer',
        message: 'Do you wat to build a software? Text me! '
      },
    sections: [
      {
        id: '/',
        name: 'Home',
        icon: ICON_TYPE.HOME
      },
      {
        id: '/about',
        name: 'About me',
        icon: ICON_TYPE.ABOUT
      },
      {
        id: '/blog',
        name: 'Blog',
        icon: ICON_TYPE.BLOG
      },
      {
        id: '/contact',
        name: 'Contact',
        icon: ICON_TYPE.CONTACT
      }
    ]
  }
}

