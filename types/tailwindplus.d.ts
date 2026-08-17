import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'el-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-dialog-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-disclosure': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-dialog-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // Add any other Tailwind Plus custom elements you use here
    }
  }
}

export {};
