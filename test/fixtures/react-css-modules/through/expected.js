import _getClassName from "babel-plugin-react-css-modules/dist/browser/getClassName";
import foo from './bar.css';

const _styleModuleImportMap = {
  "foo": {
    "a": "bar__a",
    "z": "bar__z",
    "y": "bar__y"
  }
};
<div className="bar__a"></div>;

<div className="b"></div>;

<div className="c"></div>;

<div className="bar.d"></div>;

<div className="bar__z"></div>;

<div className={_getClassName(y, _styleModuleImportMap, {
  "handleMissingStyleName": "through_log"
})}></div>;