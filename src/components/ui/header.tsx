interface HeaderProps {
    title: string;
    subtitle?:string;
}

export function Header({title, subtitle}: HeaderProps){
    return(
        <header style = {{
            padding: "2rem",
      background: "var(--background)",
      borderBottom: "1px solid #eee",
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