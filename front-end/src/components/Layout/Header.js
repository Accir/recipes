import React from "react";
import { Divider, Space } from "antd";

function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between mt-6 mb-6">
        <div>Logo</div>
        <div className="flex">
          <Space size="large">
            <div className="flex items-center text-base">Apie</div>
            <div className="flex items-center text-base">Receptai</div>
            <div className="flex items-center text-base">Prisijungti</div>
            <div className="flex items-center text-base">Registruotis</div>
          </Space>
        </div>
      </header>
      <Divider style={{ marginTop: 0 }} />
    </div>
  );
}

export default Header;
