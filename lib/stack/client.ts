import { StackClient } from '@stackso/js-core'

const stackClient = new StackClient({
  apiKey: process.env.NEXT_PUBLIC_STACK_KEY as string,
  pointSystemId: parseInt(process.env.NEXT_PUBLIC_POINT_SYSTEM_ID as string, 10),
})

export default stackClient
