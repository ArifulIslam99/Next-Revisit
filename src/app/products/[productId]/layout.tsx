export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ backgroundColor: "green" }}>
        <h4>Featured Products!</h4>
      </div>
    </>
  );
}
