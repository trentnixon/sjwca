

export const track_ga_event = ({ action, params }) => {
    console.log({ action, params })
    window.gtag('event', action, params)   
  }