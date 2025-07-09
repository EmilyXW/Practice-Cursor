interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header style={{
      paddingTop: ".5vh",
      paddingBottom: "2vh",
      background: "rgba(232, 222, 255, 0.0)",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: subtitle ? "0.5rem" : "0"
      }}>
        <span className="text-5xl font-bold text-white">{title}</span>
      </h1>
      {subtitle && (
        <p style={{
          fontSize: "1.2rem",
          color: "white",
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}