// react
import { Route, Routes } from "react-router-dom";
// components
import { RootLayout } from "@/components/layout/root";
// view
import { AimGamePage, ExamplePage, HomePage, RRGamePage } from "@/views";
import RedirectHandler from "./lib/redirectHandler";

const AppRoutes: React.FC = () => {
  return (
    <>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="game">
            <Route path="aim" element={<AimGamePage />} />
            <Route path="reaction-rate" element={<RRGamePage />} />
          </Route>
          <Route path="example" element={<ExamplePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
