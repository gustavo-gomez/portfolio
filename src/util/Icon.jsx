export const ICON_TYPE = {
  LINKEDIN: "LINKEDIN",
  GITHUB: "GITHUB",
  TELEGRAM: "TELEGRAM",
  STACKOVERFLOW: "STACKOVERFLOW",
  ENGLISH_FLAG: "ENGLISH_FLAG",
  SPANISH_FLAG: "SPANISH_FLAG",
  WHATSAPP: "WHATSAPP"
}

const commonStyle = {
  fill: '#1B75BC'
}
const getSvg = type => {
  switch (type) {
    case ICON_TYPE.LINKEDIN:
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'icons'} style={commonStyle}>
          <title>LinkedIn
            icon</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case ICON_TYPE.GITHUB:
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'icons'} style={commonStyle}>
          <title>GitHub
            icon</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case ICON_TYPE.TELEGRAM:
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'icons'} style={commonStyle}>
          <title>Telegram
            icon</title>
          <path
            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    case ICON_TYPE.STACKOVERFLOW:
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'icons'} style={commonStyle}>
          <title>Stack
            Overflow
            icon</title>
          <path
            d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
        </svg>
      );
    case ICON_TYPE.ENGLISH_FLAG:
      return (
        <svg height="512pt" viewBox="0 -41 512 512" className={'icons'} style={commonStyle}
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="m407 0h-302c-57.898438 0-105 47.101562-105 105v168.945312c0 57.898438 47.101562 105 105 105h15.582031l36.519531 46.332032c2.847657 3.609375 7.1875 5.714844 11.78125 5.714844s8.9375-2.105469 11.78125-5.714844l36.519532-46.332032h189.816406c57.898438 0 105-47.101562 105-105v-168.945312c0-57.898438-47.101562-105-105-105zm0 0"
            fill="#6787f5"/>
          <path
            d="m407 0h-151v378.945312h151c57.898438 0 105-47.101562 105-105v-168.945312c0-57.898438-47.101562-105-105-105zm0 0"
            fill="#38478a"/>
          <path d="m199.757812 401.054688 17.425782-22.109376zm0 0" fill="#fff"/>
          <path
            d="m512 123.253906h-126.121094l93.882813-93.882812c-18.886719-18.175782-44.539063-29.371094-72.761719-29.371094h-25.144531l-59.613281 59.613281v-59.613281h-132.480469v59.613281l-59.613281-59.613281h-25.148438c-28.222656 0-53.875 11.195312-72.761719 29.371094l93.882813 93.882812h-126.121094v132.480469h126.121094l-90.359375 90.355469-3.503907 3.503906c18.886719 18.167969 44.53125 29.351562 72.742188 29.351562h15.582031l4.234375 5.371094 63.335938-63.339844-1.027344 57.96875h135.113281v-59.40625l59.210938 59.40625h25.550781c28.089844 0 53.636719-11.085937 72.496094-29.113281l-3.53125-3.546875-90.25-90.550781h126.285156zm0 0"
            fill="#fff"/>
          <path
            d="m512 123.253906h-126.121094l93.882813-93.882812c-18.886719-18.175782-44.539063-29.371094-72.761719-29.371094h-25.144531l-59.613281 59.613281v-59.613281h-66.242188v378.945312h66.238281v-59.40625l59.210938 59.40625h25.550781c28.089844 0 53.636719-11.085937 72.496094-29.113281l-3.53125-3.546875-90.25-90.550781h126.285156zm0 0"
            fill="#c7d3ed"/>
          <path
            d="m292.238281 153.253906v-153.253906h-72.476562v153.253906h-219.761719v72.480469h219.761719l-2.578125 153.210937h75.054687v-153.210937h219.761719v-72.480469zm0 0"
            fill="#ff337a"/>
          <path
            d="m292.238281 153.253906v-153.253906h-36.238281v378.945312h36.238281v-153.210937h219.761719v-72.480469zm0 0"
            fill="#d1005b"/>
          <path
            d="m199.757812 133.25v-21.210938l-110.8125-110.8125c-11.363281 1.75-22.132812 5.332032-31.996093 10.429688l121.597656 121.59375zm0 0"
            fill="#ff337a"/>
          <path
            d="m455.050781 11.65625c-9.863281-5.097656-20.632812-8.679688-31.996093-10.429688l-110.8125 110.8125v21.210938h21.210937zm0 0"
            fill="#d1005b"/>
          <path
            d="m56.976562 367.304688c9.867188 5.09375 20.636719 8.671874 32.003907 10.421874l110.777343-110.78125v-21.210937h-21.210937zm0 0"
            fill="#ff337a"/>
          <path
            d="m312.242188 245.734375v21.273437l110.398437 110.773438c11.386719-1.710938 22.183594-5.25 32.074219-10.316406l-121.320313-121.730469zm0 0"
            fill="#d1005b"/>
        </svg>
      );
    case ICON_TYPE.SPANISH_FLAG:
      return (
        <svg height="512pt" viewBox="0 -41 512 512" className={'icons'} style={commonStyle}
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="m407 0h-302c-57.898438 0-105 47.101562-105 105v168.945312c0 57.898438 47.101562 105 105 105h15.582031l36.519531 46.332032c2.847657 3.609375 7.1875 5.714844 11.78125 5.714844s8.9375-2.105469 11.78125-5.714844l36.519532-46.332032h189.816406c57.898438 0 105-47.101562 105-105v-168.945312c0-57.898438-47.101562-105-105-105zm0 0"
            fill="#ff337a"/>
          <path d="m0 117.957031h512v143.074219h-512zm0 0" fill="#ffe95c"/>
          <path
            d="m407 0h-151v378.945312h151c57.898438 0 105-47.101562 105-105v-168.945312c0-57.898438-47.101562-105-105-105zm0 0"
            fill="#d1005b"/>
          <path d="m256 117.957031h256v143.074219h-256zm0 0" fill="#fcc733"/>
        </svg>
      );
    case ICON_TYPE.WHATSAPP:
      return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'icons'} style={commonStyle}>
          <title>WhatsApp icon</title>
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      );
    default:
      return null
  }
}

const Icon = ({iconType, link, className, style}) => {
  return (
    <div>
      <a className={`icon-container ${className}`} href={link} style={{...style}} target='_blank' rel='noreferrer'>
        {getSvg(iconType)}
      </a>
    </div>
  )
}

export default Icon;