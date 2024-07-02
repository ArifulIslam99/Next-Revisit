"use client";
import { useState } from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const [LoggedIn, setLoggedIn] = useState(true);

  return LoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> {users} </div>
          <div> {revenue} </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div> <br />
        <button onClick={()=> setLoggedIn(false)}>Sign Out</button>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
