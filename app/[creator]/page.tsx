import ProfilePage from '@/components/ProfilePage'
import getEvents from '@/lib/stack/getEvents'
import fetchProfile from '@/lib/zora/fetchProfile'
import { PointsProvider } from '@/providers/PointsProvider'
import { ZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import _ from 'lodash'
import { Address } from 'viem'

export default async function Creator({ params }) {
  const creator = _.get(params, ['creator'])
  const profile = {
    address: '0xf9fcd1fa7a5a3f2cf6fe3a33e1262b74c04feeda',
    wallets: [
      '0xf9fcd1fa7a5a3f2cf6fe3a33e1262b74c04feeda',
      '0x7305de32957602344486a1016ecc4314da23d46b',
    ],
    addressShort: '0xf9fc…eeda',
    avatar: 'https://euc.li/imagine.zora.eth',
    username: 'imagine',
    displayName: 'imagination studio',
    ensName: 'imagine.zora.eth',
    handle: 'imagine',
    profileId: 'imagine',
    profileName: 'imagination studio',
    ensRecords: {
      address: '0xf9fcd1fa7a5a3f2cf6fe3a33e1262b74c04feeda',
      ens_name: 'imagine.zora.eth',
      text_records: {
        avatar: 'https://euc.li/imagine.zora.eth',
        url: null,
        description: null,
        github: null,
        twitter: null,
        instagram: null,
        discord: null,
        tiktok: null,
      },
    },
    description: '',
    totalFollowers: 536632,
    totalFollowing: 0,
    extension: {
      theme: {
        color: {
          background: '#FFFFFF',
          text: '#000000',
          accent: '#000000',
          accentText: '#FFFFFF',
          border: '#000000',
        },
        font: {
          heading: { fontFamily: 'Arial Narrow Regular', fontSize: '21px', lineHeight: '1.1' },
          body: { fontFamily: 'Arial Narrow Regular', fontSize: '15px', lineHeight: '1.3' },
          caption: { fontFamily: 'Arial Narrow Regular', fontSize: '12px', lineHeight: '1.3' },
        },
        button: { shape: 'inherit' },
        unit: { radius: '1px', base: '6px' },
      },
      links: {
        twitter: 'ourZORA',
        instagram: 'our.zora',
        farcaster: null,
        tiktok: null,
        discord: null,
        website: null,
      },
      options: {
        showMetadataHistories: false,
        useBorders: false,
        textTransform: { heading: 'lowercase', body: 'lowercase', caption: 'lowercase' },
        backgroundImage: {
          image: null,
          title: null,
          blur: 0,
          opacity: 1,
          size: 300,
          repeat: false,
          style: 'fill',
        },
        dropShadow: { spreadRadius: 0, blurRadius: 0, color: '#000000', opacity: 0 },
        textStyling: {
          styleType: 'none',
          horizontalLength: 0,
          verticalLength: 0,
          blurRadius: 0,
          color: '#000000',
          opacity: 0,
        },
        useMusic: false,
        musicUrl: null,
      },
      profile: { displayOptions: { initialView: 'created' } },
      template: 'Default',
    },
    extensionUrl: 'ipfs://bafkreicejorssjjnykacsc3qearzbzon5y6nnqfuhik7szcjssn6kv6wty',
  }
  const creatorAddress = profile.address
  const events = await getEvents(creatorAddress as Address)

  return (
    <ZoraProfileProvider profile={profile}>
      <PointsProvider events={events}>
        <ProfilePage />
      </PointsProvider>
    </ZoraProfileProvider>
  )
}

export const dynamic = 'force-dynamic'
