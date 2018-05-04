import { rgba } from 'polished'

const color = {
  white: '#ffffff',
  orange: '#ff842b',
  black_90: rgba(0, 0, 0, 0.9),
  gunmetal: '#2C333B',
  oxfordBlue: '#283038',
  black: '#000000',
}

const mainTheme = {
  color: color,
  primary: {
    navbar: {
      textColor: color.white,
      logoImg: '/files/images/img-logo.svg',
      borderBottom: 'none',
      background: 'transparent',
    },
    banner: {
      color: {
        text: color.white,
      },
    },
    price: {
      color: {
        background: color.gunmetal,
        text: color.white,
      },
    },
    automarketing: {
      color: {
        sectionTitle: color.white,
        content: color.white,
        btnBackground: color.white,
        buttonText: color.orange,
      },
    },
    contact: {
      color: {
        background: color.gunmetal,
        text: color.white,
      },
    },
    footer: {
      color: {
        background: color.oxfordBlue,
        text: rgba(color.white, 0.5),
      },
    },
    button: {
      color: {
        text: color.white,
        background: color.orange,
        outline: color.white,
      },
    },
  },
  secondary: {
    navbar: {
      textColor: color.black,
      logoImg: '/files/images/img-logo-dark.svg',
      borderBottom: `1px solid ${rgba(color.black, 0.1)}`,
      background: color.white,
    },
    banner: {
      color: {
        text: color.white,
      },
    },
    price: {
      color: {
        background: color.gunmetal,
        text: color.white,
      },
    },
    automarketing: {
      color: {
        sectionTitle: color.white,
        content: color.white,
        btnBackground: color.white,
        buttonText: color.orange,
      },
    },
    contact: {
      color: {
        background: color.gunmetal,
        text: color.white,
      },
    },
    footer: {
      color: {
        background: color.oxfordBlue,
        text: rgba(color.white, 0.5),
      },
    },
    button: {
      color: {
        text: color.white,
        background: color.orange,
        outline: color.black,
      },
    },
  },
}

export default mainTheme
