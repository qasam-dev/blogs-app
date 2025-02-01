
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router';
import Layout from './layout/Layout';
import { routesConfig } from './routes/routes';
import { Box } from './components/Elements';

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behaviour: "smooth" });
  }, [location]);

  return (
    <Box className='max-w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routesConfig.map((route) => (
            <Route
              key={route}
              index={route.index}
              path={route.index ? undefined : route.path}
              element={route.element}
            />
          ))}
        </Route>
        <Route path="*" element={<Box>404 Error</Box>} />
      </Routes>

    </Box>
  )
}

export default App
