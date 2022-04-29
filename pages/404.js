import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>Oppsss...</h1>
      <h2>That page is not found</h2>
      <p>
        Go back to <Link href="/"> Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
