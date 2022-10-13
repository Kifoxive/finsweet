const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  display: "font-sen font-bold text-[56px] text-white leading-[64px] w-full",
  heading1: "font-sen font-bold text-[48px] text-white leading-[64px] w-full",
  heading2: "font-sen font-bold text-[36px] text-white leading-[48px] w-full",
  heading3: "font-sen font-bold text-[28px] text-white leading-[36px] w-full",
  heading4: "font-sen font-bold text-[24px] text-white leading-[32px] w-full",
  heading5: "font-sen font-bold text-[20px] text-white leading-[32px] w-full",
  heading6: "font-sen font-bold text-[16px] text-white leading-[24px] w-full",
  body1: "font-sen font-normal text-[16px] text-white leading-[28px]",
  body2: "font-sen font-normal text-[14px] text-white leading-[20px]",
  body3: "font-sen font-normal text-[16px] text-white leading-[28px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles
