import React, { useEffect, useState} from 'react'
import Work from '../../Sections/Work'
import { Helmet } from 'react-helmet-async'

function Home() {
 return  <>
 <Helmet>
    <title>home</title>
 </Helmet>
   <Work/>
   </>
}

export default Home