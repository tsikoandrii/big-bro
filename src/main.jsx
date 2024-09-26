import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import 'styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import store from 'store/store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </Provider>,
)