import React, {Suspense} from 'react';
import { Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks'

import { HomeRoute } from 'App/routes/HomeRoute'
import { GameRoute } from 'App/routes/GameRoute'

import createApolloClient from './createApolloClient'
import createAmplifyClient from './createAmplifyClient'

import { Loader, Dimmer } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

const client = createApolloClient()
const amplifyClient = createAmplifyClient()

const PageLoader = () => <Dimmer active><Loader/></Dimmer>

const App: React.SFC<{}> = () =>
  <ApolloProvider {...{client}}>
    <Suspense fallback={<PageLoader/>}>
      <Route exact path="/" component={HomeRoute}/>
      <Route path="/game/:id" component={GameRoute}/>
      {/* <Route path="/me" component={MeRoute}/> */}
      {/* etc */}
    </Suspense>
  </ApolloProvider>

const federated = {
  google_client_id: '961839908462-ca3b0n9c1da5dv2juhkjkkauqu3rmrhd.apps.googleusercontent.com',
  facebook_app_id: '',
}

export default  withAuthenticator(App, { federated } )
