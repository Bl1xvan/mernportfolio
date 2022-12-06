import React from 'react'
import { IconContext } from 'react-icons/lib'
import { FaGithub, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <IconContext.Provider value={{color: "white"}}>
      <a className="rounded centered squared mediacolor" href="https://github.com/Bl1xvan"><FaGithub /></a>
      <a className="rounded centered squared mediacolor" href="mailto:cflaviendev@gmail.com"><FaEnvelope /></a>
      <a className="rounded centered squared mediacolor" href="https://www.linkedin.com/in/christeen-flavien1/"><FaLinkedinIn /></a>
      <a className="rounded centered squared mediacolor" href="twitter.com/Delila83803959"><FaTwitter /></a>
   </IconContext.Provider>
  )
}

export default SocialMedia