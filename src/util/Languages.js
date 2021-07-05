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
      title: 'Estemos en contacto',
      subTitle: '¿Tienes un proyecto en mente?',
      description: 'Si deseas realizar un proyecto, puedes enviarme un mensaje',
      mailSubject: 'Hola Gustavo'
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
      title: 'Be in Touch',
      subTitle: 'Do you have an idea in mind?',
      description: 'If you want to build a project, feel free to text me',
      mailSubject: 'Hello Gustavo'
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

