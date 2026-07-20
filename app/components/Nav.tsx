import Link from "next/link";

export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="wordmark" href="/">
          BOQ<span className="plus">+</span>
        </Link>
        <nav className="nav-links">
          <a href="/#late-night">Why BOQ+</a>
          <a href="/#inside">Inside the app</a>
          <a href="/#flywheel">How it compounds</a>
          <a href="/#straight">Straight talk</a>
          <a href="/#pricing">Pricing</a>
        </nav>
        <a className="btn" href="/#get">
          Get the app
        </a>
      </div>
    </header>
  );
}
