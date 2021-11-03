export const API_BASE_URL = process.env.REACT_APP_BASE_URL + '/api'
export const BASE_URL_WEB = process.env.REACT_APP_BASE_URL_WEB
export const cookieKey = `${process.env.REACT_APP_COOKIE_KEY}`

export const MAX_REQUESTS_COUNT = 1
export const INTERVAL_MS = 10

export const COLORS = {
   // base colors
   basecolor: '#003189',
   hovercolor: '#538EE1',
   backgroundcontent: '#f0f2f5',
   baseblack: '#000',
   basegrey: '#FBFBFB',
   baseorange: '#f58c36',
   basepurple: '#f368e0',
   basegreen: '#8ac926',
   baseoranged: '#ff8058',
   baseblue: '#4492dc',
   basered: '#ff0000',
}

export const SERVICE = {
   term: `${BASE_URL_WEB}/term/toc.html`,
   policy: `${BASE_URL_WEB}/term/policy.html`,
   howto: `${BASE_URL_WEB}/howto/m`,
}

export const colorPallet = [
   'linear-gradient(to top, #439bfd, #6dd5ed)', //gradient blue
   'linear-gradient(to top, #11998e, #38ef7d)', //gradient green
   'linear-gradient(to top, #fc4a1a, #f7b733)', //gradient orange
   'linear-gradient(to top, #ff9966, #ff5e62)', //gradient black orange
   'linear-gradient(to top, #7f00ff, #e100ff)', //gradient purple
   'linear-gradient(to top, #0cebeb, #20e3b2, #29ffc6)', //gradient bright green
   'linear-gradient(to top, #D387AB, #E899DC)', //gradient pink
   'linear-gradient(to top, #96E4DF, #4DCCC6)', //gradient Login screen
]