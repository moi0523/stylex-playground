import * as stylex from '@stylexjs/stylex';

export const buttonStyle = stylex.create({
  default: {
    padding: '8px 10px',
  },
  primary: {
    border: {
      default: '1px solid blue',
    },
    backgroundColor: {
      default: 'blue',
      ':hover': '#6d85b2',
      ':disabled': '#cccccc',
    },
  },
  secondary: {
    border: {
      default: '1px solid blue',
    },
    backgroundColor: {
      default: '#ffffff',
      ':disabled': '#cccccc',
    },
  },
  tertiary: {
    border: {
      default: '1px solid #666666',
    },
    backgroundColor: {
      default: '#ffffff',
      ':disabled': '#cccccc',
    },
  },
});
