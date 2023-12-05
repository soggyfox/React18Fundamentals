import { logo, subtitle } from "./banner.module.css";

const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./GloboLogo.png" alt="logo" className={logo} />
      </div>
      {/* Using Template Literals: */}
      <div className={`col-7 mt-5 ${subtitle}`}>{children}</div>
    </header>
  );
};

export default Banner;

// styles import is an object, it is used as a JS expresion {}
// alt => destructure the logo style in the import and use it directly (preferred)

// USE of the style attribute is discouraged, use CSS files, also better for performance
// inline object OR created object up front passed to the style attribute (preferred mostly)

// destructuring is often used in the propls component to pass a certain value instead of the whole prop object
