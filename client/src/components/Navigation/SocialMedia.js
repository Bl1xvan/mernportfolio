import React from 'react'
import { IconContext } from 'react-icons/lib'
import { FaGithub, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <IconContext.Provider value={{color: "white"}}>
      <a className="rounded centered squared purplediv" href="https://github.com/Bl1xvan"><FaGithub /></a>
      <a className="rounded centered squared purplediv" href="mailto:cflaviendev@gmail.com"><FaEnvelope /></a>
      <a className="rounded centered squared purplediv" href="https://www.linkedin.com/in/christeen-flavien1/"><FaLinkedinIn /></a>
      <a className="rounded centered squared purplediv" href="twitter.com/Delila83803959"><FaTwitter /></a>
   </IconContext.Provider>
  )
}

export default SocialMedia