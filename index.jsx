import {createRoot} from 'react-dom/client'

import { Provider } from 'react-redux'
// import store from './StateManagement/Redux/Counter/store'
import store from './StateManagement/Redux/Async/store'

import FormUseReducer from './Hooks/FormUseReducer'
import DemoUseEffect from './Hooks/DemoUseEffect'
import TimerUseRef from './Hooks/TimerUseRef'
import ParentUseCallback from './Hooks/UseCallbackHook/ParentUseCallback'
import DemoUseMemo from './Hooks/DemoUseMemo'
import UseCustomHookUI from './Hooks/CustomHook/UseCustomHookUI'
import UseCustomHookWidthUI from './Hooks/CustomHook/UseCustomHookWidthUI'

// import App from './Performance/useMemo_profiler/App'
// import App from './Performance/React_Lazy_Suspense/App'
// import App from './Performance/ErrorBoundary/App'

// import App from './StateManagement/Redux/Counter/App'
import App from './StateManagement/Redux/Async/App'

const root = createRoot(document.getElementById('root'))

root.render(
    // <FormUseReducer/>
    // <DemoUseEffect />
    // <TimerUseRef />
    // <ParentUseCallback/>
    // <DemoUseMemo />
    // <UseCustomHookUI />
    // <UseCustomHookWidthUI />
    // <App />

    <Provider store={store}>
        <App/>
    </Provider>
)