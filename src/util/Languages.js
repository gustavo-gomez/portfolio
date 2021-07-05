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
    contact: {
      title: 'Contacto',
      description: 'Tienes un proyecto en mente?'
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
      // {
      //   id: '/blog',
      //   name: 'Blog',
      //   icon: ICON_TYPE.BLOG
      // },
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
    contact: {
      title: 'Be In Touch',
      description: 'have an idea?'
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
      // {
      //   id: '/blog',
      //   name: 'Blog',
      //   icon: ICON_TYPE.BLOG
      // },
      {
        id: '/contact',
        name: 'Contact',
        icon: ICON_TYPE.CONTACT
      }
    ]
  }
}

