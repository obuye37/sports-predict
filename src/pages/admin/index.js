import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Leagues from '../../components/admin-components/leagues-data/leagues-data'
import Layout from '../../components/public-components/layout/layout'

import * as styles from './adminIndex.module.css'

const Admin = () => {

  return (
    <Layout>
      <Tabs>
        <TabList className={styles.tabList}>
          <Tab>EPL</Tab>
          <Tab>La Liga</Tab>
          <Tab> Bundesliga </Tab>
          <Tab>Serie A</Tab>
          <Tab>Ligue 1</Tab>
        </TabList>
      <TabPanel>
        <Leagues competitions={`premierleague`} />
      </TabPanel>
      <TabPanel>
        <Leagues competitions={`liga`}/>
      </TabPanel>
      <TabPanel>
        <Leagues competitions={`bundesliga`}/>
      </TabPanel>
      <TabPanel>
        <Leagues competitions={`seriea`}/>
      </TabPanel>
      <TabPanel>
        <Leagues competitions={`ligueone`}/>
      </TabPanel>
      </Tabs>
    </Layout>
  )
}

export default Admin