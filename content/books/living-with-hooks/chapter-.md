React is all about changes and how beautifully it changes UI is the best part of it.
being just an UI library it have to focus more on ui updates and view and in react we called this as rendering.
whenever rendering happens something gets onto the view and react support many different data values which can be rendered like, null, arrays, and jsx
the change in ui in react is termed as rendering or if we go with developer's terms few people call it reconcilation. and react recently reimplemented it's entire rendering logic on top of fiber. a term given by react team.

## how react renders

Conceptually, React does work in two phases:

    The render phase determines what changes need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.
    The commit phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like componentDidMount and componentDidUpdate during this phase.

React organize work this way because it provides a couple of benefits:

    If an error happens while rendering a component, React can safely throw away any of the in-progress work and let an Error Boundary decide what to render.
    If there are a lot of components to render, React can split the work up to be processed in smaller chunks in order to avoid blocking the browser. Once all components have rendered, React can (synchronously) commit the work and e.g. update the DOM. (This is the gist of the new experimental async rendering mode!)
    React can prioritize work. If higher priority work is scheduled while lower priority work is in progress, React can safely set aside the lower priority work for later and start working on the higher priority work instead. Since React only applies updates to e.g. the DOM during the commit phase, it never has to worry about leaving an application in a partially updated (broken) state.

In order for React to safely leverage these benefits it is important that components do not cause side effects during the render phase. This includes subscribing to something (e.g. adding an event handler). Adding a subscription should only be done in the commit phase (componentDidMount or componentDidUpdate) in order to avoid potential memory leaks.

How is all of this related to your question? 😄 Consider the following async rendering scenario:

    Your application has an event dispatcher that components subscribe to.
    A new component is created, and this event dispatcher / target is passed as a prop.
    When the component first renders, it reads the current value of the target and uses it.
    React has a lot of components to process as part of the current render, and so it yields before completing the work.
    During this yielded time, the target dispatches a new value. (Since your component is not yet subscribed, it is not notified of this value.)
    React later resumes the rendering work, finishes, and commits it.
    Your component subscribes to the target in componentDidMount but has already missed the event that was dispatched between the render and subsequent commit.

create-subscription handles this possible case by checking if the value that was rendered is out of sync with the latest value and scheduling a new render by calling setState if it is. This ensures that your component doesn't display stale data.

State updates scheduled from componentDidMount or componentDidUpdate are processed synchronously and flushed before the user sees the UI update. This is important for certain use cases (e.g. positioning a tooltip after measuring a rendered DOM element). In the case we're describing, this means that users of your application will never even see the temporary stale value because React will process the new value (synchronously) before yielding.

That might sound like a good thing, but what if the re-render includes a lot of components or is slow for some other reason? Then it might impact the frame rate and cause your application to feel unresponsive. This is what we are referring to when we say that create-subscription de-opts to synchronous rendering mode in some cases.
