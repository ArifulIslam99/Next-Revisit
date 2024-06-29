export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      <div style={{ backgroundColor: "grey" }}>
          <h4>Auth Layout</h4>
        </div>
        {children}
        
      </>
    );
  }
  