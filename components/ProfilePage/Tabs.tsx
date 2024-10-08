import { TABS } from '@/hooks/useTabs'
import { useTabsProvider } from '@/providers/TabsProvider'

const Tabs = () => {
  const { activeTab, setActiveTab } = useTabsProvider()
  const activeClass = '!border-b-black'

  return (
    <div className="border-b border-black w-screen md:w-full flex">
      <button
        type="button"
        className={`flex-1 text-center border-b border-transparent ${activeTab === TABS.POSTS ? activeClass : ''}`}
        onClick={() => setActiveTab(TABS.POSTS)}
      >
        Posts
      </button>
      <button
        type="button"
        className={`flex-1 text-center  border-b border-transparent ${activeTab === TABS.MINTED ? activeClass : ''}`}
        onClick={() => setActiveTab(TABS.MINTED)}
      >
        Minted
      </button>
    </div>
  )
}

export default Tabs
