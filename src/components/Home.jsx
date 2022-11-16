import { useEffect } from 'react'
import { currentDarkMode } from '../slices/generalSettingsSlice'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next"
import { BUCKET_IMAGES } from "../util/Languages"
import { useBreakpoint } from "../hooks/useBreakpoint"
import arrow_section from "../images/arrow_section.svg"
import about_me_photo from "../images/about-me-photo.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Home = () => {
  const themeColor = useSelector(currentDarkMode)
  const isDarkMode = themeColor === 'dark'
  const { t } = useTranslation("global")
  const { isXS, isMobile } = useBreakpoint()

  useEffect(() => {
  }, [])

  let robotImage = "robot_"
  robotImage += (isXS) ? "mobile_" : "web_"
  robotImage += isDarkMode ? "dark" : "light"

  const building = BUCKET_IMAGES + "/building_" + ((isMobile) ? "mobile" : "web") + ".png"

  return (
    <div style={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // background: `url(${building}) no-repeat center`,
      // backgroundRepeat: "no-repeat",
      // backgroundImage: `url(${building})`,
      // backgroundSize: "contain",
    }}>
      {/*<div*/}
      {/*  style={{*/}
      {/*    height: "100%",*/}
      {/*    width: "100%",*/}
      {/*    backgroundRepeat: "no-repeat",*/}
      {/*    backgroundImage: `url(${building})`,*/}
      {/*    backgroundSize: "contain",*/}
      {/*  }}*/}
      {/*/>*/}
      <img
        style={{
          bottom: 0,
          position: "fixed",
          maxHeight: "80%",
          maxWidth: "1600px",
          // height: "100%",
          width: isMobile ? "150%" : "100%",
        }}
        src={building} alt="sdfsd"
      />
    </div>
  )
}

export default Home
