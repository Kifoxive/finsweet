const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  display:
    "font-sen font-bold text-[40px] xs:text-[56px] text-black leading-[44px] xs:leading-[64px] w-full",
  heading1:
    "font-sen font-bold text-[42px] xs:text-[48px] text-black leading-[58px] xs:leading-[64px] w-full",
  heading2:
    "font-sen font-bold text-[30px] xs:text-[36px] text-black leading-[34px] xs:leading-[48px] w-full",
  heading3:
    "font-sen font-bold text-[24px] xs:text-[28px] text-black leading-[30px] xs:leading-[36px] w-full",
  heading4: "font-sen font-bold text-[24px] text-black leading-[32px] w-full",
  heading5: "font-sen font-bold text-[20px] text-black leading-[32px] w-full",
  heading6: "font-sen font-bold text-[16px] text-black leading-[24px] w-full",
  body1: "font-inter font-normal text-[16px] text-medium-gray leading-[28px]",
  body2: "font-inter font-normal text-[14px] text-medium-gray leading-[20px]",
  label: "font-inter font-mdeium text-[14px] text-black leading-[20px]",
  cap1: "font-inter uppercase tracking-widest font-semibold text-[16px] text-black leading-[20px]",
  cap2: "font-inter font-normal text-[12px] text-black leading-[16px]",
  cap3: "font-inter font-black text-[16px] text-black leading-[20px]",
  cap4: "font-inter uppercase tracking-widest font-normal text-[16px] text-black leading-[20px]",

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
