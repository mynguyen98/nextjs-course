import LogoSymbol from "../icons/logo/logo-symbol";
import classes from "./footer.module.css";
export default function MainFooter() {
  return (
    <section className={classes.section}>
      <div>
        <div>
          <span>
            <LogoSymbol />
          </span>
          <p>EVERSTAR GLOBAL JOINT STOCK COMPANY</p>
        </div>
      </div>
    </section>
  );
}
