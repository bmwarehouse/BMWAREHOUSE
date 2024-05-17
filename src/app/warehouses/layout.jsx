'use client';

import Container from '@/components/parts/container';
import Navbar from '@/components/parts/Navbar';
import Sidebar from '@/components/parts/Sidebar';

const WarehousesPageLayout = ({ children }) => (
  <div>
    <Navbar />
    <Sidebar />
    <Container>
      <div>{children}</div>
    </Container>
  </div>
);

export default WarehousesPageLayout;
