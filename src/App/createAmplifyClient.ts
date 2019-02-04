import Amplify from '@aws-amplify/core'
import config from '../aws-exports'

export default function() {
  return Amplify.configure(config)
}
