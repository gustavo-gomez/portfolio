import { useTranslation } from "react-i18next"
import arrow_section from "../../images/arrow_section.svg"
import { Fragment } from "react";

const phone = (
  <Fragment>
    <path
      d="M97.3478 88.9044H89.7304C89.5043 88.9044 89.2957 89.0087 89.1565 89.2L86.5304 92.9913C81.9043 90.8 78.2 87.0957 76.0087 82.4696L79.8 79.8435C79.9913 79.7218 80.0957 79.4957 80.0957 79.2696V71.6522C80.0957 71.2696 79.7826 70.9565 79.4 70.9565H67.6957C67.313 70.9565 67 71.2696 67 71.6522C67 89.5131 79.487 102 97.3478 102C97.7304 102 98.0435 101.687 98.0435 101.304V89.5826C98.0435 89.2 97.7304 88.887 97.3478 88.887V88.9044Z"
      fill="white" />
    <path
      d="M95.2784 62C88.8088 62 83.5566 67.2696 83.5566 73.7217C83.5566 75.7565 84.0957 77.7565 85.1218 79.5304L82.287 84.4C82.1305 84.6435 82.1653 84.9739 82.3566 85.1826C82.4957 85.3391 82.687 85.4261 82.8957 85.4261C82.9653 85.4261 83.0523 85.4261 83.1218 85.3913L88.7218 83.3913C90.6697 84.7304 92.9479 85.4261 95.3131 85.4261C101.783 85.4261 107.035 80.1565 107.035 73.7043C107.035 67.2522 101.731 62 95.2784 62ZM90.8262 66.7478C88.4262 68.2783 87.0001 70.887 87.0001 73.7217C87.0001 74.1043 86.687 74.4174 86.3044 74.4174C85.9218 74.4174 85.6088 74.1043 85.6088 73.7217C85.6088 70.4174 87.2784 67.3739 90.061 65.5826C90.3914 65.3739 90.8088 65.4783 91.0175 65.7913C91.2262 66.1217 91.1218 66.5391 90.8088 66.7478H90.8262ZM95.2784 78.5391C94.8957 78.5391 94.5827 78.2261 94.5827 77.8435C94.5827 77.4609 94.8957 77.1478 95.2784 77.1478C95.661 77.1478 95.974 77.4609 95.974 77.8435C95.974 78.2261 95.661 78.5391 95.2784 78.5391ZM96.9305 74.1391L96.461 74.4522C96.1653 74.6609 95.974 75.0087 95.974 75.3739V75.7913C95.974 76.1739 95.661 76.487 95.2784 76.487C94.8957 76.487 94.5827 76.1739 94.5827 75.7913V75.3739C94.5827 74.5391 95.0001 73.7739 95.6957 73.3043L96.1653 72.9913C96.461 72.7826 96.6523 72.4348 96.6523 72.0696C96.6523 71.4609 96.1479 70.9565 95.5392 70.9565H95.0001C94.3914 70.9565 93.887 71.4609 93.887 72.0696C93.887 72.4522 93.574 72.7652 93.1914 72.7652C92.8088 72.7652 92.4957 72.4522 92.4957 72.0696C92.4957 70.6957 93.6088 69.5826 94.9827 69.5826H95.5218C96.8957 69.5826 98.0088 70.6957 98.0088 72.0696C98.0088 72.9043 97.5914 73.6696 96.8957 74.1391H96.9305Z"
      fill="white" />
  </Fragment>
)
const pc = (
  <Fragment>
    <path d="M106.068 62H66.9318C66.41 62 66 62.41 66 62.9318V89.9545H107V62.9318C107 62.41 106.59 62 106.068 62Z"
          fill="white" />
    <path
      d="M66 94.6136C66 95.1354 66.41 95.5454 66.9318 95.5454H106.068C106.59 95.5454 107 95.1354 107 94.6136V91.8182H66V94.6136Z"
      fill="white" />
    <path
      d="M94.8862 101.136H90.2271V97.4091H82.7725V101.136H78.1135C77.5916 101.136 77.1816 101.546 77.1816 102.068C77.1816 102.59 77.5916 103 78.1135 103H94.8862C95.408 103 95.818 102.59 95.818 102.068C95.818 101.546 95.408 101.136 94.8862 101.136Z"
      fill="white" />
  </Fragment>
)

const mobilePhone = (
  <Fragment>
    <path
      d="M78.4167 104H94.9167C98.1434 104 100.82 101.598 101.26 98.5H72.0734C72.5134 101.598 75.19 104 78.4167 104ZM85.75 100.333H87.5834C88.0967 100.333 88.5 100.737 88.5 101.25C88.5 101.763 88.0967 102.167 87.5834 102.167H85.75C85.2367 102.167 84.8334 101.763 84.8334 101.25C84.8334 100.737 85.2367 100.333 85.75 100.333Z"
      fill="white" />
    <path
      d="M94.9167 60H78.4167C75.19 60 72.5134 62.4017 72.0734 65.5H101.26C100.82 62.4017 98.1434 60 94.9167 60ZM93.0834 63.6667C92.6067 63.6667 92.1667 63.2817 92.1667 62.75C92.1667 62.2733 92.5334 61.8333 93.0834 61.8333C93.6334 61.8333 94 62.2733 94 62.75C94 63.2633 93.5784 63.6667 93.0834 63.6667Z"
      fill="white" />
    <path d="M101.333 67.3333H72V96.6667H101.333V67.3333Z" fill="white" />
  </Fragment>
)

