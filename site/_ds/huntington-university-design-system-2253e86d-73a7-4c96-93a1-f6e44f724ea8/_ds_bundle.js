/* @ds-bundle: {"format":4,"namespace":"HuntingtonUniversityDesignSystem_2253e8","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"0d2d2d9bbe98","components/display/Card.jsx":"d44f534248e2","components/display/SectionHeader.jsx":"ea92db484cee","components/display/Table.jsx":"003c89e30390","components/forms/Button.jsx":"44c3f9e2b110","components/forms/Checkbox.jsx":"2653f1f72f5a","components/forms/Input.jsx":"aa707504d026","components/forms/Select.jsx":"6a2803b7b335"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HuntingtonUniversityDesignSystem_2253e8 = window.HuntingtonUniversityDesignSystem_2253e8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'solid',
  style
}) {
  const v = {
    solid: {
      background: 'var(--hu-green-800)',
      color: 'var(--hu-white)'
    },
    tint: {
      background: 'var(--hu-green-100)',
      color: 'var(--hu-green-800)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--hu-green-800)',
      border: '1px solid var(--hu-green-800)'
    },
    neutral: {
      background: 'var(--hu-gray-100)',
      color: 'var(--hu-gray-700)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.6,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  title,
  children,
  tint = false,
  lift = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint ? 'var(--surface-tint)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: lift ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm)',
      marginBottom: 'var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
function SectionHeader({
  children,
  level = 1,
  number,
  shadow = true,
  inverse = false,
  style
}) {
  const sizes = {
    1: 'var(--text-3xl)',
    2: 'var(--text-2xl)',
    3: 'var(--text-xl)'
  };
  const Tag = `h${level}`;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: sizes[level] || sizes[3],
      lineHeight: 'var(--leading-tight)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-heading)',
      textShadow: shadow && !inverse ? 'var(--shadow-display)' : 'none',
      margin: 0,
      ...style
    }
  }, number != null ? `${number}. ` : '', children);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  style
}) {
  const th = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-sm)',
    textAlign: 'left',
    padding: '10px 14px',
    background: 'var(--surface-brand)',
    color: 'var(--text-inverse)',
    letterSpacing: '0.02em'
  };
  const td = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    padding: '10px 14px',
    borderBottom: '1px solid var(--border-default)',
    verticalAlign: 'top',
    color: 'var(--text-body)',
    lineHeight: 'var(--leading-snug)'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: th
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      ...td,
      fontWeight: j === 0 ? 'var(--weight-semibold)' : 'var(--weight-regular)'
    }
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const pad = {
    sm: '6px 14px',
    md: '10px 20px',
    lg: '14px 28px'
  }[size];
  const fs = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  }[size];
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: fs,
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    letterSpacing: '0.01em',
    lineHeight: 1.2,
    transition: 'background .15s,color .15s,border-color .15s'
  };
  const variants = {
    primary: {
      background: 'var(--surface-brand)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--surface-brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--hu-green-800)',
      border: '2px solid var(--hu-green-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--hu-green-800)',
      border: '1px solid transparent',
      textDecoration: 'underline'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--hu-green-900)',
      borderColor: 'var(--hu-green-900)'
    },
    secondary: {
      background: 'var(--hu-green-50)'
    },
    ghost: {
      color: 'var(--link-hover)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hoverStyles[variant] : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--hu-green-800)',
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
function Radio({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--hu-green-800)',
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: focus ? '2px solid var(--focus-ring)' : '1px solid var(--border-default)',
      margin: focus ? 0 : '1px',
      outline: 'none',
      background: disabled ? 'var(--hu-gray-100)' : 'var(--hu-white)',
      color: 'var(--text-body)'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: focus ? '2px solid var(--focus-ring)' : '1px solid var(--border-default)',
      margin: focus ? 0 : '1px',
      outline: 'none',
      background: disabled ? 'var(--hu-gray-100)' : 'var(--hu-white)',
      color: value ? 'var(--text-body)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
