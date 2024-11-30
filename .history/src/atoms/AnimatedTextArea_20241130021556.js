import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css"

function AnimatedTextArea() {

    const text = "Our team of AI experts partners with organizations to deliver off the shelf & custom solutions that unlock insights, enhance efficiency, and drive impact. From data structuring to predictive analytics, we empower growth, resilience, and security across the continent"

    return (
    <div className='ata-section'>
        <div className='ata-section-right'>
<p>OUR TEAM</p>
<p>wth, resilience, and security across the continent</p>
        </div>
<div className='ata-section-left'>

</div>
    </div>
  )
}

export default AnimatedTextArea