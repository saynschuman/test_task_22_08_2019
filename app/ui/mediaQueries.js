const size = {
  mobile: '828px',
  tablet: '1140px',
  laptop: '1440',
  desktop: '1920px',
}

export const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  laptop: `@media screen and (max-width: ${size.laptop})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
}