const getServiceImage = (body, showDark) => {
  return (
    <svg width="174" height="188" viewBox="0 0 174 188" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_98_5791)">
        <path
          d="M79 14.6188C83.9504 11.7607 90.0496 11.7607 95 14.6188L141.354 41.3812C146.304 44.2393 149.354 49.5214 149.354 55.2376V108.762C149.354 114.479 146.304 119.761 141.354 122.619L95 149.381C90.0496 152.239 83.9504 152.239 79 149.381L32.6462 122.619C27.6958 119.761 24.6462 114.479 24.6462 108.762V55.2376C24.6462 49.5214 27.6958 44.2393 32.6462 41.3812L79 14.6188Z"
          fill="url(#paint0_linear_98_5791)" />
        <path
          d="M79 14.6188C83.9504 11.7607 90.0496 11.7607 95 14.6188L141.354 41.3812C146.304 44.2393 149.354 49.5214 149.354 55.2376V108.762C149.354 114.479 146.304 119.761 141.354 122.619L95 149.381C90.0496 152.239 83.9504 152.239 79 149.381L32.6462 122.619C27.6958 119.761 24.6462 114.479 24.6462 108.762V55.2376C24.6462 49.5214 27.6958 44.2393 32.6462 41.3812L79 14.6188Z"
          fill="url(#paint1_linear_98_5791)" />
        <path
          d="M94.5 15.4848L140.854 42.2472C145.495 44.9267 148.354 49.8786 148.354 55.2376V108.762C148.354 114.121 145.495 119.073 140.854 121.753L94.5 148.515C89.859 151.195 84.141 151.195 79.5 148.515L33.1462 121.753C28.5052 119.073 25.6462 114.121 25.6462 108.762V55.2376C25.6462 49.8786 28.5052 44.9267 33.1462 42.2472L79.5 15.4848C84.141 12.8053 89.859 12.8053 94.5 15.4848Z"
          stroke="white" strokeOpacity="0.0782099" strokeWidth="2" />
      </g>
      <path
        d="M92 28.3301L129.796 50.1519C133.2 52.1169 135.296 55.7483 135.296 59.6782V103.322C135.296 107.252 133.2 110.883 129.796 112.848L92 134.67C88.5966 136.635 84.4034 136.635 81 134.67L43.2035 112.848C39.8001 110.883 37.7035 107.252 37.7035 103.322V59.6782C37.7035 55.7483 39.8001 52.1169 43.2035 50.1519L81 28.3301C84.4034 26.3652 88.5966 26.3652 92 28.3301Z"
        stroke={showDark ? "url(#dark)" : "white"}
        strokeWidth="2"
      />
      {body}
      <defs>
        <filter id="filter0_d_98_5791" x="0.646118" y="0.475204" width="172.708" height="187.05"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha" />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0037911 0 0 0 0 0.170599 0 0 0 0.157184 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_5791" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_5791" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_98_5791" x1="15" y1="10" x2="15" y2="154" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D4F95" />
          <stop offset="1" stopColor="#2B2D66" />
        </linearGradient>

        {
          showDark ?
            <linearGradient id="paint1_linear_98_5791" x1="15" y1="10" x2="15" y2="154"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#4D4F95" />
              <stop offset="1" stopColor="#2B2D66" />
            </linearGradient> : <linearGradient id="paint1_linear_98_5791" x1="159" y1="10" x2="15" y2="10"
                                                gradientUnits="userSpaceOnUse">
              <stop stopColor="#6357F6" />
              <stop offset="1" stopColor="#E6606C" />
            </linearGradient>
        }

        <linearGradient id="dark" x1="144" y1="24" x2="29" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6357F6" />
          <stop offset="1" stopColor="#E6606C" />
        </linearGradient>
      </defs>
    </svg>
  )
}


const services = [
  {
    title: "services.service1",
    description: "services.service1Description",
    body: phone
  },
  {
    title: "services.service2",
    description: "services.service2Description",
    body: pc
  },
  {
    title: "services.service3",
    description: "services.service3Description",
    body: mobilePhone
  }
]


const Services = () => {

  const { t } = useTranslation("global")

  return (
    <section className="services-container">
      <div
        className="section-title"
      >
        <img
          className="arrow-left"
          alt="arrow-left"
          src={arrow_section}
        />
        <span
          className="about-me-title"
        >
            {t('services.title')}
          </span>
        <img
          className="arrow-right"
          alt="arrow-right"
          src={arrow_section}
        />
      </div>

      <div
        className="services"
      >
        {
          services.map(service => {
            return (
              <div
                className="service flip-card"
                key={service.title}
              >
                <div className="flip-card-inner">

                  <div className="flip-card-front">
                    {getServiceImage(service.body, true)}
                    {t(service.title)}
                  </div>

                  <div className="flip-card-back">
                    <span className="title">
                      {getServiceImage(service.body, false)}
                      {t(service.title)}
                    </span>
                    <span className="description">
                      {t(service.description)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Services
