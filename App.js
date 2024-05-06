import { createRouter, Stack, Route } from 'expo-router';
import HomeScreen from './HomeScreen';
import MassageDetail from './MessageDetail';

const Router = createRouter(() => {
  return (
    <Stack>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/massage/:type" element={<MassageDetail />} />
    </Stack>
  );
});

export default Router;
