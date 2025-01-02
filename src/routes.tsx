// react
import { Route, Routes } from "react-router-dom";
// components
import { RootLayout } from "@/components/layout/root";
// view
import { ExamplePage, GamePage, HomePage } from "@/views";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
