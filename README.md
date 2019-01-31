An assistant app for on-line play of the indie RPG "Microscope":
http://www.lamemage.com/microscope/

I started playing this with some gamer friends on a weekly basis, we've been using Lucidchart to track our games.  Games look sort of like this:

![sample microscope board in lucidchart](https://github.com/sdebaun/microscope-rpg/raw/master/sample.png)

So I figured, why not an app?

Live version at https://msb-staging.surge.sh

Interesting Things
- set up to use absolute imports so you can do things like `import foo from 'App/foo'`
- using semantic ui and styled components
- fun with hooks!  especially check out App/lib/useSubscription
- a lot of initial UI design was done with static data in `App/data.tsx`.  I just switched over to 

Backend Notes

I started with Graphcool, a simple cloud graphql provider.  A couple frustrating bugs later, I am ready to move off of it.  Right now I'm waffling between AWS Amplify or Serverless.  Probably start with amplify because it looks dead easy, and there are no libraries that support Suspense and Hooks, and that would be fun to write.

