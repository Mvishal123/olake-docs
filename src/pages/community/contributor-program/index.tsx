import React = require('react')
import Layout from '@theme/Layout'
import { useEffect, useState } from 'react'
import HeroSection from '../../../components/community/HeroSection'
import Contributeinmultipleways from '../../../components/community/Contributeinmultipleways'
import ProjectDisciption from '../../../components/community/projectDiscription'
import Whyjointheprogram from '../../../components/community/Why-join-the-program'
import ActiveContributors from '../../../components/community/activeContributors'

const ContributorsProgramPage = () => {
  return (
    <Layout title='OLake Contributors' description='OLake Contributors'>
      <div className='flex flex-col space-y-2'>
        <HeroSection />
        <Contributeinmultipleways />
        <ProjectDisciption />
        <Whyjointheprogram />
        {/* <ActiveContributors/> */}
      </div>
    </Layout>
  )
}

export default ContributorsProgramPage
