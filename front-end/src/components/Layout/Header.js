import React from "react";
import { Divider, Space } from "antd";
import { Link } from "react-router-dom";
import {
  getHomePath,
  getLoginPath,
  getRegisterPath,
} from "../../services/navigation/paths";

function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between mt-6 mb-6">
        <Link className="remove-link-decoration" to={getHomePath()}>
          <div>Logo</div>
        </Link>
        <div className="flex">
          <Space size="large">
            <Link className="remove-link-decoration" to="#">
              <div className="flex items-center text-base">Apie</div>
            </Link>
            <Link className="remove-link-decoration" to="#">
              <div className="flex items-center text-base">Receptai</div>
            </Link>
            <Link className="remove-link-decoration" to={getLoginPath()}>
              <div className="flex items-center text-base">Prisijungti</div>
            </Link>
            <Link className="remove-link-decoration" to={getRegisterPath()}>
              <div className="flex items-center text-base">Registruotis</div>
            </Link>
          </Space>
        </div>
      </header>
      <Divider style={{ marginTop: 0 }} />
    </div>
  );
}

export default Header;
