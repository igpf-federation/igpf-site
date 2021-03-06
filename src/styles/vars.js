import { objMap } from '../lib/util';

// --------------------------------------------------

const sm = 768;
const md = 992;
const lg = 1200;

export const breakpoints = {
  xs: { min: 0, max: sm - 1 },
  sm: { min: sm, max: md - 1 },
  md: { min: md, max: lg - 1 },
  lg: { min: lg, max: 100000 },
};
export const bps = breakpoints;

export const colors = {
  text: '#575756',
  link: '#4872B2',
  nav: '#eeeeee',
  footer: '#eeeeee',
  transparentGray: 'rgba(0,0,0,0.2)',
  gray: '#eee',
  lines: 'rgba(0,0,0,0.2)',
  primary: '#E85585',
  alt: '#362c5a',
  secondary: '#FFFDF1',
};

export const font = {
  size: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '17px',
  },

  title: {
    family: 'Montserrat',
  },

  pageTitle: {
    size: {
      xs: '30px',
      sm: '40px',
      md: '50px',
      lg: '60px',
    },
    family: 'Fredoka One',
  },

  sectionTitle: {
    size: {
      xs: '26px',
      sm: '30px',
      md: '35px',
      lg: '40px',
    },
    family: 'Fredoka One',
  },
};

const gutter = {
  xs: 15,
  sm: 20,
  md: 30,
  lg: 30,
};

export const scrollbar = {
  width: '10px',
  color: {
    track: '#ddd',
    thumb: colors.text,
  },
};

export const dimensions = {
  nav: {
    height: {
      xs: '50px',
      other: '70px',
    },
    margin: {
      xs: '10px',
      other: '25px',
    },
    logoHeight: {
      xs: '40px',
      other: '60px',
    },
  },
  footer: {
    height: {
      xs: '300px',
      other: '250px',
    },
  },
  gutter: {
    full: objMap(gutter, (k, v) => v + 'px'),
    half: objMap(gutter, (k, v) => 0.5 * v + 'px'),
    quarter: objMap(gutter, (k, v) => 0.25 * v + 'px'),
    minusQuarter: objMap(gutter, (k, v) => -0.25 * v + 'px'),
    tripleHalf: objMap(gutter, (k, v) => 1.5 * v + 'px'),
    fullNum: gutter,
    halfNum: objMap(gutter, (k, v) => 0.5 * v),
    quarterNum: objMap(gutter, (k, v) => 0.25 * v),
    tripleHalfNum: objMap(gutter, (k, v) => 1.5 * v),
  },
  scrollbar: scrollbar.width,
  imageViewer: {
    imagesPane: {
      xs: '120px',
      sm: '60px',
      md: '70px',
      lg: '200px',
    },
    detailsPane: {
      xs: '0px',
      sm: '300px',
      md: '350px',
      lg: '400px',
    },
  },
};

dimensions.gutter.container = {
  ...dimensions.gutter.full,
  xs: dimensions.gutter.full.xs,
};

export const dim = dimensions;

export const imageViewerFadeDuration = 200;
