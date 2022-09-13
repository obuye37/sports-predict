import React, { Fragment } from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs'
import { Burdesliga, Epl, Laliga, Ligue1, SerieA } from '../../admin-components/leagues-data/nav-tabs-data'
import SearchInput from '../search/searchInput'
import * as styles from './nav-tabs.module.css'
import { RegisterBtn } from '../buttons/register-btn'


const NavTabs = () => {
  const tabs = ['EPL', 'LALIGA', 'SERIE A', 'BURDESLIGA', 'LIGUE 1' ]
  return (
    <Fragment>
      <Tabs>
        <div className={styles.sub_nav_container}>
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center'}}>
              {tabs.map((tab, idx) => <Tab key={idx} style={{margin: "0 10px", textDecoration:"none", listStyle:"none", cursor:'pointer'}}>{tab}</Tab>)}
            </div>
          </div>
          
          <SearchInput />
        </div>
        <TabPanel>
        <Epl />
        </TabPanel>
        <TabPanel>
         <Laliga />
        </TabPanel>
        <TabPanel>
          <SerieA />
        </TabPanel>
        <TabPanel>
          <Burdesliga />
        </TabPanel>
        <TabPanel>
          <Ligue1 />
        </TabPanel>
      </Tabs>
      <RegisterBtn />
    </Fragment>
  )
}

export default NavTabs