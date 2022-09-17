import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Leagues from './leagues-data/leagues-data'
import Layout from '../public-components/layout/layout'

import * as styles from './cpanel.module.css'

function CPanel() {
  return (
    <Layout>
        <Leagues competitions={`premierleague`}/>
    </Layout>
  )
}

export default CPanel