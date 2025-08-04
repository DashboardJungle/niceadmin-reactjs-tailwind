import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './css/globals.css'
import App from './App.tsx'
import Spinner from './views/spinner/Spinner.tsx'

import './utils/i18n';
import { CustomizerContextProvider } from './context/CustomizerContext.tsx'


async function deferRender() {
  const { worker } = await import("./api/mocks/browser.ts");
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <CustomizerContextProvider>

      <Suspense fallback={<Spinner />}>

        <App />

      </Suspense>

    </CustomizerContextProvider >

  )
})
