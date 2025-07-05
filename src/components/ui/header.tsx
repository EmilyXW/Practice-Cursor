interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header style={{
      paddingTop: ".5vh",
      paddingBottom: "2vh",
      background: "var(--background)",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: subtitle ? "0.5rem" : "0"
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{
          fontSize: "1.2rem",
          color: "var(--muted-foreground)",
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}