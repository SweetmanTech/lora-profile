import { useState } from 'react'

export enum TABS {
  POSTS,
  MINTED,
}

const useTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS.POSTS)

  return {
    activeTab,
    setActiveTab,
  }
}

export default useTabs
