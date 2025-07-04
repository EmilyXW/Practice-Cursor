export default function TestCSS() {
  return (
    <div>
      <style jsx>{`
        .test-inline {
          background: red;
          color: white;
          padding: 2rem;
        }
      `}</style>
      <div className="test-inline">If this is red, Next.js CSS works!</div>
    </div>
  );
}